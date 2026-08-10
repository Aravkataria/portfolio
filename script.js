/* =====================================================================
   EDIT YOUR INFO HERE — this is the only place you should need to touch
   ===================================================================== */

const PROFILE = {
  email: "	aravkataria2009@gmail.com",          
  linkedin: "https://linkedin.com/in/arav-kataria", 
  github: "https://github.com/Aravkataria",
};

const PROJECTS = [
  {
    name: "Arch-Ai-Tex",
    description:
      "Generates house floor plans from inputs like area and room count, with a sidebar chatbot. Rebuilding that chatbot as a small language model trained from scratch instead of an external API.",
    tags: ["Python", "Streamlit", "SLM"],
    url: "https://github.com/Aravkataria/Arch-Ai-Tex",
  },
  {
    name: "LumiDesk",
    description:
      "ESP32 + OLED desk display for whatever's currently playing. Reads Windows' media session API directly — works with Spotify, YouTube, or any app, no OAuth or rate limits.",
    tags: ["ESP32", "C++", "FastAPI", "Python"],
    url: "https://github.com/Aravkataria/LumiDesk",
  },
  {
    name: "Pyramid Compress",
    description:
      "Recursive image compression tool built on 2x2 block averaging, with nearest-neighbor and bilinear reconstruction. Ships as a Python CLI and a drag-and-drop web app.",
    tags: ["Python", "NumPy", "Pillow", "JavaScript"],
    url: "https://github.com/Aravkataria/pyramid-compression",
  },
  {
    name: "Ultrasonic Radar",
    description:
      "DIY 2D spatial mapper — an ultrasonic sensor sweeps 180 degrees on a servo, converting polar readings into a live X/Y point-cloud.",
    tags: ["Arduino", "ESP32", "Embedded"],
    url: "https://github.com/Aravkataria",
  },
];

const SKILLS = [
  "Python", "JavaScript", "C++", "HTML / CSS",
  "FastAPI", "NumPy", "Pillow", "Streamlit",
  "Arduino / ESP32", "Embedded Systems", "Git & GitHub",
];

