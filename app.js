/* =========================================================================
   ICPP 2026 — interactions & rendering
   ========================================================================= */
(function () {
  'use strict';

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const initials = (name) => name.replace(/\(.*?\)/g, '').trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------------------- Day tabs -------------------- */
  const tabsEl = $('#dayTabs');
  const panelEl = $('#programPanel');
  let activeDay = 0;

  DAYS.forEach((day, i) => {
    const b = document.createElement('button');
    b.className = 'day-tab' + (i === 0 ? ' active' : '');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.dataset.index = i;
    b.innerHTML =
      `<span class="dt-num">${esc(day.num)}</span>` +
      `<span class="dt-meta"><span class="dt-dow">${esc(day.dow)} · Dec</span><span class="dt-lbl">${esc(day.label)}</span></span>`;
    b.addEventListener('click', () => selectDay(i));
    tabsEl.appendChild(b);
  });

  function selectDay(i) {
    activeDay = i;
    $$('.day-tab').forEach((t, idx) => {
      t.classList.toggle('active', idx === i);
      t.setAttribute('aria-selected', idx === i ? 'true' : 'false');
    });
    renderDay(DAYS[i]);
    const tab = tabsEl.children[i];
    if (tab && tab.scrollIntoView) tab.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
  }

  /* -------------------- Program rendering -------------------- */
  function renderDay(day) {
    let html = `
      <div class="day-intro" data-num="${esc(day.num)}">
        <div class="day-intro-top">
          <span class="day-chip">${esc(day.label)}</span>
          <span class="day-date">${esc(day.date)}</span>
        </div>
        <h3>${esc(day.title)}</h3>
        <p>${esc(day.blurb)}</p>
      </div>
      <div class="timeline">`;

    day.items.forEach((item, idx) => {
      const delay = Math.min(idx * 0.035, 0.4);
      html += `<div class="tl-item" data-kind="${esc(item.kind || 'session')}" style="animation-delay:${delay}s">
        <div class="tl-time">${item.time.split(' – ').map(esc).join('<br>– ')}</div>
        <span class="tl-node" aria-hidden="true"></span>
        <div class="tl-content">`;

      if (item.type === 'single') {
        const kind = item.kind || 'info';
        const tagText = { break: 'Break', meal: 'Meal', social: 'Social', info: 'Info', highlight: 'Special' }[kind] || 'Event';
        html += `<div class="event" data-kind="${esc(kind)}">
          <div class="event-title">${esc(item.title)} <span class="event-tag tag-${esc(kind)}">${tagText}</span></div>
          ${item.note ? `<div class="event-note">${esc(item.note)}</div>` : ''}
        </div>`;
      }

      else if (item.type === 'plenary') {
        html += `<div class="plenary-block">
          <div class="plenary-head"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.4 5.6L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-.4L12 3Z"/></svg>${esc(item.title)}</div>
          <div class="plenary-list">`;
        item.people.forEach((p) => {
          html += `<div class="plenary-row">
            <div class="pr-time">${esc(p[0])}</div>
            <div class="pr-person"><span class="plenary-avatar">${esc(initials(p[1]))}</span>
              <div><div class="pr-name">${esc(p[1])}</div><div class="pr-desc">${esc(p[2])}</div></div>
            </div>
          </div>`;
        });
        html += `</div></div>`;
      }

      else if (item.type === 'sessions') {
        html += `<div class="sessions-block">
          <div class="sessions-head"><strong>${esc(item.title)}</strong><span>${item.tracks.length} parallel tracks</span></div>
          <div class="session-grid">`;
        item.tracks.forEach(([code, speakers]) => {
          const t = TRACKS[code] || { code, name: code, color: '#94a3b8', glyph: '•' };
          html += `<div class="track-card" data-track="${esc(code)}" style="--tc:${esc(t.color)}">
            <div class="track-head">
              <span class="track-glyph" aria-hidden="true">${esc(t.glyph)}</span>
              <div><div class="track-name">${esc(t.name)}</div><div class="track-code">${esc(t.code)}</div></div>
            </div>
            <ul class="speaker-list">`;
          speakers.forEach((s) => {
            const oral = /oral/i.test(s);
            html += `<li class="${oral ? 'oral' : ''}">${esc(s)}</li>`;
          });
          html += `</ul></div>`;
        });
        html += `</div></div>`;
      }

      html += `</div></div>`;
    });
    html += `</div>`;
    panelEl.innerHTML = html;
    applyFocus();
  }

  /* -------------------- Legend + focus -------------------- */
  const legend = $('#legendItems');
  const focusSelect = $('#focusSelect');
  Object.values(TRACKS).forEach((t) => {
    const el = document.createElement('span');
    el.className = 'legend-item';
    el.innerHTML = `<span class="legend-dot" style="background:${esc(t.color)}"></span>${esc(t.name)} (${esc(t.code)})`;
    legend.appendChild(el);
    const opt = document.createElement('option');
    opt.value = t.code;
    opt.textContent = t.name;
    focusSelect.appendChild(opt);
  });

  function applyFocus() {
    const val = focusSelect.value;
    document.body.classList.toggle('focus-on', !!val);
    $$('.track-card', panelEl).forEach((card) => card.classList.toggle('is-focused', !!val && card.dataset.track === val));
  }
  focusSelect.addEventListener('change', applyFocus);

  /* -------------------- Themes -------------------- */
  const themeGrid = $('#themeGrid');
  THEMES.forEach((t) => {
    const c = document.createElement('article');
    c.className = 'theme-card';
    c.style.setProperty('--tc', t.color);
    c.innerHTML = `<span class="theme-code">${esc(t.code)}</span>
      <div class="theme-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${esc(t.icon)}"/></svg></div>
      <h3>${esc(t.title)}</h3><p>${esc(t.sub)}</p>`;
    themeGrid.appendChild(c);
  });

  /* -------------------- Speakers -------------------- */
  const palette = [
    ['#22d3ee', '#3b82f6'], ['#a78bfa', '#ec4899'], ['#f472b6', '#f59e0b'],
    ['#4ade80', '#22d3ee'], ['#fbbf24', '#fb7185'], ['#38bdf8', '#818cf8']
  ];
  const spGrid = $('#speakerGrid');
  PLENARY.forEach((p, i) => {
    const [name, aff, topic, photo] = p;
    const [c1, c2] = palette[i % palette.length];
    const c = document.createElement('article');
    c.className = 'speaker-card';
    const pic = photo
      ? `<img class="sp-photo" src="${esc(photo)}" alt="${esc(name)}" loading="lazy" decoding="async"
           onload="this.classList.add('loaded')" onerror="this.remove()">`
      : '';
    c.innerHTML = `<div class="sp-avatar" style="--c1:${c1};--c2:${c2}">
        <span class="sp-initials">${esc(initials(name))}</span>${pic}
      </div>
      <div><div class="sp-name">${esc(name)}</div><div class="sp-aff">${esc(aff)}</div><div class="sp-topic">${esc(topic)}</div></div>`;
    spGrid.appendChild(c);
  });

  /* -------------------- Social -------------------- */
  const socialIcons = {
    toast: '<path d="M8 22h8m-8 0V12m8 10V12M5 12h14l-1-4H6l-1 4Zm3-4V5a3 3 0 0 1 6 0v3"/>',
    dance: '<circle cx="13" cy="4" r="2"/><path d="m7 21 3-5-2-3 3-4 4 3 3 1m-8 8 2-8 4 2 3 6"/>',
    banquet: '<path d="M4 3v7a4 4 0 0 0 8 0V3M8 3v18M17 3c2 2 2 6 0 8v10"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>'
  };
  const socialGrid = $('#socialGrid');
  SOCIAL.forEach((s) => {
    const c = document.createElement('article');
    c.className = 'social-card';
    c.style.setProperty('--ac', s.accent);
    c.innerHTML = `<div class="sc-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${socialIcons[s.icon] || socialIcons.toast}</svg></div>
      <div class="sc-when">${esc(s.date)} · ${esc(s.time)}</div>
      <h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>`;
    socialGrid.appendChild(c);
  });

  /* -------------------- Initial render -------------------- */
  selectDay(0);

  /* -------------------- Countdown -------------------- */
  const target = new Date('2026-12-06T08:15:00+05:30').getTime();
  const cd = { d: $('#cdDays'), h: $('#cdHours'), m: $('#cdMins'), s: $('#cdSecs') };
  function tickCountdown() {
    const diff = target - Date.now();
    if (diff <= 0) {
      cd.d.textContent = cd.h.textContent = cd.m.textContent = cd.s.textContent = '00';
      const label = $('.countdown-label');
      if (label) label.textContent = 'The congress is underway';
      return;
    }
    const sec = Math.floor(diff / 1000);
    cd.d.textContent = String(Math.floor(sec / 86400)).padStart(2, '0');
    cd.h.textContent = String(Math.floor((sec % 86400) / 3600)).padStart(2, '0');
    cd.m.textContent = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    cd.s.textContent = String(sec % 60).padStart(2, '0');
  }
  tickCountdown();
  setInterval(tickCountdown, 1000);

  /* -------------------- Scroll UI -------------------- */
  const header = $('#header');
  const progress = $('#scrollProgress');
  const toTop = $('#toTop');
  const sections = ['program', 'themes', 'speakers', 'social'].map((id) => $('#' + id));
  const navLinks = $$('.nav-link');
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle('scrolled', y > 30);
    progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';
    toTop.classList.toggle('visible', y > 600);

    let current = '';
    sections.forEach((s) => { if (s && s.getBoundingClientRect().top <= 140) current = s.id; });
    navLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));

  /* -------------------- Mobile menu -------------------- */
  const menuToggle = $('#menuToggle');
  const navLinksEl = $('#navLinks');
  menuToggle.addEventListener('click', () => {
    const open = navLinksEl.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $$('.nav-link').forEach((l) => l.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  /* -------------------- Reveal on scroll -------------------- */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* -------------------- Plasma canvas -------------------- */
  const canvas = $('#plasmaCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d', { alpha: true });
    const off = document.createElement('canvas');
    const octx = off.getContext('2d', { alpha: true });
    let W = 0, H = 0, img = null, raf = 0, t = 0;
    const SCALE = 5; // render at 1/5 resolution then upscale for a soft plasma look

    // Pre-computed plasma palette: navy → blue → violet → magenta → cyan
    const stops = [
      [0.00, [10, 14, 42]], [0.28, [26, 86, 158]], [0.52, [104, 62, 208]],
      [0.74, [196, 66, 172]], [1.00, [66, 222, 214]]
    ];
    const LUT = new Uint8Array(256 * 3);
    for (let i = 0; i < 256; i++) {
      const v = i / 255;
      let k = 0;
      while (k < stops.length - 2 && v > stops[k + 1][0]) k++;
      const [p0, c0] = stops[k], [p1, c1] = stops[k + 1];
      const f = Math.min(1, Math.max(0, (v - p0) / (p1 - p0)));
      for (let j = 0; j < 3; j++) LUT[i * 3 + j] = Math.round(c0[j] + (c1[j] - c0[j]) * f);
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = Math.max(1, Math.round(rect.width / SCALE));
      H = Math.max(1, Math.round(rect.height / SCALE));
      off.width = W; off.height = H;
      img = octx.createImageData(W, H);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    function draw() {
      const d = img.data;
      const tt = t;
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          // Classic multi-wave plasma, normalized to 0..1
          let v = Math.sin(x / 11 + tt) +
                  Math.sin(y / 8 + tt * 1.1) +
                  Math.sin((x + y) / 13 + tt * 0.8) +
                  Math.sin(Math.sqrt((x - W / 2) ** 2 + (y - H / 2) ** 2) / 9 - tt * 1.4);
          v = (v + 4) / 8;
          const li = (Math.min(255, Math.max(0, Math.round(v * 255)))) * 3;
          const i = (y * W + x) * 4;
          d[i] = LUT[li]; d[i + 1] = LUT[li + 1]; d[i + 2] = LUT[li + 2]; d[i + 3] = 255;
        }
      }
      octx.putImageData(img, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(off, 0, 0, canvas.width, canvas.height);
    }

    function setupCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      resize();
    }

    function loop() {
      t += 0.012;
      draw();
      raf = requestAnimationFrame(loop);
    }

    setupCanvas();
    if (reduced) { draw(); }
    else { loop(); }

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { setupCanvas(); if (reduced) draw(); }, 180);
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduced) loop();
    });
  }
})();
