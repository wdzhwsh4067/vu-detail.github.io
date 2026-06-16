/* ============================================================================
   DETAIL Lab — site.js  (assets/js/site.js)
   Vanilla, no dependencies. Loaded with `defer`. All features guarded and
   reduced-motion aware. Safe to run on any page (no-ops if elements missing).
   ============================================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------- 1. MOBILE NAV TOGGLE */
  (function mobileNav() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close on nav link activation (mobile flyout).
    nav.addEventListener("click", function (e) {
      if (e.target.closest(".nav__link")) setOpen(false);
    });

    // Close on Escape; return focus to toggle.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close when leaving mobile breakpoint so desktop nav is never stuck hidden.
    var mq = window.matchMedia("(min-width: 821px)");
    var onChange = function (e) { if (e.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  })();

  /* ---------------------------------------------- 2. HEADER CONDENSE ON SCROLL */
  (function condenseHeader() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var ticking = false;
    function update() {
      header.classList.toggle("is-condensed", window.scrollY > 12);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  })();

  /* --------------------------------------------- 3. REVEAL ON SCROLL (IO) */
  (function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    // Reduced-motion or no IntersectionObserver: show everything immediately.
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    els.forEach(function (el) { io.observe(el); });
  })();

  /* ----------------------------------------- 4. ACTIVE NAV LINK (scroll spy) */
  (function activeNav() {
    // Only spy on in-page sections that have matching nav anchors (home page).
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.nav__link[href*="#"]')
    );
    if (!links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    links.forEach(function (link) {
      var hash = link.getAttribute("href").split("#")[1];
      if (!hash) return;
      var section = document.getElementById(hash);
      if (section) map[hash] = link;
    });
    var sections = Object.keys(map).map(function (id) { return document.getElementById(id); });
    if (!sections.length) return;

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("is-active"); });
          var active = map[entry.target.id];
          if (active) active.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  })();

  /* ------------------------------------------- 5. SMOOTH ANCHOR SCROLL */
  (function smoothAnchors() {
    if (reduceMotion) return; // native jump; CSS smooth-scroll already disabled
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href").slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Move focus for accessibility without re-jumping the page.
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  })();

})();