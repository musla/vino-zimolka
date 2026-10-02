import { SITE, icon, photos, callout, video, visitCta } from "./lib.mjs";
import { pageHero } from "./layout.mjs";

const F = "/images/fotky/";

/* ==========================================================================
   Úvod
   ========================================================================== */
const home = {
  path: "/",
  title: "Výborné víno ze srdce jižní Moravy | Vinný sklep Michal Zimolka",
  description:
    "Malé rodinné vinařství Michala a Standy Zimolkových z Mutěnic. Degustace ve vinném sklepě v Búdách, pohoštění a ubytování přímo nad sklepy.",
  body: `
<section class="hero">
  <div class="hero-slides" aria-hidden="true">
    <img class="is-active" src="${F}2017-22n.jpg" alt="" fetchpriority="high">
    <img data-src="${F}25.jpg" alt="">
    <img data-src="${F}01n.jpg" alt="">
    <img data-src="${F}26.jpg" alt="">
  </div>
  <div class="container hero-content">
    <span class="eyebrow">Mutěnice · Búdy · jižní Morava</span>
    <h1>Výborné víno ze srdce jižní Moravy</h1>
    <p class="hero-motto script">„Kdo nenávidí víno hřeší“</p>
    <div class="btn-row">
      <a class="btn" href="/rezervace/">${icon.calendar} Rezervace sklepa</a>
      <a class="btn btn--ghost" href="/katalog-vin/">${icon.bottle} Katalog vín</a>
    </div>
    <div class="hero-dots" role="group" aria-label="Fotografie">
      <button type="button" aria-label="Fotografie 1" aria-current="true"></button>
      <button type="button" aria-label="Fotografie 2" aria-current="false"></button>
      <button type="button" aria-label="Fotografie 3" aria-current="false"></button>
      <button type="button" aria-label="Fotografie 4" aria-current="false"></button>
    </div>
  </div>
  <span class="scroll-hint" aria-hidden="true"></span>
</section>

<section class="section">
  <div class="container split">
    <div class="reveal">
      <span class="eyebrow">Rodinné vinařství</span>
      <h2>Výborné víno ze srdce jižní Moravy z Mutěnic</h2>
      <p class="lead">Jsme malé rodinné vinařství, které je hlavní vášní Michala a Standy Zimolkových z Mutěnic, kteří už dlouho působí profesně ve vinařském, vinohradnickém oboru a výrobě vína spojenou též s ubytováním pro naše hosty.</p>
      <p>Společně s nejbližší rodinou hospodaří na cca 2,5 ha vinic rozloženou ve třech mutěnských tratích, kde je jejich snahou vyprodukovat vína v té nejvyšší možné kvalitě. K vinohradu a vínu přistupujeme s tou nejvyšší možnou péčí a láskou už od ranných počátků výsadby vinic.</p>
      <a class="btn btn--dark" href="/vinarstvi/">Více o vinařství ${icon.arrow}</a>
    </div>
    <figure class="figure figure--wide reveal reveal-delay-2">
      <img src="${F}22n.jpg" alt="Michal a Standa Zimolkovi ve sklepě" loading="lazy">
      <figcaption class="figure-badge"><strong>Otec &amp; syn</strong>dva vinaři, jeden sklep</figcaption>
    </figure>
  </div>
</section>

<section class="section--tight" style="padding-top:0">
  <div class="container">
    <div class="stats reveal">
      <div class="stat"><div class="stat-num"><span data-count="2.5">2,5</span><small>ha</small></div><div class="stat-label">vinic ve třech mutěnských tratích</div></div>
      <div class="stat"><div class="stat-num"><span data-count="500">500</span>+</div><div class="stat-label">vinných sklípků v lokalitě Búdy</div></div>
      <div class="stat"><div class="stat-num"><span data-count="42">42</span></div><div class="stat-label">osob pojme náš nový sklep z roku 2016</div></div>
      <div class="stat"><div class="stat-num"><span data-count="24">24</span></div><div class="stat-label">lůžek přímo nad vinnými sklepy</div></div>
    </div>
  </div>
</section>

<section class="section section--sand">
  <div class="container">
    <div class="section-head center reveal">
      <span class="eyebrow">Co u nás najdete</span>
      <h2>Víno, sklep a postel o pár schodů výš</h2>
    </div>
    <div class="cards">
      <a class="card-link reveal" href="/vinarstvi/">
        <img src="${F}25.jpg" alt="" loading="lazy">
        <span class="num">01</span>
        <h3>Vinařství</h3>
        <p>Vlastní vinice, vlastní víno — zhruba 13 000 lahví ročně z rodinných vinic.</p>
        <span class="more">Prohlédnout ${icon.arrow}</span>
      </a>
      <a class="card-link reveal reveal-delay-1" href="/sklep-a-degustace/">
        <img src="${F}17.jpg" alt="" loading="lazy">
        <span class="num">02</span>
        <h3>Sklep a degustace</h3>
        <p>Řízená degustace až dvaceti vzorků přímo od majitele a sklepmistra.</p>
        <span class="more">Prohlédnout ${icon.arrow}</span>
      </a>
      <a class="card-link reveal reveal-delay-2" href="/ubytovani/">
        <img src="${F}50n.jpg" alt="" loading="lazy">
        <span class="num">03</span>
        <h3>Ubytování</h3>
        <p>Pokoje přímo nad vinnými sklepy — stačí projít uličkou vedle bůdy.</p>
        <span class="more">Prohlédnout ${icon.arrow}</span>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container split split--reverse">
    <div class="reveal">
      <span class="eyebrow">Naše sklepy</span>
      <h2>Tři sklepy v mutěnských Búdách</h2>
      <p>Naše 3 vinné sklepy se nachází v Mutěnicích v lokalitě zvané Búdy s počtem <strong>přes 500 vinných sklípků</strong>. Řadíme se mezi největší vinařské oblasti jižní Moravy.</p>
      <p>V našem vinařství můžete navštívit 2 slovácké rodinné vinné sklepy. První menší s předlisovnou byl stavěn v sedmdesátých letech, který je po částečné rekonstrukci a vejde se tam až <strong>16 osob</strong>. Větší nebo-li druhý nejvíce navštěvovaný je od základu <strong>nový postavený teprve v roku 2016</strong> od počátku kvelbu i s předlisovnou, která slouží k přátelskému posezení přímo pro naše hosty s celkovou kapacitou až <strong>42 osob</strong>.</p>
      <a class="btn btn--dark" href="/sklep-a-degustace/">Sklep a degustace ${icon.arrow}</a>
    </div>
    ${video()}
  </div>
</section>

<section class="section section--dark">
  <p class="motto reveal">Co sa týče ubytování, tak to máme také k dispozici přímo nad vinnýma sklepama až pro 24 človíčků enom projdete vedle bůdy uličků a ste na hoře.</p>
  <div class="center reveal"><a class="btn" href="/ubytovani/">Ubytování ${icon.arrow}</a></div>
</section>

${visitCta(F + "01n.jpg")}
`,
};

