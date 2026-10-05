# Pravidla pro úpravy webu vinozimolka.cz

Web Vinného sklepa Michal Zimolka (Mutěnice). Statický web bez frameworku, generovaný
Node skriptem bez závislostí. Komunikace s majitelem i texty webu jsou česky.

## ⚠️ Push na `main` = okamžité nasazení na produkci

GitHub Actions (`.github/workflows/deploy-ftp.yml`) po každém pushi na `main` sestaví web
a nahraje `dist/` přes FTP do složky `vinozimolka.cz/` na ostrý web https://www.vinozimolka.cz.

- Necommituj ani nepushuj bez výslovného pokynu uživatele.
- Před pushem vždy spusť `npm run build` a zkontroluj web lokálně.
- Po pushi ověř běh (`gh run list --limit 1`, při chybě `gh run view <id> --log-failed`)
  a výsledek na ostrém webu (např. `curl -sI https://www.vinozimolka.cz/`).
- FTP údaje jsou jen v GitHub Secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`),
  cílová složka ve proměnné `FTP_SERVER_DIR`. Nikdy je nezapisuj do repozitáře ani o ně nežádej v chatu.
- Nasazení na serveru nic nemaže, jen nahrává nové a změněné soubory.

## Příkazy

```bash
npm run build                     # vygeneruje dist/
npm run dev                       # build + náhled na http://localhost:4321
python3 tools/optimize-images.py  # optimalizace nových obrázků + náhledy (vyžaduje Pillow)
```

## Struktura

| Kde | Co |
| --- | --- |
| `src/pages.mjs` | obsah hlavních stránek (Úvod, Vinařství, Sklep a degustace, Ubytování, Kontakt, Rezervace, Objednávka) |
| `src/layout.mjs` | hlavička, navigace, patička, `<head>` |
| `src/lib.mjs` | `SITE` (kontakty, telefon, e-mail, mapa), `NAV`, ikony, pomocné šablony (`photos`, `callout`, `visitCta`…) |
| `build.mjs` | generuje katalog vín, detaily vín, fotogalerii, GDPR, 404, sitemap a **`.htaccess`** |
| `src/data/wines.json` | vína: název, cena, typ, popis, parametry, obrázky |
| `src/data/gallery.json` | pořadí fotek ve fotogalerii (`assets/gallery/<číslo>.jpg`) |
| `src/css/style.css` | veškeré styly; barvy a písma jako proměnné v `:root` |
| `src/js/main.js` | menu, slideshow, lightbox, filtr vín, ověření věku, formuláře |
| `assets/` | obrázky a favikony; kopírují se do kořene webu se stejnými cestami |
| `src/brand/` | zdroje loga (originál, vyříznutá značka); na web se nenahrávají |

`dist/` je generovaný výstup — nikdy ho needituj ručně a necommituj (je v `.gitignore`).

## Pravidla obsahu

- Texty jsou převzaté z původního webu včetně nářečí („Tož nešpekulujte…“, „človíčků“). Nepřepisuj,
  nezkracuj ani „nevylepšuj“ je bez pokynu; opravuj jen zjevné překlepy a řekni o tom.
- Ceny, kapacity, kontakty a podmínky (záloha, storno, max. doba ve sklepě) měň jen na výslovný pokyn.
- Kontaktní údaje jsou na jednom místě v `SITE` (`src/lib.mjs`) — nepiš je natvrdo do stránek.
- Nové víno = záznam ve `src/data/wines.json` (+ obrázky do `assets/files/…`); barvu
  (bílé/červené/specialita) určují množiny `RED` a `SPECIAL` v `build.mjs`.
- Katalog vín je chráněný ověřením věku 18+ — zachovej ho.

## Pravidla vzhledu a kódu

- Žádné frameworky, npm závislosti ani build nástroje navíc. Čisté HTML/CSS/JS, Node jen pro build.
- Barvy: hnědá `--brown #553407`, zlatá `--gold #d7a122`, krémová `--cream`; používej proměnné z `:root`,
  ne nové natvrdo zapsané barvy. Nadpisy Cormorant Garamond, text Manrope.
- Logo (`assets/images/logo.png`) je v původních barvách majitele (modrá/šedá na bílé stužce) — neměň ho.
- Web musí fungovat od 375 px šířky. Po každé změně vzhledu zkontroluj mobil (375 px) i desktop
  a že stránka nepřetéká do šířky (`document.documentElement.scrollWidth` = šířka okna).
  Dlouhé texty v tlačítkách se na mobilu musí zalomit.
- Zachovej přístupnost: `alt` u obrázků, `aria-*` u ovládacích prvků, fungování z klávesnice,
  `prefers-reduced-motion`.
- URL adresy stránek odpovídají původnímu webu (`/vinarstvi/`, `/katalog-vin/` …). Neměň je; když musíš,
  přidej 301 přesměrování do generátoru `.htaccess` v `build.mjs`.
- `.htaccess` se generuje v `build.mjs` (HTTPS + www přesměrování, staré odkazy `?id=`, komprese, cache).
  Neukládej ho do `assets/`. CSS/JS mají roční cache a verzi `?v=<hash>` doplňovanou buildem — odkazuj na ně
  vždy přes layout, ne ručně.

## Obrázky

- Nové fotky dej do `assets/…` a spusť `python3 tools/optimize-images.py` — zmenší je (max 1200 px),
  překomprimuje a pro `assets/gallery` a `assets/images/fotky` vytvoří náhledy `thumbs/`.
  Skript je bezpečné spouštět opakovaně. Výsledné soubory (včetně `thumbs/`) commituj.
- Fotky v mřížkách se vkládají přes `photos()` / galerii v `build.mjs`, které samy použijí náhled.
- Hlídej obsah fotek, ne jen velikost: lidé na fotkách nesmí být ořezáni (u fotky „Otec & syn“
  se to už jednou stalo — fotky na šířku nedávej do výřezu na výšku).

## Formuláře

Rezervace a objednávka nemají serverovou část: po odeslání otevřou e-mailového klienta s předvyplněnou
zprávou na `SITE.email`. Majitel to tak chce — neměň to na serverové odesílání bez pokynu.
Na serveru neběží PHP z původního webu.

## Commity

Zprávy commitů česky, první řádek stručně co se změnilo, v těle proč.