/* =====================================================================
   Below this line: rendering + background animation.
   No need to edit unless you want to change behavior.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  safeRun("wireProfileLinks", wireProfileLinks);
  safeRun("renderProjects", renderProjects);
  safeRun("renderSkills", renderSkills);
  safeRun("setYear", setYear);
  safeRun("setupDockScrollSpy", setupDockScrollSpy);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    safeRun("setupPaintCanvas", setupPaintCanvas);
  }
});

function safeRun(label, fn) {
  try {
    fn();
  } catch (err) {
    console.error(`[portfolio] ${label} failed:`, err);
  }
}

function wireProfileLinks() {
  const linkedinEls = [document.getElementById("linkedinLink"), document.getElementById("contactLinkedin")];
  linkedinEls.forEach((el) => {
    if (!el) return;
    el.href = PROFILE.linkedin;
  });

  const emailEls = [document.getElementById("emailLink"), document.getElementById("contactEmail")];
  emailEls.forEach((el) => {
    if (!el) return;
    el.href = `mailto:${PROFILE.email}`;
  });
  const emailValue = document.querySelector("#contactEmail .contact-card-value");
  if (emailValue) emailValue.textContent = PROFILE.email;

  const linkedinValue = document.querySelector("#contactLinkedin .contact-card-value");
  if (linkedinValue) {
    linkedinValue.textContent = PROFILE.linkedin.replace(/^https?:\/\//, "");
  }

  const githubEls = [document.getElementById("ctaGithub")];
  githubEls.forEach((el) => {
    if (!el) return;
    el.href = PROFILE.github;
  });
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project-card">
      <div class="project-card-top">
        <h3>${escapeHtml(p.name)}</h3>
        <a class="project-card-link" href="${p.url}" target="_blank" rel="noopener" aria-label="Open ${escapeHtml(p.name)} on GitHub">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <p>${escapeHtml(p.description)}</p>
      <div class="project-tags">
        ${p.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
      </div>
    </article>
  `
  ).join("");
}

function renderSkills() {
  const cloud = document.getElementById("skillsCloud");
  if (!cloud) return;
  cloud.innerHTML = SKILLS.map((s) => `<span class="skill-pill">${escapeHtml(s)}</span>`).join("");
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------------------------------------------------------------
   Scroll spy for the floating dock nav
--------------------------------------------------------------------- */
function setupDockScrollSpy() {
  const sections = document.querySelectorAll(".section");
  const dockItems = document.querySelectorAll(".dock-item");
  if (!sections.length || !dockItems.length) return;
  if (typeof IntersectionObserver === "undefined") return;

  const map = new Map();
  dockItems.forEach((item) => map.set(item.dataset.section, item));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const item = map.get(entry.target.id);
        if (!item) return;
        if (entry.isIntersecting) {
          dockItems.forEach((d) => d.classList.remove("is-active"));
          item.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

/* ---------------------------------------------------------------------
   Ink-in-water paint background
--------------------------------------------------------------------- */
function setupPaintCanvas() {
  const canvas = document.getElementById("paintCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const DROP_LIFETIME_MS = 10000;
  const SPREAD_MS = 1400;
  const MIN_MOVE_DIST = 38;
  const MIN_SPAWN_INTERVAL_MS = 130;
  const MAX_ACTIVE_DROPS = 55;
  const BASE_ALPHA = 0.4;

  const COLOR_HOLD_MS = 6000;
  const COLOR_TRANSITION_MS = 2200;

  const PALETTE = [
    [168, 138, 247],
    [247, 150, 201],
    [120, 224, 181],
    [140, 180, 247],
    [250, 178, 130],
  ];

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let drops = [];
  let lastX = null, lastY = null, lastSpawnAt = 0;

  let colorOrder = shuffle(PALETTE.map((_, i) => i));
  let colorCycleStart = performance.now();
  let colorCursor = 0;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function lerpColor(c1, c2, t) {
    return [
      Math.round(c1[0] + (c2[0] - c1[0]) * t),
      Math.round(c1[1] + (c2[1] - c1[1]) * t),
      Math.round(c1[2] + (c2[2] - c1[2]) * t),
    ];
  }

  function currentColor(now) {
    const cycleLen = COLOR_HOLD_MS + COLOR_TRANSITION_MS;
    let elapsed = now - colorCycleStart;
    while (elapsed >= cycleLen) {
      colorCycleStart += cycleLen;
      colorCursor = (colorCursor + 1) % colorOrder.length;
      elapsed = now - colorCycleStart;
    }
    const from = PALETTE[colorOrder[colorCursor]];
    const to = PALETTE[colorOrder[(colorCursor + 1) % colorOrder.length]];
    if (elapsed <= COLOR_HOLD_MS) return from;
    const t = (elapsed - COLOR_HOLD_MS) / COLOR_TRANSITION_MS;
    return lerpColor(from, to, t);
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  function spawnDrop(x, y) {
    if (drops.length >= MAX_ACTIVE_DROPS) drops.shift();
    const color = currentColor(performance.now());
    const maxRadius = Math.min(window.innerWidth, window.innerHeight) * (0.13 + Math.random() * 0.09);
    const blots = [1, 2].map(() => ({
      dx: (Math.random() - 0.5) * maxRadius * 0.22,
      dy: (Math.random() - 0.5) * maxRadius * 0.22,
      rRatio: 0.82 + Math.random() * 0.22,
    }));
    drops.push({ x, y, color, maxRadius, blots, birth: performance.now() });
  }

  function handleMove(x, y) {
    const now = performance.now();
    if (lastX === null) {
      spawnDrop(x, y);
      lastX = x; lastY = y; lastSpawnAt = now;
      return;
    }
    const dist = Math.hypot(x - lastX, y - lastY);
    if (dist >= MIN_MOVE_DIST && now - lastSpawnAt >= MIN_SPAWN_INTERVAL_MS) {
      spawnDrop(x, y);
      lastX = x; lastY = y; lastSpawnAt = now;
    }
  }

  window.addEventListener(
    "mousemove",
    (e) => handleMove(e.clientX, e.clientY),
    { passive: true }
  );
  window.addEventListener(
    "touchmove",
    (e) => {
      const t = e.touches[0];
      if (t) handleMove(t.clientX, t.clientY);
    },
    { passive: true }
  );

  function easeOutCubic(p) {
    return 1 - Math.pow(1 - p, 3);
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const now = performance.now();

    drops = drops.filter((d) => now - d.birth < DROP_LIFETIME_MS);

    drops.forEach((d) => {
      const age = now - d.birth;
      const spreadP = easeOutCubic(Math.min(age / SPREAD_MS, 1));
      const radius = d.maxRadius * spreadP;
      const fadeP = Math.min(age / DROP_LIFETIME_MS, 1);
      const alpha = BASE_ALPHA * Math.pow(1 - fadeP, 1.6);

      if (alpha <= 0.004 || radius <= 0) return;

      const [r, g, b] = d.color;
      d.blots.forEach((blot) => {
        const cx = d.x + blot.dx * spreadP;
        const cy = d.y + blot.dy * spreadP;
        const rad = Math.max(radius * blot.rRatio, 1);
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill();
      });
    });

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}