/* ==========================================================================
   Vinařství
   ========================================================================== */
const vinarstvi = {
  path: "/vinarstvi/",
  title: "Vinařství | Vinný sklep Michal Zimolka",
  description: "Široké spektrum odrůd v menších šaržích, přívlastková vína i zrání v dubových sudech. Roční produkce kolem 13 000 lahví z vlastních vinic.",
  image: F + "26.jpg",
  body: `
${pageHero({ image: F + "26.jpg", eyebrow: "Z vlastních vinic", title: "Vinařství", text: "Výroba a zpracování se u nás dědí z otce na syna." })}

<section class="section">
  <div class="container split">
    <div class="reveal">
      <span class="eyebrow">Kvalita na prvním místě</span>
      <h2>Menší šarže, velká péče</h2>
      <p>Naše vinařství má velmi široké spektrum odrůd ponechané v menších šaržích z kterých vyrábíme vína lahvová přívlastková, tak i nějaká část produkce nám zraje v dubových sudech, a proto si své vinice obhospodařujeme sami v domácím rodinném kruhu a kvalita vína je na prvním místě. <strong>Naše roční produkce je kolem 13000 lahví vlastního vína z vlastních vinic</strong>.</p>
      <p>Výroba a zpracování se dědí z otce na syna. Bílé a růžové vína vyrábíme modernější technologií řízeného kvašení a odbourání kyselin. Červená vína vznikají klasickou cestou kvašení rmutu v kádi a dále pak zrání v dubových a barikových sudech. Vinice máme v různých lokalitách jako jsou Zadní hora, Přední hora, Okrouhlické atd.</p>
    </div>
    <figure class="figure reveal reveal-delay-2">
      <img src="${F}25.jpg" alt="Vinohrad" loading="lazy">
      <figcaption class="figure-badge"><strong><span data-count="13000">13 000</span></strong>lahví vlastního vína ročně</figcaption>
    </figure>
  </div>
</section>

<section class="section section--sand">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Tratě</span>
      <h2>Zadní hora, Přední hora, Okrouhlické…</h2>
    </div>
    ${photos("vinarstvi", [
      [F + "25.jpg", "Vinohrad"],
      [F + "26.jpg", "Červené víno"],
      [F + "27.jpg", "Bílé víno"],
      [F + "28.jpg", "Letecký pohled na mutěnické Búdy"],
      [F + "22n.jpg", "Degustační sklípek"],
      [F + "23n.jpg", "Sudy na víno"],
      [F + "03n.jpg", "Archivní sklep"],
      [F + "04n.jpg", "Archivní sklep"],
    ])}
    <div class="btn-row reveal"><a class="btn btn--dark" href="/katalog-vin/">${icon.bottle} Katalog našich vín</a></div>
  </div>
</section>

${visitCta()}
`,
};

