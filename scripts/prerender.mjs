/**
 * prerender.mjs — Post-build script that generates per-route HTML files
 * with correct meta tags, OG tags, Twitter cards, canonical URLs, and JSON-LD.
 *
 * Also generates sitemap.xml and robots.txt.
 *
 * Run: node scripts/prerender.mjs
 * Called automatically by: npm run build
 *
 * Zero external dependencies — uses only Node.js built-ins.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes, BASE_URL, OG_IMAGE, SITE_NAME } from './seo-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

// ─── Escaping helpers ───────────────────────────────────────────────

/** Escape for use inside HTML attribute values (content="...") */
function escapeHtmlAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Escape for use inside <script type="application/ld+json"> blocks.
 *  JSON.stringify handles most things, but we must escape <, >, & to prevent
 *  the browser from interpreting </script> or HTML entities inside the block. */
function escapeJsonLd(jsonString) {
  return jsonString
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

// ─── Tag injection helpers ──────────────────────────────────────────

/**
 * Replace or insert a tag in the HTML string.
 * @param {string} html - The HTML string to modify
 * @param {string} pattern - Regex pattern to find existing tag
 * @param {string} replacement - The full replacement tag string
 * @param {string} insertAnchor - String to insert before if pattern not found
 * @param {string} label - Human-readable label for error messages
 * @returns {{ html: string, ok: boolean }} Modified HTML and success flag
 */
function replaceOrInsert(html, pattern, replacement, insertAnchor, label) {
  const regex = new RegExp(pattern, 'i');
  if (regex.test(html)) {
    const result = html.replace(regex, replacement);
    if (result === html) {
      console.warn(`  ⚠ ${label}: regex matched but replacement was identical`);
    }
    return { html: result, ok: true };
  }
  // Tag doesn't exist — insert before anchor
  if (html.includes(insertAnchor)) {
    console.log(`  + ${label}: inserting (not found in template)`);
    return { html: html.replace(insertAnchor, `${replacement}\n  ${insertAnchor}`), ok: true };
  }
  console.error(`  ✗ ${label}: could not find pattern or anchor!`);
  return { html, ok: false };
}

// ─── Main ───────────────────────────────────────────────────────────

function main() {
  const templatePath = join(DIST, 'index.html');
  if (!existsSync(templatePath)) {
    console.error('✗ dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  const template = readFileSync(templatePath, 'utf-8');
  console.log(`\n🔍 Pre-rendering ${routes.length} routes...\n`);

  let successCount = 0;
  let failCount = 0;

  for (const route of routes) {
    const canonicalUrl = `${BASE_URL}${route.path}`;
    const ogImageUrl = `${BASE_URL}${OG_IMAGE}`;
    const safeTitle = escapeHtmlAttr(route.title);
    const safeDesc = escapeHtmlAttr(route.description);

    let html = template;
    let routeOk = true;

    const apply = (pattern, replacement, anchor, label) => {
      const result = replaceOrInsert(html, pattern, replacement, anchor, label);
      html = result.html;
      if (!result.ok) routeOk = false;
    };

    // 1. <title>
    apply(
      '<title>[^<]*</title>',
      `<title>${safeTitle}</title>`,
      '</head>',
      'title'
    );

    // 2. <meta name="description">
    apply(
      '<meta\\s+name="description"[^>]*>',
      `<meta name="description" content="${safeDesc}">`,
      '</head>',
      'meta description'
    );

    // 3. <link rel="canonical">
    apply(
      '<link\\s+rel="canonical"[^>]*>',
      `<link rel="canonical" href="${canonicalUrl}">`,
      '</head>',
      'canonical'
    );

    // 4. Open Graph tags
    apply(
      '<meta\\s+property="og:title"[^>]*>',
      `<meta property="og:title" content="${safeTitle}">`,
      '</head>',
      'og:title'
    );
    apply(
      '<meta\\s+property="og:description"[^>]*>',
      `<meta property="og:description" content="${safeDesc}">`,
      '</head>',
      'og:description'
    );
    apply(
      '<meta\\s+property="og:url"[^>]*>',
      `<meta property="og:url" content="${canonicalUrl}">`,
      '</head>',
      'og:url'
    );
    apply(
      '<meta\\s+property="og:image"[^>]*>',
      `<meta property="og:image" content="${ogImageUrl}">`,
      '</head>',
      'og:image'
    );

    // 5. Twitter card tags
    apply(
      '<meta\\s+name="twitter:title"[^>]*>',
      `<meta name="twitter:title" content="${safeTitle}">`,
      '</head>',
      'twitter:title'
    );
    apply(
      '<meta\\s+name="twitter:description"[^>]*>',
      `<meta name="twitter:description" content="${safeDesc}">`,
      '</head>',
      'twitter:description'
    );
    apply(
      '<meta\\s+name="twitter:image"[^>]*>',
      `<meta name="twitter:image" content="${ogImageUrl}">`,
      '</head>',
      'twitter:image'
    );

    // 6. JSON-LD structured data — replace the entire block
    if (route.jsonLd) {
      const jsonLdString = escapeJsonLd(JSON.stringify(route.jsonLd, null, 2));
      const jsonLdBlock = `<script type="application/ld+json">\n  ${jsonLdString}\n  </script>`;
      apply(
        '<script\\s+type="application/ld\\+json">[\\s\\S]*?</script>',
        jsonLdBlock,
        '</head>',
        'JSON-LD'
      );
    }

    if (!routeOk) {
      console.error(`  ✗ ${route.path}: one or more tags could not be injected`);
      failCount++;
      continue;
    }

    // Write to correct file path
    let outDir;
    if (route.path === '/') {
      // Homepage — overwrite the root index.html
      outDir = DIST;
    } else {
      // Subpages — write to dist/{path}/index.html
      outDir = join(DIST, route.path);
    }
    try {
      mkdirSync(outDir, { recursive: true });
      const outPath = join(outDir, 'index.html');
      writeFileSync(outPath, html, 'utf-8');
      console.log(`  ✓ ${route.path} → ${outPath.replace(DIST, 'dist')}`);
      successCount++;
    } catch (err) {
      console.error(`  ✗ ${route.path}: failed to write — ${err.message}`);
      failCount++;
    }
  }

  // ─── Generate sitemap.xml ───────────────────────────────────────
  const sitemapEntries = routes
    .map(
      (r) =>
        `  <url>\n    <loc>${BASE_URL}${r.path}</loc>\n    <lastmod>${r.lastmod}</lastmod>\n  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

  writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf-8');
  console.log(`  ✓ sitemap.xml (${routes.length} URLs)`);

  // ─── Generate robots.txt ────────────────────────────────────────
  const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  writeFileSync(join(DIST, 'robots.txt'), robots, 'utf-8');
  console.log(`  ✓ robots.txt`);

  console.log(`\n✅ Pre-rendered ${successCount}/${routes.length} routes successfully.\n`);

  if (failCount > 0) {
    console.error(`\n✗ ${failCount} route(s) failed to pre-render.`);
    process.exit(1);
  }
}

try {
  main();
} catch (err) {
  console.error(`\n✗ Pre-render failed: ${err.message}`);
  process.exit(1);
}
