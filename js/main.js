/* Amy Nail Spa — i18n IT/EN, intro "l'insegna si accende", nav, reveal, watchdog */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_services: 'I servizi',
      nav_care: 'La cura',
      nav_hours: 'Orari e dove',
      book_short: 'Prenota',
      wa_cta: 'Prenota su WhatsApp',
      call_cta: 'Chiama',
      hero_eyebrow: 'Nail spa · centro estetico · Porta Venezia, Milano',
      hero_sub: '& Centro Estetico',
      hero_claim: 'Le mani, in buone mani.',
      hero_lead: 'Manicure e pedicure spa, semipermanente CND, ricostruzione e trattamenti estetici in via Melzo 24 — aperto sette giorni su sette, con orario continuato.',
      hero_badge: '4,6 su Google · aperto 7 giorni su 7',
      pt1_t: 'Sette giorni su sette',
      pt1_p: "Dal lunedì al sabato 9:30–21, la domenica 10–20: orario continuato, anche in pausa pranzo e dopo l'ufficio.",
      pt2_t: 'Nail spa e centro estetico',
      pt2_p: 'Unghie curate e trattamenti estetici nello stesso posto: un solo appuntamento, tutto fatto.',
      pt3_t: 'Nel cuore di Porta Venezia',
      pt3_p: 'Via Melzo 24, a due passi da corso Buenos Aires e dalla M1: comodo prima o dopo qualsiasi giro.',
      sv_title: 'I servizi',
      sv_sub: 'Quelli scritti in vetrina — con i prezzi chiari prima di sedersi.',
      c1: 'Manicure',
      m1: 'Manicure spa (senza smalto)',
      m2: 'Manicure spa colore',
      m3: 'Manicure spa semipermanente',
      m4: 'Manicure spa semipermanente CND',
      c2: 'Pedicure',
      p1: 'Pedicure spa (senza smalto)',
      p2: 'Pedicure spa con smalto',
      p3: 'Pedicure spa semipermanente',
      p4: 'Pedicure spa semipermanente CND',
      c3: 'Ricostruzione e nail art',
      r1: 'Ricostruzione in gel',
      r2: 'Refill',
      r3: 'Nail art',
      c4: 'Centro estetico',
      est_p: 'Epilazione e trattamenti viso e corpo: il listino completo è in negozio — o a un messaggio di distanza su WhatsApp.',
      da: 'da',
      sv_note: 'Prezzi indicativi — confermiamo tutto al momento della prenotazione',
      cura_title: 'La cura è nel metodo',
      cura_sub: 'Spa, non catena di montaggio.',
      cp1_t: 'Il rito spa',
      cp1_p: "Ogni manicure e pedicure è un trattamento completo: si parte dalla cura di mani e piedi, lo smalto è solo l'ultimo passo.",
      cp2_t: 'Semipermanente CND',
      cp2_p: 'Per il semipermanente usiamo CND, il marchio professionale che ha inventato la categoria: colore pieno, unghie rispettate.',
      cp3_t: 'Senza fretta',
      cp3_p: "L'orario lungo serve a questo: ogni appuntamento ha il suo tempo, anche all'ora di pranzo o la domenica.",
      hours_title: 'Orari e dove',
      hours_sub: 'Aperto quando serve: sempre.',
      hours_caption: 'Orari di apertura',
      mon: 'Lunedì', tue: 'Martedì', wed: 'Mercoledì', thu: 'Giovedì',
      fri: 'Venerdì', sat: 'Sabato', sun: 'Domenica',
      metro: 'M1 Porta Venezia, due passi da corso Buenos Aires',
      maps: 'Apri in Google Maps',
      wa_note: 'Su WhatsApp rispondiamo in orario di negozio: scrivete quando volete, confermiamo appena possibile.',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'Il centro',
      f_line: 'Nail spa e centro estetico, aperto sette giorni su sette nel cuore di Porta Venezia.',
      aria_top: 'Amy Nail Spa — torna su',
      aria_nav: 'Navigazione principale'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_services: 'Services',
      nav_care: 'The care',
      nav_hours: 'Hours & location',
      book_short: 'Book',
      wa_cta: 'Book on WhatsApp',
      call_cta: 'Call',
      hero_eyebrow: 'Nail spa · beauty centre · Porta Venezia, Milan',
      hero_sub: '& Beauty Centre',
      hero_claim: 'Your hands, in good hands.',
      hero_lead: 'Spa manicures and pedicures, CND gel polish, nail extensions and beauty treatments at Via Melzo 24 — open seven days a week, all day long.',
      hero_badge: '4.6 on Google · open 7 days a week',
      pt1_t: 'Seven days a week',
      pt1_p: 'Monday to Saturday 9:30–21, Sunday 10–20: no lunch break, easy after office hours too.',
      pt2_t: 'Nail spa & beauty centre',
      pt2_p: 'Perfect nails and beauty treatments in one place: one appointment, everything done.',
      pt3_t: 'In the heart of Porta Venezia',
      pt3_p: 'Via Melzo 24, steps from Corso Buenos Aires and the M1: handy before or after any stroll.',
      sv_title: 'Services',
      sv_sub: 'The ones written on our window — with clear prices before you sit down.',
      c1: 'Manicure',
      m1: 'Spa manicure (no polish)',
      m2: 'Spa manicure with colour',
      m3: 'Spa manicure with gel polish',
      m4: 'Spa manicure with CND gel polish',
      c2: 'Pedicure',
      p1: 'Spa pedicure (no polish)',
      p2: 'Spa pedicure with polish',
      p3: 'Spa pedicure with gel polish',
      p4: 'Spa pedicure with CND gel polish',
      c3: 'Extensions & nail art',
      r1: 'Gel extensions',
      r2: 'Refill',
      r3: 'Nail art',
      c4: 'Beauty centre',
      est_p: 'Waxing, face and body treatments: the full price list is in the shop — or one WhatsApp message away.',
      da: 'from',
      sv_note: 'Indicative prices — we confirm everything when you book',
      cura_title: 'The care is in the method',
      cura_sub: 'A spa, not an assembly line.',
      cp1_t: 'The spa ritual',
      cp1_p: 'Every manicure and pedicure is a full treatment: it starts with caring for hands and feet — polish is only the last step.',
      cp2_t: 'CND gel polish',
      cp2_p: 'For gel polish we use CND, the professional brand that invented the category: full colour, nails respected.',
      cp3_t: 'No rush',
      cp3_p: 'That’s what the long hours are for: every appointment gets its time, even at lunch or on a Sunday.',
      hours_title: 'Hours & location',
      hours_sub: 'Open when you need it: always.',
      hours_caption: 'Opening hours',
      mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday',
      fri: 'Friday', sat: 'Saturday', sun: 'Sunday',
      metro: 'M1 Porta Venezia, steps from Corso Buenos Aires',
      maps: 'Open in Google Maps',
      wa_note: 'We reply on WhatsApp during shop hours: write any time, we confirm as soon as possible.',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'The centre',
      f_line: 'Nail spa and beauty centre, open seven days a week in the heart of Porta Venezia.',
      aria_top: 'Amy Nail Spa — back to top',
      aria_nav: 'Main navigation'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('amy-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('amy-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- intro "l'insegna si accende" ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (introReduced) {
      intro.remove();
    } else {
      var introDone = false;
      var sfuma = function () {
        intro.classList.add('intro--via');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(viaTimer);
        clearTimeout(endTimer);
        document.body.classList.remove('intro-lock');
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.body.classList.add('intro-lock');
      var viaTimer = setTimeout(sfuma, 2300);
      var endTimer = setTimeout(finishIntro, 2950);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    var chiudiNav = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', chiudiNav);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        chiudiNav();
        toggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 920) chiudiNav();
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.hero-contenuto, .punto, .sezione-titolo, .sezione-sub, ' +
      '.listino-cat, .listino-nota, .listino-cta, ' +
      '.cura-punto, .orari-tabella, .dove'
    );
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */

  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