/* ==========================================================================
   Sklep a degustace
   ========================================================================== */
const odrudy = [
  "Rulandské bílé", "Rulandské šedé", "Aurelius", "Ryzlink vlašský", "Tramín červený", "Pálava", "Hibernal",
  "Sauvignon-blanc", "Ryzlink rýnský", "Muškát moravský", "Sylvanské zelené", "Rosé Andrejka", "Chardonnay",
  "Cabernet moravia", "Modrý portugal", "Dornfelder BIO", "Cabernet Sauvignon", "Alibernet BIO",
];
const top = ["Hibernal", "Pálava", "Tramín červený"];

const sklep = {
  path: "/sklep-a-degustace/",
  title: "Sklep a degustace | Vinný sklep Michal Zimolka",
  description: "Rodinné vinné sklepy v Mutěnicích pro 16 a 42 osob. Řízené degustace až dvaceti vzorků vín, moravské pohoštění, harmonikář či cimbálová muzika.",
  image: F + "21.jpg",
  body: `
${pageHero({ image: F + "21.jpg", eyebrow: "Mutěnice · Búdy", title: "Sklep a degustace", text: "Posezení s přáteli u kvalitního vína, tak jak to na Moravě dříve chodilo." })}

<section class="section" id="sklep">
  <div class="container split">
    <div class="reveal">
      <span class="eyebrow">Sklep</span>
      <h2>Slovácké kouzlo pro 16 i 42 hostů</h2>
      <p><strong>Naše domácí vinné sklepy můžete najít v srdci jižní Moravy a to v Mutěnicích</strong>, které se řadí mezi největší vinařské oblasti, <strong>v lokalitě zvané Búdy</strong>, kde můžete najít <strong>přes 500 vinných moravských sklípků</strong>. Oba sklepy, které vlastníme nám slouží pro návštěvy hostů, kteří si rádi posedí a pobaví se s přáteli u kvalitního vína.</p>
      <p>Pro menší skupinky lidí máme sklípek s kapacitou 16 osob, který byl s lisovnou postaven v 70. letech a je po částečné rekonstrukci. Budete-li si chtít třeba udělat rodinou oslavu narozenin, případně firemní večírek či školení nebo jen tak si přijet a odpočinut posedět s kamarády a je vás víc, tak náš druhý větší <strong>sklípek</strong> je ten pravý co hledáte. Je vybudován teprve krátce a to v roce 2016, ale zaujme vás pravým slováckým kouzlem s kapacitou až 42 osob.</p>
      <p>Sklípek a lisovnu s posezením jsme vybudovali od základu kvelbu přes lisovnu až po střechu vlastními rodinnými silami. Prostory pro posezení a občerstvení jsou přes zimu vytápěny.</p>
    </div>
    <div class="reveal reveal-delay-2">
      ${video()}
      ${callout("ok", "<strong>Můžeme vám taky zařídit harmonikáře nebo cimbálovou muziku.</strong>")}
      ${callout("info", "<strong>Pokud v některých měsících neobsadíte kapacitu sklepa, tak se může stát že naše hosty sloučíme dohromady, ale vždy při předchozí dohodě s hosty.</strong>")}
    </div>
  </div>
  <div class="container">
    ${photos("sklep", [
      [F + "01n.jpg", "Nový sklep"],
      [F + "2017-22n.jpg", "Nový sklep"],
      [F + "02.jpg", "Náš sklep"],
      [F + "21.jpg", "Pohled do degustačního sklepa"],
    ])}
  </div>
</section>

<section class="section section--sand" id="degustace">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">Degustace</span>
        <h2>Ochutnávka přímo u sudů</h2>
        <p>Ve sklepách provádíme řízené odborné degustace přímo od majitele a sklepmistra s ochutnávkou vín přímo u sudů tak jak to na Moravě dříve chodilo produkce šarží je prezentována z lahví. <strong>V nabídce máme až dvacet vzorků vín suchých, polosuchých, polosladkých a i ti co milují sladká tak je taky rádi potěšíme</strong>.</p>
        ${callout("info", "Zajímavostí a výjimečností v našem vinařství je, že ochutnáváte vína s vlastních vinic od dvou vinařů, od otce a syna, kteří vyrábí rozdílné odrůdy vína.")}
      </div>
      <div class="reveal reveal-delay-2">
        <p>Jsou to například odrůdy:</p>
        <ul class="chips" aria-label="Odrůdy">
          ${odrudy.map((o) => `<li${top.includes(o) ? ' class="is-top"' : ""}>${o}</li>`).join("")}
          <li>atd.</li>
        </ul>
        <p>Mezi naše <strong>exkluzivní top vína</strong> patří <strong>Hibernal, Pálava, Tramín červený, Solaris, a nebo jedinečnou speciální edicí je růžové jahodové víno </strong>s kterými se můžeme pochlubit <strong>zlatými medailemi a diplomy</strong> z místních a oblastních soutěží a výstav. Specialitou je také víno <strong>Portské, autentický Alibernet nebo jemně perlivé víno Frizzante a domácí sekt</strong>. Vína jsou převážně přívlastkových kvalit. Také můžete u nás ochutnat vína archivní a barriquové z předchozích výjimečných let. V září a říjnu vám dáme ochutnat také burčák.</p>
      </div>
    </div>
    ${photos("degustace", [
      [F + "17.jpg", "Degustace"],
      [F + "18.jpg", "První cinknutí při degustaci"],
      [F + "19.jpg", "Výklad sklepmistra"],
      [F + "20.jpg", "Víno přímo z koštéřa"],
    ])}
  </div>
</section>

<section class="section" id="pohosteni">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Pohoštění</span>
      <h2>Moravské podnosy plné dobrot</h2>
      <p>K pohoštění Vám můžeme připravit naše moravské velké stylové podnosy na kterých jsou připraveny šunky, tlačenky, moravské uzené, klobásy, slaniny, sýry, tlačenka, domácí škvarkové pomazánky, kuřecí stehýnka, vepřové a kuřecí řízky, kuřecí rolka, okurky, zelenina, pečivo atd. Předem se s Vámi můžeme dohodnout za příplatek i na teplé večeři nebo na grilované vepřové kýtě, selátku, klobásách, tatarském bifteku, svatebních koláčcích či zabijačkových hodech atd.</p>
    </div>
    ${photos("pohosteni", [
      [F + "06n.jpg", "Svatý Urban - patron vinařů"],
      [F + "07n.jpg", "Diplomy za našu prácu"],
      [F + "05.jpg", "Výzdoba u posezení"],
      [F + "08.jpg", "Až do smrti nebudu jíst hrozny, aby bylo víc vína!"],
      [F + "40n.jpg", ""],
      [F + "41n.jpg", ""],
      [F + "42n.jpg", ""],
      [F + "43n.jpg", ""],
    ])}

    <div class="price-tag reveal">
      <p>Pohoštění a degustace ve vinném sklípku s neomezeným množstvím konzumace 3 odrůd vín stojí</p>
      <div class="amount">950 Kč<small>/ 1 osoba</small></div>
    </div>

    ${photos("pohosteni-2", [
      [F + "09.jpg", "Pohoštění"],
      [F + "10.jpg", "Pohoštění"],
      [F + "11.jpg", "Pohoštění - řízky"],
      [F + "12.jpg", "Pohoštění - obložený talíř"],
    ])}

    ${callout("warn", "<strong>Maximální doba pobytu ve vinném sklípku je však 5 až max 6 hodin. Po předchozí dohodě s vinařem se může doba protáhnout za předem dohodnutých podmínek.</strong>")}
  </div>
</section>

<section class="section section--dark">
  <p class="motto reveal">Tož nešpekulujte a dojeďte se za nama podívat do Mutěnic a okoštovat naše smetany.</p>
  <div class="center reveal"><a class="btn" href="/rezervace/">${icon.calendar} Domluvit návštěvu našeho sklepa s degustací</a></div>
</section>
`,
};

