/* ==========================================================================
   CYBERSECURITY TELEMETRY MESH - BACKGROUND CANVAS
   Lightweight, battery-efficient interactive particle grid
   ========================================================================== */

(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, maxDist: 140 };
  let animationFrameId = null;
  let isTabActive = true;

  // Particle configuration
  const PARTICLE_COUNT_DESKTOP = 45;
  const PARTICLE_COUNT_MOBILE = 20;
  const CONNECT_DIST = 120;

  function initDimensions() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = width < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 1.6 + 0.8,
        color: Math.random() > 0.3 ? 'rgba(6, 182, 212, ' : 'rgba(16, 185, 129, ',
        alpha: Math.random() * 0.4 + 0.2
      });
    }
  }

  function draw() {
    if (!isTabActive) return;

    ctx.clearRect(0, 0, width, height);

    // Draw connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECT_DIST) {
          const opacity = (1 - dist / CONNECT_DIST) * 0.16;
          ctx.strokeStyle = 'rgba(6, 182, 212, ' + opacity + ')';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Connect to mouse pointer
    if (mouse.x !== null && mouse.y !== null) {
      for (let i = 0; i < particles.length; i++) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.maxDist) {
          const opacity = (1 - dist / mouse.maxDist) * 0.28;
          ctx.strokeStyle = 'rgba(34, 211, 238, ' + opacity + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  // Event Listeners
  window.addEventListener('resize', function () {
    initDimensions();
  });

  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', function () {
    mouse.x = null;
    mouse.y = null;
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      isTabActive = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    } else {
      isTabActive = true;
      draw();
    }
  });

  initDimensions();
  draw();
})();
