/* =====================================================================
   EDIT YOUR INFO HERE — this is the only place you should need to touch
   ===================================================================== */

const PROFILE = {
  email: "aravkataria2009@gmail.com",          // <-- put your real email here
  linkedin: "linkedin.com/in/arav-kataria-59512b423", // <-- put your LinkedIn URL here
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
  wireProfileLinks();
  renderProjects();
  renderSkills();
  setYear();
  setupDockScrollSpy();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    setupFluidBackground();
  }
});

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
   Fluid, mouse-reactive paint background
   Each blob idles on a slow sine drift and eases toward the pointer
   at its own speed, so the whole field feels like it's being stirred.
--------------------------------------------------------------------- */
function setupFluidBackground() {
  const blobs = Array.from(document.querySelectorAll(".blob"));
  if (!blobs.length) return;

  const layers = blobs.map((el, i) => ({
    el,
    parallax: 26 + i * 9,
    driftAmp: 36 + i * 7,
    driftSpeed: 0.00016 + i * 0.00004,
    phase: i * 1.35,
  }));

  let targetX = 0, targetY = 0;
  let smoothX = 0, smoothY = 0;

  function normalize(clientX, clientY) {
    targetX = (clientX / window.innerWidth) * 2 - 1;
    targetY = (clientY / window.innerHeight) * 2 - 1;
  }

  window.addEventListener("mousemove", (e) => normalize(e.clientX, e.clientY), { passive: true });
  window.addEventListener(
    "touchmove",
    (e) => {
      const t = e.touches[0];
      if (t) normalize(t.clientX, t.clientY);
    },
    { passive: true }
  );

  function tick(t) {
    smoothX += (targetX - smoothX) * 0.045;
    smoothY += (targetY - smoothY) * 0.045;

    layers.forEach((layer) => {
      const driftX = Math.sin(t * layer.driftSpeed + layer.phase) * layer.driftAmp;
      const driftY = Math.cos(t * layer.driftSpeed * 0.82 + layer.phase) * layer.driftAmp;
      const px = smoothX * layer.parallax;
      const py = smoothY * layer.parallax;
      layer.el.style.transform = `translate3d(${(driftX + px).toFixed(1)}px, ${(driftY + py).toFixed(1)}px, 0)`;
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}