/* ==========================================================================
   Ubytování
   ========================================================================== */
const ubytovani = {
  path: "/ubytovani/",
  title: "Ubytování | Vinný sklep Michal Zimolka",
  description: "Ubytování přímo nad vinnými sklepy v Mutěnicích – 7 pokojů pro 24 hostů. 650 Kč a 750 Kč za osobu a noc, děti do 3 let zdarma.",
  image: F + "50n.jpg",
  body: `
${pageHero({ image: F + "50n.jpg", eyebrow: "Přímo nad vinnými sklepy", title: "Ubytování", text: "K oběma sklípkům vám můžeme nabídnout své vlastní ubytování — stačí projít uličkou vedle sklepu." })}

<section class="section">
  <div class="container">
    <div class="stay">
      <article class="stay-card reveal">
        <img src="${F}30.jpg" alt="Pokoj s 3 lůžky" loading="lazy">
        <div class="stay-body">
          <span class="eyebrow">První sklep</span>
          <h2 style="font-size:clamp(1.8rem,3vw,2.4rem)">Ubytování na prvním sklepě</h2>
          <ul class="facts"><li>9 lůžek</li><li>3 pokoje (2, 3 a 4 lůžka)</li><li>kuchyňka</li><li>terasa</li></ul>
          <p>K oběma sklípkům vám můžeme nabídnout své vlastní ubytování, které máme přímo <strong>nad vinnýma sklepama</strong>, stačí projít uličkou vedle sklepu. Na prvním sklípku vhodném pro menší skupinky blízké přátelé nebo rodiny s dětmi jsou pro vás připraveny <strong>lůžka pro 9 osob</strong>. Postele jsou rozmístěny do 3 pokojů po 2, 3 a 4 lůžkách. Všem pokojům je k dispozici <strong>společná sprcha, 2 x WC, kuchyňka pro přípravu menších jídel a taky venkovní terasa</strong>. Ve 2 pokojích jsou televize. V kuchyňce si můžete ráno uvařit kávu nebo čaj, je zde malá lednice pro uskladnění potravin mikrovlnná trouba ale nenachází se tu vařič takže se zde nevaří. (kousek od sklepa se můžete dosyta najíst na blízkých restauracích.)</p>
          <div class="stay-price">
            <div class="amount">650 Kč <span>/ osoba / noc</span></div>
            <span class="note">Děti do 3 let zdarma.</span>
          </div>
        </div>
      </article>
      <article class="stay-card reveal reveal-delay-2">
        <img src="${F}51n.jpg" alt="Pokoj na druhém sklepě" loading="lazy">
        <div class="stay-body">
          <span class="eyebrow">Druhý sklep · penzion</span>
          <h2 style="font-size:clamp(1.8rem,3vw,2.4rem)">Ubytování na druhém sklepě</h2>
          <ul class="facts"><li>15 lůžek</li><li>4 pokoje</li><li>vlastní koupelna</li><li>Wi-Fi zdarma</li><li>parkování pro 3 vozy</li></ul>
          <p>Druhý nový komfortnější penzion, který máme hned naproti toho prvního sklepa má možnost ubytovat dalších 15 osob. Pokoje jsou rozděleny do 4 pokojů, které jsou 2x třílůžkový, 1x čtyřlůžkový a 1x pětilůžkový. Všechny mají své <strong>vlastní sociální zařízení na pokoji</strong>. Pokud je ale dvoulůžkový pokoj obsazen pouze dvěmi osobami za pokoj se účtuje 1900 kč noc. Všechny 4 pokoje mají možnost využívat venkovní terasu až pro 20 osob za penzionem, k dispozici je menší lednice pro uskladnění potravin či nápojů kde si můžete také zaparkovat 3 osobní vozy. Na penzionu je k dispozici zdarma WIFI internet a na každém pokoji je televize.</p>
          <div class="stay-price">
            <div class="amount">750 Kč <span>/ osoba / noc</span></div>
            <span class="note">Děti do 3 let zdarma.</span>
          </div>
        </div>
      </article>
    </div>

    <h3 class="reveal" style="margin-top:clamp(48px,7vw,80px)">První sklep</h3>
    ${photos("ubytovani-1", [
      [F + "29.jpg", "Kuchyňka s posezením"],
      [F + "30.jpg", "Pokoj s 3 lůžky"],
      [F + "31.jpg", "Pokoj s 2 lůžky"],
      [F + "32.jpg", "Pokoj s 4 lůžky"],
    ])}
    <h3 class="reveal">Druhý sklep</h3>
    ${photos("ubytovani-2", [
      [F + "2017-16.jpg", "Chodba"],
      [F + "51n.jpg", "Pokoj s 4 lůžky"],
      [F + "50n.jpg", "Pokoj s 3 lůžky"],
      [F + "2017-10.jpg", "WC a sprcha"],
    ])}
  </div>
</section>

<section class="section section--sand">
  <div class="container narrow">
    <span class="eyebrow reveal">Dobré vědět</span>
    <h2 class="reveal">Snídaně a podmínky pobytu</h2>
    <p class="reveal">Po dohodě s Vámi vám rádi připravíme snídani, podávanou dole ve vinném sklepě dle možností naše nabídky, kterou si můžete domluvit až přímo ve sklepě. Snídaně se vydávají do 9.30 h., pokoje prosím opustit do 10.00 h děkujeme.</p>
    ${callout("info", "Na spaní si k nám nemusíte nic brát, vše máte přichystáno na všech 7 pokojích (ručníky, přikrývky, atd.) V případě, že vás bude ještě víc, jsme schopni vám zajistit ubytování v blízkosti naších sklepů.")}
    ${callout("warn", "Při rezervaci a následné zaplacení zálohy pro 1 osobu na ubytování nebo degustaci ve vinném sklepě se záloha vrací v případě nahlášení menšího příjezdu osob a to 1 měsíc před příjezdem. Pokud je to ale míň jak 1 měsíc před příjezdem hradí se 100% ze sklepa a 100% z ubytování s původně objednaných osob.")}
  </div>
</section>

<section class="section section--dark">
  <p class="motto reveal">Tož dojeďte si odpočinůt k nám do Vinného sklepu Zimolka, posedět, podegustovat a načerpat nové sily v naších krásách vinného prostředí Jižní Moravy.</p>
  <div class="center reveal"><a class="btn" href="/rezervace/">${icon.calendar} Rezervovat pobyt</a></div>
</section>
`,
};

