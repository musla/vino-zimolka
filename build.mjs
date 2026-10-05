// Jednoduchý statický generátor bez závislostí: node build.mjs → dist/
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { layout, pageHero } from "./src/layout.mjs";
import { staticPages } from "./src/pages.mjs";
import { SITE, icon, esc, slugify, visitCta, thumb } from "./src/lib.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, "dist");
const readJson = (p) => JSON.parse(readFileSync(join(root, p), "utf8"));

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, "assets"), out, { recursive: true });
cpSync(join(root, "src/css"), join(out, "css"), { recursive: true });
cpSync(join(root, "src/js"), join(out, "js"), { recursive: true });

const pages = [...staticPages];

/* ---------- Katalog vín ---------- */
const RED = new Set([16, 17, 18, 19]);
const SPECIAL = new Set([20, 21, 22]);
const colorOf = (w) => (RED.has(w.id) ? "cervene" : SPECIAL.has(w.id) ? "speciality" : "bile");
const colorLabel = { bile: "Bílé", cervene: "Červené", speciality: "Specialita" };
const wines = readJson("src/data/wines.json").map((w) => ({ ...w, slug: slugify(w.name), color: colorOf(w) }));

const ageGate = `
<dialog class="age-gate" aria-labelledby="age-title">
  <div class="age-gate-inner">
    <img src="/images/logo.png" alt="" width="472" height="472">
    <h2 id="age-title">Pokračováním potvrzuji, že jsem starší 18 let.</h2>
    <div class="btn-row">
      <a class="btn btn--outline" href="/">Odejít</a>
      <button class="btn btn--dark" type="button" data-agree>Souhlasím</button>
    </div>
  </div>
</dialog>`;

const filterBtns = (filter, options) =>
  options
    .map(([value, label], i) => `<button class="filter-btn" type="button" data-filter="${filter}" data-value="${value}" aria-pressed="${i === 0}">${label}</button>`)
    .join("");

const typeSlug = (t) => slugify(t) || "ostatni";

pages.push({
  path: "/katalog-vin/",
  title: "Katalog vín | Vinný sklep Michal Zimolka",
  description: "Bílá, červená a speciální vína z vlastních vinic v Mutěnicích — Tramín červený, Pálava, Hibernal, Solaris, Alibernet a další.",
  image: "/images/fotky/23n.jpg",
  extraBody: ageGate,
  body: `
${pageHero({ image: "/images/fotky/23n.jpg", eyebrow: "Z vlastních vinic", title: "Katalog vín", text: "Vína převážně přívlastkových kvalit — ochutnejte je u nás ve sklepě, nebo si je objednejte domů." })}

<section class="section">
  <div class="container">
    <div class="filters reveal">
      <div class="filter-group" role="group" aria-label="Filtrovat podle barvy"><span class="label">Barva</span>${filterBtns("color", [["all", "Vše"], ["bile", "Bílá"], ["cervene", "Červená"], ["speciality", "Speciality"]])}</div>
      <div class="filter-group" role="group" aria-label="Filtrovat podle typu"><span class="label">Typ</span>${filterBtns("type", [["all", "Vše"], ["suche", "Suché"], ["polosuche", "Polosuché"], ["polosladke", "Polosladké"]])}</div>
      <span class="filters-count" aria-live="polite"></span>
    </div>
    <div class="wines">
      ${wines
        .map(
          (w) => `<a class="wine reveal" href="/katalog-vin/${w.slug}/" data-type="${typeSlug(w.type)}" data-color="${w.color}">
        <div class="wine-media"><img src="${w.img.replace("/orez4/", "/orez3/")}" alt="${esc(w.name)}" loading="lazy" width="400" height="400"><span class="wine-tag">${colorLabel[w.color]}</span></div>
        <div class="wine-body">
          <h3>${esc(w.name)}</h3>
          <span class="muted" style="font-size:.9rem">${esc(w.type)}</span>
          <div class="wine-foot"><span class="wine-price">${w.price} Kč</span><span class="wine-arrow">${icon.arrow}</span></div>
        </div>
      </a>`
        )
        .join("\n      ")}
    </div>
  </div>
</section>
${visitCta("/images/fotky/23n.jpg")}
`,
});

