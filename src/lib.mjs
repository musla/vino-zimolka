// Sdílené pomůcky pro šablony: ikony, fotomřížky, callouty…
import { existsSync } from "node:fs";

const ASSETS = new URL("../assets/", import.meta.url);

/** Náhled fotky z thumbs/ (tools/optimize-images.py), jinak původní soubor. */
export const thumb = (src) => {
  const t = src.replace(/\/([^/]+)$/, "/thumbs/$1");
  return existsSync(new URL("." + t, ASSETS)) ? t : src;
};

export const SITE = {
  name: "Vinný sklep Michal Zimolka",
  short: "Víno Zimolka",
  url: "https://www.vinozimolka.cz",
  phone: "777 736 600",
  phoneHref: "tel:+420777736600",
  phone2: "777 243 427",
  phone2Href: "tel:+420777243427",
  email: "michal.zimolka@seznam.cz",
  facebook: "https://www.facebook.com/vinozimolka/",
  youtube: "lMpz1M5LPBE",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d655.5247370585745!2d17.025991742592954!3d48.91350703073361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6fdf52db75ea11d4!2sVina%C5%99stv%C3%AD+a+vinn%C3%BD+sklep+Zimolka!5e0!3m2!1scs!2sus!4v1394608662637",
  mapLink: "https://maps.google.com/?q=Vina%C5%99stv%C3%AD+a+vinn%C3%BD+sklep+Zimolka+Mut%C4%9Bnice",
};

export const NAV = [
  { href: "/", label: "Úvod" },
  { href: "/vinarstvi/", label: "Vinařství" },
  { href: "/sklep-a-degustace/", label: "Sklep a degustace" },
  { href: "/ubytovani/", label: "Ubytování" },
  { href: "/fotogalerie/", label: "Fotogalerie" },
  { href: "/kontakt/", label: "Kontakt" },
];

const svg = (d, extra = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`;

export const icon = {
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  back: svg('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  phone: svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
  pin: svg('<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>'),
  building: svg('<path d="M4 21V5l8-3 8 3v16M9 21v-5h6v5M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01"/>'),
  id: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.6-1.5 1.7-2 3-2s2.4.5 3 2M15 10h3M15 13h3"/>'),
  info: svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
  check: svg('<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>'),
  warn: svg('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>'),
  close: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
  prev: svg('<path d="m15 18-6-6 6-6"/>'),
  next: svg('<path d="m9 18 6-6-6-6"/>'),
  bottle: svg('<path d="M10 2h4M10.5 2v5.2c0 .5-.2 1-.6 1.4A5 5 0 0 0 8 12.5V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7.5a5 5 0 0 0-1.9-3.9c-.4-.4-.6-.9-.6-1.4V2"/><path d="M8 14h8"/>'),
  calendar: svg('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5H16.6V4.4a20 20 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z"/></svg>',
};

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Mřížka fotek s lightboxem. items: [[src, popisek], …] */
export const photos = (group, items, cls = "") => `
<div class="photos reveal ${cls}">
  ${items
    .map(
      ([src, cap = ""]) => `<a href="${src}" data-lightbox="${group}" data-caption="${esc(cap)}">
    <img src="${thumb(src)}" alt="${esc(cap)}" loading="lazy" width="480" height="320">
    ${cap ? `<figcaption>${esc(cap)}</figcaption>` : ""}
  </a>`
    )
    .join("\n  ")}
</div>`;

export const callout = (kind, html) => {
  const map = { info: ["", icon.info], ok: ["callout--ok", icon.check], warn: ["callout--warn", icon.warn] };
  const [cls, ic] = map[kind];
  return `<div class="callout ${cls} reveal">${ic}<p>${html}</p></div>`;
};

export const video = (title = "Vinný sklep Zimolka – video") => `
<div class="video reveal" data-yt="${SITE.youtube}" data-title="${esc(title)}">
  <button type="button" aria-label="Přehrát video: ${esc(title)}">
    <img src="https://i.ytimg.com/vi/${SITE.youtube}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360">
    <span class="play">${icon.play}</span>
  </button>
</div>`;

export const visitCta = (img = "/images/fotky/2017-22n.jpg") => `
<section class="section section--tight">
  <div class="container">
    <div class="cta reveal">
      <img src="${img}" alt="" loading="lazy">
      <div>
        <span class="eyebrow">Přijeďte k nám</span>
        <h2>Pro návštěvu našeho sklepa volejte</h2>
        <a class="cta-phone" href="${SITE.phoneHref}">${SITE.phone}</a>
        <p>nebo pište na <a href="mailto:${SITE.email}">${SITE.email}</a></p>
      </div>
      <div class="btn-row">
        <a class="btn" href="/rezervace/">${icon.calendar} Rezervace</a>
        <a class="btn btn--ghost" href="${SITE.phoneHref}">${icon.phone} Zavolat</a>
      </div>
    </div>
  </div>
</section>`;

export const slugify = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