/* ==========================================================================
   Kontakt
   ========================================================================== */
const kontakt = {
  path: "/kontakt/",
  title: "Kontakt | Vinný sklep Michal Zimolka",
  description: "Vinný sklep Michal Zimolka, Vlnitá 177, 696 11 Mutěnice. Tel. 777 736 600, michal.zimolka@seznam.cz.",
  image: F + "01n.jpg",
  body: `
${pageHero({ image: F + "01n.jpg", eyebrow: "Mutěnice", title: "Kontakt", text: "Zavolejte, napište, nebo rovnou přijeďte do Búd." })}

<section class="section">
  <div class="container contact-grid">
    <div class="contact-card reveal">
      <h2 style="font-size:2.2rem">Michal Zimolka</h2>
      <ul class="contact-list">
        <li>${icon.pin}<div><span class="label">Provozovna</span>Vlnitá 177<br>696 11 Mutěnice<br><a href="${SITE.mapLink}" target="_blank" rel="noopener">Otevřít v mapách</a></div></li>
        <li>${icon.building}<div><span class="label">Sídlo</span>Dubňanská 1267<br>696 11 Mutěnice</div></li>
        <li>${icon.phone}<div><span class="label">Telefon</span><a href="${SITE.phoneHref}">${SITE.phone}</a><br><a href="${SITE.phone2Href}">${SITE.phone2}</a></div></li>
        <li>${icon.mail}<div><span class="label">E-mail</span><a href="mailto:${SITE.email}">${SITE.email}</a></div></li>
        <li>${icon.id}<div><span class="label">Údaje</span>IČ: 87144859<br>IČP: 1012017567<br>Registrován živnostenským uřadem v Hodoníně</div></li>
      </ul>
    </div>
    <div class="map reveal reveal-delay-2">
      <iframe src="${SITE.map}" title="Mapa – Vinařství a vinný sklep Zimolka" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</section>

<section class="section section--sand">
  <div class="container">
    <div class="info-cards">
      <a class="info-card reveal" href="/images/mapa.jpg" data-lightbox="kontakt" data-caption="Jak se k nám dostanete">
        <img src="/images/mapa.jpg" alt="Mapa příjezdu" loading="lazy"><h3>Jak se k nám dostanete</h3>
      </a>
      <a class="info-card reveal reveal-delay-1" href="/images/sklepy.jpg" data-lightbox="kontakt" data-caption="Naše sklepy">
        <img src="/images/sklepy.jpg" alt="Umístění sklepů" loading="lazy"><h3>Naše sklepy</h3>
      </a>
      <a class="info-card reveal reveal-delay-2" href="/images/parkovani.jpg" data-lightbox="kontakt" data-caption="Parkování za 2. sklepem">
        <img src="/images/parkovani.jpg" alt="Parkování" loading="lazy"><h3>Parkování za 2. sklepem</h3>
      </a>
    </div>
    ${callout("info", "Platební karty nepřijímáme. Bankomat KB se nachází v obci Mutěnice.")}
  </div>
</section>
`,
};

