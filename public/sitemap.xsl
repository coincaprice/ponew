<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap – pocketoption.lc</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          body{margin:0;font:15px/1.5 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a;background:#f6f8fc}
          header{background:linear-gradient(135deg,#061B3A,#0B3B8F);color:#fff;padding:32px 24px}
          header h1{margin:0 0 6px;font-size:22px}
          header p{margin:0;opacity:.8;font-size:14px}
          main{max-width:1200px;margin:24px auto;padding:0 16px}
          table{width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(15,23,42,.08)}
          th,td{padding:10px 14px;text-align:left;border-bottom:1px solid #e9eef6;font-size:14px}
          th{background:#eef3fb;color:#334155;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.04em}
          tr:hover td{background:#f9fbfe}
          a{color:#0B6EF6;text-decoration:none;word-break:break-all}
          a:hover{text-decoration:underline}
          .n{color:#64748b;white-space:nowrap}
          .l{font-size:11px;color:#64748b}
        </style>
      </head>
      <body>
        <header>
          <h1>XML Sitemap</h1>
          <p>This sitemap contains <xsl:value-of select="count(s:urlset/s:url)"/> URLs. Generated for search engines; alternate language versions are listed per URL.</p>
        </header>
        <main>
          <table>
            <thead><tr><th>#</th><th>URL</th><th>Languages</th><th>Last modified</th><th>Frequency</th><th>Priority</th></tr></thead>
            <tbody>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td class="n"><xsl:value-of select="position()"/></td>
                  <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                  <td class="l"><xsl:for-each select="xhtml:link[@hreflang!='x-default']"><xsl:value-of select="@hreflang"/><xsl:if test="position()!=last()">, </xsl:if></xsl:for-each></td>
                  <td class="n"><xsl:value-of select="s:lastmod"/></td>
                  <td class="n"><xsl:value-of select="s:changefreq"/></td>
                  <td class="n"><xsl:value-of select="s:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
