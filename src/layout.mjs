import { SITE, NAV, icon, esc } from "./lib.mjs";

const nav = (path) =>
  NAV.map(
    ({ href, label }) =>
      `<li><a href="${href}"${href === path || (href !== "/" && path.startsWith(href)) ? ' aria-current="page"' : ""}>${label}</a></li>`
  ).join("");

export const pageHero = ({ image, eyebrow, title, text = "" }) => `
<section class="page-hero zigzag-bottom">
  <img src="${image}" alt="" fetchpriority="high">
  <div class="container">
    ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}
    <h1>${title}</h1>
    ${text ? `<p>${text}</p>` : ""}
  </div>
</section>`;

export const layout = ({ path, title, description = "", body, image = "/images/fotky/2017-22n.jpg", extraHead = "", extraBody = "" }) => `<!doctype html>
<html lang="cs" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${SITE.url}${path}">
<meta property="og:type" content="website">
<meta property="og:locale" content="cs_CZ">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${SITE.url}${image}">
<meta name="theme-color" content="#553407">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/style.css">
<script src="/js/main.js" defer></script>
${extraHead}
</head>
<body>
<a class="skip" href="#main">Přeskočit na obsah</a>

<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="/" aria-label="${SITE.name} – úvod"><img src="/images/logo.png" alt="Víno Zimolka" width="472" height="472"></a>
    <nav class="nav" id="nav" aria-label="Hlavní navigace">
      <ul>${nav(path)}</ul>
      <div class="nav-cta">
        <a class="btn btn--outline btn--sm" href="/katalog-vin/">${icon.bottle} Katalog vín</a>
        <a class="btn btn--sm" href="/rezervace/">${icon.calendar} Rezervace</a>
      </div>
    </nav>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav" aria-label="Otevřít menu"><span></span></button>
  </div>
</header>

<main id="main">
${body}
</main>

<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="/images/logo.png" alt="" width="472" height="472" loading="lazy">
        <p class="script">„Kdo nenávidí víno hřeší“</p>
        <h4>Kontakt</h4>
        <address class="footer-contact">
          Vlnitá 177<br>696 11 Mutěnice<br>
          <a class="big" href="${SITE.phoneHref}">${SITE.phone}</a><br>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
        </address>
        <a class="footer-social" href="${SITE.facebook}" target="_blank" rel="noopener">${icon.facebook} Vinný sklep Zimolka na Facebooku</a>
      </div>
      <div>
        <h4><a href="/fotogalerie/">Fotogalerie</a></h4>
        <div class="footer-thumbs">
          <a href="/fotogalerie/"><img src="/gallery/38.jpg" alt="Fotogalerie" loading="lazy"></a>
          <a href="/fotogalerie/"><img src="/gallery/22.jpg" alt="Fotogalerie" loading="lazy"></a>
          <a href="/fotogalerie/"><img src="/gallery/94.jpg" alt="Fotogalerie" loading="lazy"></a>
        </div>
        <p class="footer-note">Platební karty nepřijímáme.<br>Bankomat KB se nachází v obci Mutěnice.</p>
      </div>
      <div>
        <h4>Mapa</h4>
        <div class="footer-map">
          <iframe src="${SITE.map}" title="Mapa – Vinařství a vinný sklep Zimolka" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span data-year>2026</span> ${SITE.name} · Mutěnice, jižní Morava</span>
      <nav aria-label="Patička">
        <a href="/katalog-vin/">Katalog vín</a>
        <a href="/objednavka/">Objednávka vína</a>
        <a href="/rezervace/">Rezervace</a>
        <a href="/gdpr/">Ochrana osobních údajů</a>
      </nav>
    </div>
  </div>
</footer>

<div class="lightbox" hidden role="dialog" aria-modal="true" aria-label="Prohlížeč fotografií">
  <span class="lb-count"></span>
  <img alt="">
  <div class="lightbox-caption"></div>
  <button class="lb-btn lb-close" type="button" aria-label="Zavřít">${icon.close}</button>
  <button class="lb-btn lb-prev" type="button" aria-label="Předchozí">${icon.prev}</button>
  <button class="lb-btn lb-next" type="button" aria-label="Další">${icon.next}</button>
</div>
${extraBody}
</body>
</html>
`;
