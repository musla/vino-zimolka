# Vinný sklep Michal Zimolka — nový web

Statický web bez frameworku. Stránky se generují malým Node skriptem do složky `dist/`.

```bash
npm run build   # vygeneruje dist/
npm run dev     # build + lokální server na http://localhost:4321
```

## Struktura

- `src/pages.mjs` – obsah hlavních stránek (Úvod, Vinařství, Sklep a degustace, Ubytování, Kontakt, Rezervace, Objednávka)
- `build.mjs` – generuje navíc katalog vín, detail každého vína, fotogalerii, GDPR, 404 a sitemap
- `src/data/wines.json` – vína (název, cena, typ, popis, parametry); úpravou se změní katalog
- `src/data/gallery.json` – pořadí fotek ve fotogalerii (`assets/gallery/<číslo>.jpg`)
- `src/css/style.css`, `src/js/main.js` – vzhled a interakce
- `assets/` – obrázky převzaté z původního webu (cesty zůstávají stejné jako na vinozimolka.cz)

URL adresy stránek odpovídají původnímu webu (`/vinarstvi/`, `/katalog-vin/`, `/rezervace/` …).

## Formuláře

Rezervace a objednávka nemají serverovou část — po odeslání otevřou e-mailového klienta
s předvyplněnou zprávou na michal.zimolka@seznam.cz. Pro odesílání přímo z webu stačí
formulář napojit na libovolnou službu pro formuláře (např. Formspree) nebo vlastní endpoint.
