export function MetaRedirect({ to }: { to: string }) {
  return (
    <html>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        <link rel="canonical" href={to} />
      </head>
      <body />
    </html>
  );
}
