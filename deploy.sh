#!/usr/bin/env bash
# Build locally and deploy the standalone bundle to the VPS (runs beside other apps).
# Usage: DEPLOY_HOST=1.2.3.4 ./deploy.sh
set -euo pipefail

HOST="${DEPLOY_HOST:?set DEPLOY_HOST}"
USER="${DEPLOY_USER:-root}"
APP_DIR="${DEPLOY_DIR:-/var/www/pocketoption}"
SSH="${SSH_CMD:-ssh -o StrictHostKeyChecking=no}"
RSYNC_RSH="${SSH}"
export RSYNC_RSH

cd "$(dirname "$0")"

echo "[$(date +%T)] building"
npm run build

STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT
cp -r .next/standalone/. "$STAGE/"
mkdir -p "$STAGE/.next/static" "$STAGE/public"
cp -r .next/static/. "$STAGE/.next/static/"
cp -r public/. "$STAGE/public/"
cp ecosystem.config.js "$STAGE/"

echo "[$(date +%T)] syncing to $USER@$HOST:$APP_DIR"
$SSH "$USER@$HOST" "mkdir -p $APP_DIR"
rsync -az --delete --chown=root:root --chmod=D755,F644 "$STAGE/" "$USER@$HOST:$APP_DIR/"

echo "[$(date +%T)] restarting pm2"
$SSH "$USER@$HOST" "cd $APP_DIR && pm2 startOrReload ecosystem.config.js --update-env && pm2 save >/dev/null"

echo "[$(date +%T)] deploy done"
