import type { LucideIcon } from 'lucide-react';

const BRAND = '#0099FA';

export function IconBadge({ icon: Icon, size = 64 }: { icon: LucideIcon; size?: number }) {
  const inner = Math.round(size / 2);
  return (
    <div className="flex items-center justify-center rounded-full" style={{ width: size, height: size, background: '#EEF3FA' }}>
      <Icon style={{ width: inner, height: inner, color: BRAND }} strokeWidth={1.75} fill={BRAND} fillOpacity={0.18} />
    </div>
  );
}