/* ==========================================================================
   Formuláře
   ========================================================================== */
const field = (name, label, { type = "text", required = true, full = false, attrs = "" } = {}) => `
<div class="field${full ? " full" : ""}">
  <label for="f-${name}">${label}${required ? ' <span class="req">*</span>' : ""}</label>
  ${
    type === "textarea"
      ? `<textarea id="f-${name}" name="${name}" data-label="${label}"${required ? " required" : ""} ${attrs}></textarea>`
      : `<input id="f-${name}" type="${type}" name="${name}" data-label="${label}"${required ? " required" : ""} ${attrs}>`
  }
</div>`;

const formFooter = (submit) => `
<div class="full">
  <label class="check"><input type="checkbox" name="gdpr" required> <span>* Potvrzuji, že jsem si přečetl <a href="/gdpr/" target="_blank">informace o zpracování osobních údajů</a>.</span></label>
</div>
<div class="full form-actions">
  <p class="form-note">Povinné položky jsou označeny hvězdičkou (*).</p>
  <button class="btn btn--dark" type="submit">${submit} ${icon.arrow}</button>
</div>
<div class="full callout callout--ok form-status" role="status">${icon.check}<p>Otevřeli jsme váš e-mailový program s připravenou zprávou — stačí ji odeslat. Pokud se nic neotevřelo, napište nám prosím přímo na <a href="mailto:${SITE.email}">${SITE.email}</a> nebo volejte <a href="${SITE.phoneHref}">${SITE.phone}</a>.</p></div>`;

