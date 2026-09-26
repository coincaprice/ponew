<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sitemap — pocketoption.dev</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f6f9; color: #333; }
          header { background: #0d1b2a; color: #fff; padding: 24px 40px; }
          header h1 { font-size: 22px; font-weight: 700; }
          header p { font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 4px; }
          .container { max-width: 960px; margin: 32px auto; padding: 0 24px; }
          .stats { display: flex; gap: 16px; margin-bottom: 24px; }
          .stat { background: #fff; border-radius: 8px; padding: 16px 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
          .stat span { font-size: 28px; font-weight: 700; color: #0099fa; display: block; }
          .stat label { font-size: 12px; color: #888; margin-top: 2px; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
          thead { background: #0d1b2a; color: #fff; }
          thead th { padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
          tbody tr:nth-child(even) { background: #f9fafb; }
          tbody tr:hover { background: #eef5ff; }
          td { padding: 11px 16px; font-size: 13px; border-bottom: 1px solid #eee; }
          td a { color: #0052cc; text-decoration: none; }
          td a:hover { text-decoration: underline; }
          .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; }
          .badge-high { background: #e6f4ea; color: #1a7f37; }
          .badge-med { background: #fff3cd; color: #856404; }
          .badge-low { background: #f8d7da; color: #842029; }
        </style>
      </head>
      <body>
        <header>
          <h1>XML Sitemap</h1>
          <p>pocketoption.dev — Generated for Google Search Console</p>
        </header>
        <div class="container">
          <div class="stats">
            <div class="stat">
              <span><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
              <label>Total URLs</label>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority >= 0.8">
                        <span class="badge badge-high"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:when test="sitemap:priority >= 0.5">
                        <span class="badge badge-med"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="badge badge-low"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
