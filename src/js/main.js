(() => {
  const doc = document.documentElement;
  doc.classList.remove("no-js");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const storage = {
    get(key) { try { return window.localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch { /* private mode */ } },
  };

  /* ---------- Header ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header?.classList.toggle("is-scrolled", header.hasAttribute("data-solid") || window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const setNav = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle?.setAttribute("aria-expanded", String(open));
    toggle?.setAttribute("aria-label", open ? "Zavřít menu" : "Otevřít menu");
  };
  toggle?.addEventListener("click", () => setNav(!document.body.classList.contains("nav-open")));
  document.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => setNav(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setNav(false); });
  window.matchMedia("(min-width: 1081px)").addEventListener("change", (e) => { if (e.matches) setNav(false); });

  /* ---------- Hero slideshow ---------- */
  const slides = [...document.querySelectorAll(".hero-slides img")];
  const dots = [...document.querySelectorAll(".hero-dots button")];
  if (slides.length > 1) {
    let current = 0;
    let timer;
    const show = (i) => {
      slides[current].classList.remove("is-active");
      dots[current]?.setAttribute("aria-current", "false");
      current = (i + slides.length) % slides.length;
      const img = slides[current];
      if (img.dataset.src) { img.src = img.dataset.src; img.removeAttribute("data-src"); }
      img.classList.add("is-active");
      dots[current]?.setAttribute("aria-current", "true");
    };
    const start = () => { if (!reduceMotion) timer = setInterval(() => show(current + 1), 6500); };
    dots.forEach((d, i) => d.addEventListener("click", () => { clearInterval(timer); show(i); start(); }));
    // preload the next slides once the page is idle
    window.addEventListener("load", () => slides.forEach((s) => { if (s.dataset.src) { s.src = s.dataset.src; s.removeAttribute("data-src"); } }));
    start();
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Count-up numbers ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const fmt = (n, decimals) => n.toLocaleString("cs-CZ", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        cio.unobserve(el);
        const target = parseFloat(el.dataset.count);
        const decimals = (el.dataset.count.split(".")[1] || "").length;
        const t0 = performance.now();
        const dur = 1400;
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(target * eased, decimals);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- Lite YouTube ---------- */
  document.querySelectorAll(".video[data-yt]").forEach((wrap) => {
    wrap.querySelector("button")?.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${wrap.dataset.yt}?autoplay=1&rel=0`;
      iframe.title = wrap.dataset.title || "Video";
      iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      wrap.replaceChildren(iframe);
    });
  });

  /* ---------- Lightbox ---------- */
  const lb = document.querySelector(".lightbox");
  if (lb) {
    const img = lb.querySelector("img");
    const cap = lb.querySelector(".lightbox-caption");
    const count = lb.querySelector(".lb-count");
    let group = [];
    let index = 0;
    let lastFocus = null;

    const render = () => {
      const a = group[index];
      img.src = a.href;
      img.alt = a.dataset.caption || a.querySelector("img")?.alt || "";
      cap.textContent = a.dataset.caption || "";
      count.textContent = `${index + 1} / ${group.length}`;
      [group[index + 1], group[index - 1]].forEach((n) => { if (n) new Image().src = n.href; });
    };
    const open = (a) => {
      group = [...document.querySelectorAll(`[data-lightbox="${a.dataset.lightbox}"]`)];
      index = group.indexOf(a);
      lastFocus = document.activeElement;
      render();
      lb.hidden = false;
      requestAnimationFrame(() => lb.classList.add("is-open"));
      document.body.style.overflow = "hidden";
      lb.querySelector(".lb-close").focus();
    };
    const close = () => {
      lb.classList.remove("is-open");
      document.body.style.overflow = "";
      setTimeout(() => { lb.hidden = true; img.removeAttribute("src"); }, 250);
      lastFocus?.focus();
    };
    const step = (d) => { index = (index + d + group.length) % group.length; render(); };

    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-lightbox]");
      if (!a) return;
      e.preventDefault();
      open(a);
    });
    lb.querySelector(".lb-close").addEventListener("click", close);
    lb.querySelector(".lb-prev").addEventListener("click", () => step(-1));
    lb.querySelector(".lb-next").addEventListener("click", () => step(1));
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
    let touchX = null;
    lb.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
      touchX = null;
    });
  }

  /* ---------- Age gate (katalog vín) ---------- */
  const gate = document.querySelector(".age-gate");
  if (gate && storage.get("age-ok") !== "1" && typeof gate.showModal === "function") {
    gate.showModal();
    gate.addEventListener("cancel", (e) => e.preventDefault());
    gate.querySelector("[data-agree]").addEventListener("click", () => {
      storage.set("age-ok", "1");
      gate.close();
    });
  }

  /* ---------- Wine filters ---------- */
  const wineList = document.querySelector(".wines");
  if (wineList) {
    const wines = [...wineList.querySelectorAll(".wine")];
    const countEl = document.querySelector(".filters-count");
    const state = { type: "all", color: "all" };
    const plural = (n) => (n === 1 ? "víno" : n >= 2 && n <= 4 ? "vína" : "vín");
    const apply = () => {
      let shown = 0;
      wines.forEach((w) => {
        const ok = (state.type === "all" || w.dataset.type === state.type) && (state.color === "all" || w.dataset.color === state.color);
        w.hidden = !ok;
        if (ok) shown++;
      });
      if (countEl) countEl.textContent = `Zobrazeno ${shown} ${plural(shown)}`;
    };
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const { filter, value } = btn.dataset;
        state[filter] = value;
        document.querySelectorAll(`.filter-btn[data-filter="${filter}"]`).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
        apply();
      });
    });
    apply();
  }

  /* ---------- Forms (odeslání e-mailem) ---------- */
  document.querySelectorAll("form[data-mailto]").forEach((form) => {
    const params = new URLSearchParams(location.search);
    const wine = params.get("vino");
    if (wine && form.elements.text && !form.elements.text.value) form.elements.text.value = `${wine} – počet lahví: `;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const lines = [];
      form.querySelectorAll("[data-label]").forEach((el) => {
        const v = String(data.get(el.name) || "").trim();
        if (v) lines.push(`${el.dataset.label}: ${v}`);
      });
      const subject = `${form.dataset.subject} – ${String(data.get("jmeno") || "").trim()}`;
      const href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      window.location.href = href;
      form.querySelector(".form-status")?.classList.add("is-visible");
    });
  });

  /* ---------- Year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
