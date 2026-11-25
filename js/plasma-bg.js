/* =========================================================================
   ICPP 2026 — global plasma-research background
   Flowing field lines + glowing particle trails, drawn behind the whole page.
   Low cost: transparent canvas, capped DPR, ~60–110 particles.
   ========================================================================= */
(function () {
  'use strict';

  const canvas = document.getElementById('bgPlasma');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const COLORS = ['#22d3ee', '#8b5cf6', '#f472b6', '#38bdf8', '#4ade80'];
  const FIELD_LINES = 8;

  let W = 0, H = 0, t = 0, raf = 0, particles = [], lastDraw = 0;
  const RENDER_SCALE = 0.8;  // render below CSS resolution — it is a soft background
  const FRAME_MS = 1000 / 30; // 30 fps cap to save battery

  function spawn(seed) {
    return {
      x: seed ? Math.random() * W : (Math.random() < 0.5 ? -10 : W + 10),
      y: Math.random() * H,
      life: seed ? Math.random() * 300 : 0,
      maxLife: 260 + Math.random() * 420,
      speed: 0.30 + Math.random() * 0.85,
      color: COLORS[(Math.random() * COLORS.length) | 0],
      width: 0.5 + Math.random() * 1.3
    };
  }

  function initParticles() {
    const count = Math.round(Math.min(150, Math.max(34, (W * H) / 17000)));
    particles = Array.from({ length: count }, () => spawn(true));
  }

  function resize() {
    W = canvas.clientWidth || window.innerWidth;
    H = canvas.clientHeight || window.innerHeight;
    const dpr = RENDER_SCALE; // deliberately below CSS resolution: it is a soft, blurred background
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initParticles();
  }

  // Smooth pseudo-flow field (sum of sines — cheap and organic)
  function angleAt(x, y, time) {
    const s = 0.0017;
    return (
      Math.sin(x * s + time * 0.0042) +
      Math.cos(y * s * 1.35 - time * 0.0031) +
      Math.sin((x + y) * s * 0.72 + time * 0.0024)
    ) * 1.15;
  }

  function drawFieldLines() {
    for (let i = 0; i < FIELD_LINES; i++) {
      const amp = 26 + i * 16;
      const freq = 0.0035 + i * 0.0009;
      const phase = t * 0.0022 + i * 1.7;
      const baseY = H * (0.14 + i * 0.145);
      ctx.beginPath();
      for (let x = 0; x <= W; x += 10) {
        const y = baseY + Math.sin(x * freq + phase) * amp * Math.sin(t * 0.0006 + i);
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = i % 2 === 0 ? 'rgba(34,211,238,0.09)' : 'rgba(139,92,246,0.08)';
      ctx.lineWidth = i % 3 === 0 ? 1.2 : 1;
      ctx.stroke();
    }
  }

  function loop(ts) {
    raf = requestAnimationFrame(loop);
    if (ts - lastDraw < FRAME_MS) return;
    lastDraw = ts;

    // Fade old trails while keeping the canvas transparent
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,0.10)';
    ctx.fillRect(0, 0, W, H);

    ctx.globalCompositeOperation = 'lighter';
    drawFieldLines();

    for (const p of particles) {
      const a = angleAt(p.x, p.y, t);
      const nx = p.x + Math.cos(a) * p.speed * 1.7;
      const ny = p.y + Math.sin(a) * p.speed * 1.7;

      ctx.strokeStyle = p.color;
      ctx.globalAlpha = 0.12 + 0.34 * Math.sin(Math.PI * Math.min(1, p.life / p.maxLife));
      ctx.lineWidth = p.width;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      p.x = nx; p.y = ny; p.life++;
      if (p.life > p.maxLife || p.x < -30 || p.x > W + 30 || p.y < -30 || p.y > H + 30) {
        Object.assign(p, spawn(false));
      }
    }

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    t += 1;
  }

  function staticField() {
    ctx.globalCompositeOperation = 'lighter';
    drawFieldLines();
    for (const p of particles) {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.18;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.width, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  resize();
  if (reduced) {
    staticField();
  } else {
    lastDraw = 0;
    raf = requestAnimationFrame(loop);
  }

  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      resize();
      if (reduced) staticField();
    }, 180);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else if (!reduced) {
      cancelAnimationFrame(raf);
      lastDraw = 0;
      raf = requestAnimationFrame(loop);
    }
  });
})();