const rezervace = {
  path: "/rezervace/",
  title: "Rezervace sklepa | Vinný sklep Michal Zimolka",
  description: "Rezervujte si degustaci, posezení ve vinném sklepě nebo ubytování v Mutěnicích.",
  image: F + "17.jpg",
  body: `
${pageHero({ image: F + "17.jpg", eyebrow: "Degustace · posezení · ubytování", title: "Rezervace sklepa" })}

<section class="section">
  <div class="container form-wrap">
    <form class="form reveal" data-mailto="${SITE.email}" data-subject="Rezervace sklepa" novalidate>
      <div class="form-grid">
        ${field("jmeno", "Vaše jméno", { attrs: 'autocomplete="name"' })}
        ${field("telefon", "Váš telefon", { type: "tel", attrs: 'autocomplete="tel"' })}
        ${field("email", "Váš e-mail", { type: "email", attrs: 'autocomplete="email"' })}
        ${field("termin", "Termín", { type: "date" })}
        ${field("pocet_osob", "Počet osob", { type: "number", attrs: 'min="1" max="60" inputmode="numeric"' })}
        ${field("text", "Dotaz či poznámka", { type: "textarea", required: false, full: true })}
        ${formFooter("Odeslat dotaz")}
      </div>
    </form>
    <aside class="aside-card reveal reveal-delay-2">
      <h3>Raději telefonem?</h3>
      <p>Pro návštěvu našeho sklepa volejte <a href="${SITE.phoneHref}"><strong>${SITE.phone}</strong></a> nebo pište na <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
      <ul>
        <li>Menší sklep s předlisovnou až pro <strong>16 osob</strong></li>
        <li>Nový sklep z roku 2016 až pro <strong>42 osob</strong></li>
        <li>Pohoštění a degustace <strong>950 Kč / osoba</strong></li>
        <li>Ubytování až pro <strong>24 osob</strong></li>
      </ul>
    </aside>
  </div>
</section>
`,
};