for (const w of wines) {
  pages.push({
    path: `/katalog-vin/${w.slug}/`,
    title: `${w.name} | Katalog vín Zimolka`,
    description: (w.desc || `${w.name} z vinařství Zimolka, Mutěnice.`).slice(0, 160),
    image: w.img,
    extraBody: ageGate,
    body: `
<section class="section" style="padding-top:calc(var(--header-h) + 48px);background:var(--paper)">
  <div class="container">
    <a class="back-link" href="/katalog-vin/">${icon.back} Zpět do katalogu</a>
    <div class="wine-detail">
      <a class="wine-detail-media" href="${w.big}" data-lightbox="wine" data-caption="${esc(w.name)}">
        <img src="${w.img}" alt="${esc(w.name)}" width="600" height="600">
      </a>
      <div>
        <span class="eyebrow">${colorLabel[w.color]} víno · ${esc(w.type)}</span>
        <h1>${esc(w.name)}</h1>
        <div class="wine-meta">
          <span class="price">${w.price} Kč <small>s DPH</small></span>
          <a class="btn btn--dark" href="/objednavka/?vino=${encodeURIComponent(w.name)}">${icon.bottle} Objednat</a>
        </div>
        ${w.type ? `<p>Typ vína: <b>${esc(w.type)}</b></p>` : ""}
        ${w.desc ? `<p class="lead">${esc(w.desc)}</p>` : ""}
        ${
          w.params.length
            ? `<table class="params"><tbody>${w.params.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table>`
            : ""
        }
      </div>
    </div>
  </div>
</section>
${visitCta("/images/fotky/23n.jpg")}
`,
    // the header sits on a light background on detail pages
    headerSolid: true,
  });
}

/* ---------- Fotogalerie ---------- */
const gallery = readJson("src/data/gallery.json");
pages.push({
  path: "/fotogalerie/",
  title: "Fotogalerie | Vinný sklep Michal Zimolka",
  description: "Fotografie z vinného sklepa, degustací, vinic a ubytování v Mutěnicích.",
  image: "/gallery/219.jpg",
  body: `
${pageHero({ image: "/gallery/219.jpg", eyebrow: "Ze sklepa i z vinic", title: "Fotogalerie" })}
<section class="section">
  <div class="container">
    <div class="gallery">
      ${gallery.map((n) => `<a href="/gallery/${n}.jpg" data-lightbox="galerie" data-caption="Fotogalerie"><img src="${thumb(`/gallery/${n}.jpg`)}" alt="Fotogalerie" loading="lazy" width="480" height="320"></a>`).join("\n      ")}
    </div>
  </div>
</section>
${visitCta()}
`,
});

/* ---------- GDPR ---------- */
pages.push({
  path: "/gdpr/",
  title: "Informace o zpracování osobních údajů | Vinný sklep Michal Zimolka",
  description: "Informace o zpracování osobních údajů – Michal Zimolka, Mutěnice.",
  image: "/images/fotky/28.jpg",
  body: `
${pageHero({ image: "/images/fotky/28.jpg", eyebrow: "GDPR", title: "Informace o zpracování osobních údajů" })}
<section class="section section--paper"><div class="container"><div class="prose">${readFileSync(join(root, "src/data/gdpr.html"), "utf8")}</div></div></section>
`,
});

/* ---------- 404 ---------- */
pages.push({
  path: "/404.html",
  file: "404.html",
  title: "Stránka nenalezena | Vinný sklep Michal Zimolka",
  description: "",
  body: `
${pageHero({ image: "/images/fotky/23n.jpg", eyebrow: "Chyba 404", title: "Tahle láhev už je vypitá", text: "Stránka, kterou hledáte, neexistuje. Zkuste to přes menu, nebo se vraťte na úvod." })}
<section class="section center"><a class="btn btn--dark" href="/">Zpět na úvod</a></section>
`,
});

/* ---------- Zápis ---------- */
// verze CSS/JS podle obsahu → po nasazení si prohlížeč stáhne novou verzi i při dlouhé cache
const version = (f) => createHash("sha1").update(readFileSync(join(out, f))).digest("hex").slice(0, 8);
const cssV = version("css/style.css");
const jsV = version("js/main.js");

for (const p of pages) {
  let html = layout(p)
    .replace('href="/css/style.css"', `href="/css/style.css?v=${cssV}"`)
    .replace('src="/js/main.js"', `src="/js/main.js?v=${jsV}"`);
  if (p.headerSolid) html = html.replace('<header class="site-header">', '<header class="site-header is-scrolled" data-solid>');
  const file = p.file ? join(out, p.file) : join(out, p.path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

const urls = pages.filter((p) => !p.file).map((p) => `  <url><loc>${SITE.url}${p.path}</loc></url>`).join("\n");
writeFileSync(join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
writeFileSync(join(out, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);

// Apache: vlastní 404 a přesměrování starých odkazů katalogu (/katalog-vin/?id=1) na nové adresy
const wineRedirects = wines
  .map((w) => `RewriteCond %{QUERY_STRING} (^|&)id=${w.id}(&|$)\nRewriteRule ^katalog-vin/?$ /katalog-vin/${w.slug}/? [R=301,L]`)
  .join("\n");
writeFileSync(
  join(out, ".htaccess"),
  `DirectoryIndex index.html
ErrorDocument 404 /404.html
Options -Indexes

# soubor nasazovací akce (seznam souborů) nemá být veřejný
<Files ".ftp-deploy-sync-state.json">
  Require all denied
</Files>

<IfModule mod_rewrite.c>
RewriteEngine On

# vše na https://www.vinozimolka.cz (X-Forwarded-Proto pro případ proxy, aby nevznikla smyčka)
RewriteCond %{HTTPS} !=on
RewriteCond %{HTTP:X-Forwarded-Proto} !=https
RewriteRule ^ https://www.vinozimolka.cz%{REQUEST_URI} [R=301,L]
RewriteCond %{HTTP_HOST} !^www\\. [NC]
RewriteRule ^ https://www.vinozimolka.cz%{REQUEST_URI} [R=301,L]

${wineRedirects}
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml application/xml text/xml text/plain
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 month"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(css|js)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`
);

console.log(`✓ ${pages.length} stránek → dist/`);