const objednavka = {
  path: "/objednavka/",
  title: "Objednávka vína | Vinný sklep Michal Zimolka",
  description: "Objednejte si víno z vinařství Zimolka s dopravou po celé ČR.",
  image: F + "23n.jpg",
  body: `
${pageHero({ image: F + "23n.jpg", eyebrow: "Doprava po celé ČR", title: "Objednávka vína" })}

<section class="section">
  <div class="container form-wrap">
    <form class="form reveal" data-mailto="${SITE.email}" data-subject="Objednávka vína" novalidate>
      <div class="form-grid">
        ${field("jmeno", "Vaše jméno", { attrs: 'autocomplete="name"' })}
        ${field("telefon", "Váš telefon", { type: "tel", attrs: 'autocomplete="tel"' })}
        ${field("email", "Váš e-mail", { type: "email", full: true, attrs: 'autocomplete="email"' })}
        ${field("text", "Vína které chcete objednat a počet kusů", { type: "textarea", full: true })}
        ${formFooter("Odeslat objednávku")}
      </div>
    </form>
    <aside class="aside-card reveal reveal-delay-2">
      <h3>Ceník a podmínky přepravy vín po ČR</h3>
      <p>Pro přepravu vín využíváme společnost TOPTRANS. Minimální množství pro přepravu je 6 lahví - tedy 1 karton.</p>
      <table class="table-simple">
        <thead><tr><th>Počet kartonů</th><th>Cena dopravy</th></tr></thead>
        <tbody>
          <tr><td>1 karton</td><td>180 Kč</td></tr>
          <tr><td>2–3 kartony</td><td>280 Kč</td></tr>
          <tr><td>4–6 kartony</td><td>445 Kč</td></tr>
          <tr><td>8–11 kartonu</td><td>550 Kč</td></tr>
          <tr><td>12–15 kartonu</td><td>800 Kč</td></tr>
        </tbody>
      </table>
      <p style="margin-top:1em">Cena dopravy při odběru více kartonů dle domluvy.</p>
      <a class="btn btn--outline" href="/katalog-vin/">${icon.bottle} Zpět do katalogu</a>
    </aside>
  </div>
</section>
`,
};

export const staticPages = [home, vinarstvi, sklep, ubytovani, kontakt, rezervace, objednavka];
