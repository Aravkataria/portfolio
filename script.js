/* =====================================================================
   EDIT YOUR INFO HERE — this is the only place you should need to touch
   ===================================================================== */

const PROFILE = {
  email: "aravkataria2009@gmail.com",          // <-- put your real email here
  linkedin: "https://www.linkedin.com/in/arav-kataria-59512b423/", // <-- put your LinkedIn URL here
  github: "https://github.com/Aravkataria",
};
// NOTE on the message form below: it delivers to PROFILE.email via
// FormSubmit (formsubmit.co) — free, no signup, no backend needed.
// The FIRST message ever sent will trigger a one-time confirmation
// email from FormSubmit to that address — you must click the link in
// it once before messages start arriving in your inbox. Every message
// after that just shows up normally.

const PROJECTS = [
  {
    id: "arch-ai-tex",
    name: "Arch-Ai-Tex",
    description:
      "Generates house floor plans from area, room count, and plot shape using a GAN, with a Random Forest model estimating room layouts and an FCN-ResNet50 segmentation model marking walls. Also has a real-time mode where an ESP32 + ultrasonic/PIR sensors measure a room and feed dimensions straight into the generator. Rebuilding the sidebar chatbot as a small language model trained from scratch instead of an external API.",
    tags: ["Python", "PyTorch", "Streamlit", "GAN"],
    url: "https://github.com/Aravkataria/Arch-Ai-Tex",
    demo: "https://aravkataria.github.io/Arch-Ai-Tex/",
    status: "open-source",
    statusLabel: "open source",
    what:
      "Arch-Ai-Tex generates house floor plans from area, room count, and plot shape. A GAN produces the floor plan, a Random Forest model estimates room layouts, and an FCN-ResNet50 segmentation model marks the walls. A real-time mode lets an ESP32 with ultrasonic and PIR sensors measure a physical room and feed those dimensions straight into the generator.",
    why:
      "Built to work through generative floor-plan design end-to-end — generation, layout estimation, and segmentation as separate, purpose-built models rather than one catch-all network — and to give the tool a path from a real, physically measured room straight into the generator.",
    how: [
      "Area / room count / plot shape",
      "Random Forest — room layout estimation",
      "GAN — floor plan generation",
      "FCN-ResNet50 — wall segmentation",
      "Streamlit interface",
    ],
    contribution: [
      "Trained and tuned the GAN for floor-plan generation",
      "Built the Random Forest room-layout estimator",
      "Set up the FCN-ResNet50 wall-segmentation model",
      "Built the ESP32 real-time measurement mode (ultrasonic + PIR sensors)",
      "Training a small language model from scratch to replace the sidebar chatbot's Groq API dependency",
    ],
    results:
      "Generates a full floor plan from just area, room count, and plot shape, with the segmentation model marking walls on the generated output. The from-scratch SLM chatbot rebuild — replacing the external Groq API — is in progress.",
  },
  {
    id: "lumidesk",
    name: "LumiDesk",
    description:
      "ESP32 + OLED desk display for whatever's currently playing. Reads Windows' media session API directly — works with Spotify, YouTube, or any app, no OAuth or rate limits. Backend fetches synced lyrics from LRCLIB and serves them alongside track/progress data over local HTTP; firmware is split into manager classes for the display, animations, and marquee scrolling.",
    tags: ["ESP32", "C++", "FastAPI", "Python"],
    url: "https://github.com/Aravkataria/LumiDesk",
    status: "open-source",
    statusLabel: "Open Source",
    what:
      "LumiDesk is a desktop-to-ESP32 media display. It reads Windows' built-in media-session API directly, so it works with Spotify, YouTube, browser tabs, or anything else reporting playback to Windows — no OAuth, client IDs, or rate limits. A second screen shows time and weather when nothing's playing.",
    why:
      "Built to have a dedicated physical display for whatever's playing without depending on any one streaming service's API — reading the OS-level session data instead means it works with anything Windows already knows about.",
    how: [
      "Windows Media Session API",
      "Python backend (FastAPI)",
      "Lyrics fetched from LRCLIB",
      "Wi-Fi",
      "ESP32 firmware",
      "1.3\" SH1106 OLED (128×64, I2C)",
    ],
    contribution: [
      "Built the FastAPI backend (app.py, media_service.py, lyrics_service.py, models.py)",
      "Implemented synced lyrics fetching via LRCLIB",
      "Wrote the ESP32 firmware, split into DisplayManager, ScreenManager, AnimationManager, MarqueeManager and NotificationManager classes",
      "Designed the idle screen (time + weather) shown when nothing is playing",
    ],
    results:
      "Works with Spotify, YouTube, or any app reporting to Windows' media session — no per-service API keys or OAuth needed. Runs on a single 1.3\" SH1106 OLED over I2C.",
  },
  {
    id: "pyramid-compress",
    name: "Pyramid Compress",
    description:
      "Recursive image compression tool built on 2x2 block averaging, with nearest-neighbor and bilinear reconstruction and PSNR reporting to measure quality loss. Ships as a Python CLI and a drag-and-drop web app — both run entirely client-side/local, no images ever leave the device.",
    tags: ["Python", "NumPy", "Pillow", "JavaScript"],
    url: "https://github.com/Aravkataria/pyramid-compression",
    demo: "https://aravkataria.github.io/pyramid-compression/"
    status: "open-source",
    statusLabel: "Open Source",
    what:
      "A recursive image compression tool built on 2×2 block averaging. Ships as both a Python CLI and a drag-and-drop web app that runs entirely client-side, so images never leave the device.",
    why:
      "Built to implement image compression by hand — block averaging down, then nearest-neighbor or bilinear reconstruction back up — instead of relying on an existing codec, with PSNR reporting to see exactly what each compression level costs in quality.",
    how: [
      "Image",
      "Recursive 2×2 block averaging (compress)",
      "Compressed pyramid + .meta.txt sidecar",
      "Nearest-neighbor or bilinear reconstruction (decompress)",
      "PSNR quality report",
    ],
    contribution: [
      "Implemented the recursive 2×2 block-averaging compressor and both reconstruction modes",
      "Built the PSNR quality-loss reporting",
      "Built the Python CLI (pyramid_compress.py, using Pillow + NumPy)",
      "Built the drag-and-drop web app and landing page, running entirely client-side",
    ],
    results:
      "CLI and web app both run fully offline / client-side — no images ever leave the device. PSNR reporting shows the exact quality cost at each compression level.",
  },
  {
    id: "gan-loss-landscape",
    name: "GAN Loss Landscape",
    description:
      "Visualizes the loss landscape of a trained GAN by perturbing its parameters along two random directions and plotting the resulting surface — 2D contour maps, 3D meshes, and 1D slices — at adjustable grid resolutions, to see how flat or sharp the learned minima actually are.",
    tags: ["Python", "PyTorch", "Matplotlib"],
    url: "https://github.com/Aravkataria/GAN-loss-landscape-visualization",
    status: "research",
    statusLabel: "Research",
    what:
      "Visualizes the loss landscape of a trained GAN by perturbing its parameters along two random directions and plotting the resulting surface at adjustable grid resolutions.",
    why:
      "Built to see how flat or sharp a GAN's learned minima actually are — visualizing the loss surface directly, instead of only watching the loss number move during training.",
    how: [
      "Trained GAN checkpoint",
      "Two random parameter perturbation directions",
      "Loss evaluated across a parameter grid",
      "2D contour map / 3D mesh / 1D slice",
    ],
    contribution: [
      "Implemented the parameter-perturbation sampling along two random directions",
      "Built the loss-surface evaluation across adjustable grid resolutions",
      "Built the 2D contour, 3D mesh, and 1D slice visualizations in Matplotlib",
    ],
    results:
      "Produces 2D contour maps, 3D meshes, and 1D slices of the loss surface at adjustable grid resolutions.",
  },
];

const SKILLS = [
  "Python", "JavaScript", "C++", "HTML / CSS",
  "FastAPI", "Streamlit", "PyTorch", "sklearn", "NumPy", "Pillow", "Streamlit",
  "Arduino / ESP32", "Embedded Systems", "Git & GitHub", "IOT", 
];

/* =====================================================================
   Below this line: rendering + background animation.
   No need to edit unless you want to change behavior.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Each step runs independently — if one throws, it's logged to the
  // console but every other feature (projects, skills, background,
  // nav) still initializes instead of the whole page going dark.
  safeRun("wireProfileLinks", wireProfileLinks);
  safeRun("renderProjects", renderProjects);
  safeRun("renderSkills", renderSkills);
  safeRun("setYear", setYear);
  safeRun("setupDockScrollSpy", setupDockScrollSpy);
  safeRun("setupMessageForm", setupMessageForm);
  safeRun("setupThemeToggle", setupThemeToggle);
  safeRun("setupProjectDetail", setupProjectDetail);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    safeRun("initBackground", initBackground);
  }
});

// Tries the real WebGL fluid simulation first (best look — actual swirling
// fluid dynamics). If WebGL2 or the float-texture extensions it needs
// aren't available, or setup fails for any reason, it falls back to the
// canvas 2D ink-drop system, which is fully self-contained and proven.
function initBackground() {
  const canvas = document.getElementById("paintCanvas");
  if (!canvas) return;

  let usedFluidSim = false;
  try {
    usedFluidSim = setupFluidBackground(canvas);
  } catch (err) {
    console.error("[portfolio] WebGL fluid background failed, falling back to canvas:", err);
    usedFluidSim = false;
  }

  if (!usedFluidSim) {
    setupPaintCanvas(canvas);
  }
}

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
    <article class="project-card" data-project-id="${p.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="View details for ${escapeHtml(p.name)}">
      <div class="project-card-top">
        <h3>${escapeHtml(p.name)}</h3>
        <a class="project-card-link" href="${p.url}" target="_blank" rel="noopener" aria-label="Open ${escapeHtml(p.name)} on GitHub" data-pd-stop>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <p>${escapeHtml(p.description)}</p>
      <div class="project-card-meta">
        <span class="project-status" data-status="${p.status}">
          <span class="project-status-dot"></span>${escapeHtml(p.statusLabel)}
        </span>
        ${
          p.demo
            ? `<a class="project-demo-btn" href="${p.demo}" target="_blank" rel="noopener" aria-label="Open live demo of ${escapeHtml(p.name)}" data-pd-stop>
                Try Demo
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>`
            : ""
        }
      </div>
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
   Project detail overlay
   Clicking a project card's body (not the GitHub icon or Try Demo
   button — those keep navigating directly) opens a full case-study
   view built from the PROJECTS data above. One overlay in the DOM,
   reused for every project; content is injected on open.
--------------------------------------------------------------------- */
function setupProjectDetail() {
  const grid = document.getElementById("projectGrid");
  const overlay = document.getElementById("pdOverlay");
  const panel = document.getElementById("pdPanel");
  const scrollEl = document.getElementById("pdScroll");
  const closeBtn = document.getElementById("pdClose");
  if (!grid || !overlay || !panel || !scrollEl || !closeBtn) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let activeProject = null;
  let triggerEl = null;
  let stopScrollMotion = null;

  function openProject(project, fromEl) {
    if (!project) return;
    activeProject = project;
    triggerEl = fromEl || null;

    renderProjectDetail(project);

    // Anchor the panel's scale/opacity transform to roughly where the
    // clicked card sits, so the window reads as expanding from the
    // card rather than appearing from nowhere.
    if (fromEl && !reduceMotion) {
      const r = fromEl.getBoundingClientRect();
      const originX = ((r.left + r.width / 2) / window.innerWidth) * 100;
      const originY = ((r.top + r.height / 2) / window.innerHeight) * 100;
      panel.style.setProperty("--pd-origin-x", `${originX}%`);
      panel.style.setProperty("--pd-origin-y", `${originY}%`);
    } else {
      panel.style.removeProperty("--pd-origin-x");
      panel.style.removeProperty("--pd-origin-y");
    }

    overlay.removeAttribute("aria-hidden");
    overlay.classList.add("is-open");
    document.documentElement.classList.add("pd-scroll-lock");
    scrollEl.scrollTop = 0;

    // Focus moves into the window; Escape/outside-click/close button
    // all route back through closeProject.
    closeBtn.focus();
    document.addEventListener("keydown", handleKeydown, true);

    //if (!reduceMotion) {
     // stopScrollMotion = setupProjectDetailScrollMotion(scrollEl);
    //}
  }

  function closeProject() {
    if (!overlay.classList.contains("is-open")) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("pd-scroll-lock");
    document.removeEventListener("keydown", handleKeydown, true);

    if (stopScrollMotion) {
      stopScrollMotion();
      stopScrollMotion = null;
    }

    if (triggerEl && document.contains(triggerEl)) {
      triggerEl.focus();
    }
    activeProject = null;
    triggerEl = null;
  }

  function handleKeydown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeProject();
      return;
    }
    if (e.key === "Tab") {
      trapFocus(e, panel);
    }
  }

  // Card interactions: click anywhere on the card body opens the
  // detail window, except on elements marked data-pd-stop (the GitHub
  // icon and Try Demo button), which keep navigating directly.
  grid.addEventListener("click", (e) => {
    if (e.target.closest("[data-pd-stop]")) return;
    const card = e.target.closest(".project-card");
    if (!card) return;
    const project = PROJECTS.find((p) => p.id === card.dataset.projectId);
    openProject(project, card);
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    if (e.target.closest("[data-pd-stop]")) return;
    const card = e.target.closest(".project-card");
    if (!card || e.target !== card) return; // let nested links handle their own Enter
    e.preventDefault();
    const project = PROJECTS.find((p) => p.id === card.dataset.projectId);
    openProject(project, card);
  });

  closeBtn.addEventListener("click", closeProject);
  overlay.querySelectorAll("[data-pd-close]").forEach((el) => {
    el.addEventListener("click", closeProject);
  });
}

function trapFocus(e, panel) {
  const focusable = panel.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function renderProjectDetail(p) {
  document.getElementById("pdTitle").textContent = p.name;
  document.getElementById("pdDesc").textContent = p.description;
  document.getElementById("pdStatus").setAttribute("data-status", p.status);
  document.getElementById("pdStatusLabel").textContent = p.statusLabel;

  document.getElementById("pdTech").innerHTML = p.tags
    .map((t) => `<span>${escapeHtml(t)}</span>`)
    .join("");

  document.getElementById("pdWhat").innerHTML = `<p>${escapeHtml(p.what)}</p>`;
  document.getElementById("pdWhy").innerHTML = `<p>${escapeHtml(p.why)}</p>`;
  document.getElementById("pdResults").innerHTML = `<p>${escapeHtml(p.results)}</p>`;

  document.getElementById("pdHow").innerHTML = p.how
    .map(
      (step, i) =>
        `<div class="pd-flow-step">${escapeHtml(step)}</div>` +
        (i < p.how.length - 1 ? `<div class="pd-flow-arrow" aria-hidden="true">↓</div>` : "")
    )
    .join("");

  document.getElementById("pdContribution").innerHTML = p.contribution
    .map((c) => `<li>${escapeHtml(c)}</li>`)
    .join("");

  const actions = [];
  if (p.demo) {
    actions.push(
      `<a class="btn btn--primary" href="${p.demo}" target="_blank" rel="noopener">Try Demo
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>`
    );
  }
  actions.push(
    `<a class="btn btn--ghost" href="${p.url}" target="_blank" rel="noopener">View GitHub
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>`
  );
  if (p.docs) {
    actions.push(
      `<a class="btn btn--ghost" href="${p.docs}" target="_blank" rel="noopener">View Documentation
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>`
    );
  }
  document.getElementById("pdActions").innerHTML = actions.join("");
}

// As the visitor scrolls through the project window, sections fade
// and shift slightly based on distance from a focus band near the
// top of the viewport — passed sections drift up and fade, upcoming
// ones sit low and dim, so the currently-read section stays the
// clear visual focus.
//
// Performance: section positions relative to the scroll container
// don't change while scrolling — only scrollTop does — so layout is
// measured once (on open + on resize) and cached. Each scroll frame
// then does pure arithmetic against that cache and writes styles,
// with no DOM reads in between. Reading layout (getBoundingClientRect)
// and writing styles in the same per-element loop, every frame, was
// the earlier version of this function and forced a synchronous
// layout recalculation on every element on every frame — the actual
// cause of the scroll feeling laggy, especially on slower devices.
function setupProjectDetailScrollMotion(scrollEl) {
  const sections = Array.from(scrollEl.querySelectorAll("[data-pd-section]"));
  if (!sections.length) return null;

  let layout = [];
  let viewportHeight = 0;
  let ticking = false;

  function measure() {
    const scrollTop = scrollEl.scrollTop;
    const containerTop = scrollEl.getBoundingClientRect().top;
    viewportHeight = scrollEl.clientHeight;
    
    layout = sections.map((sec) => {
      const r = sec.getBoundingClientRect();
      const top = r.top - containerTop + scrollTop;
      return { el: sec, top: top, height: r.height };
    });
  }

  function update() {
    ticking = false;
    
    // Batch these reads at the top so we don't cause layout thrashing
    const scrollTop = scrollEl.scrollTop;
    const scrollHeight = scrollEl.scrollHeight;
    const maxScrollTop = Math.max(0, scrollHeight - viewportHeight);

    layout.forEach(({ el, top, height }) => {
      const centerAbsolute = top + height / 2;
      
      // Where does this section sit when scrolled to the absolute top vs absolute bottom?
      // (Represented as a percentage of the viewport height, 0.0 to 1.0+)
      const maxT = centerAbsolute / viewportHeight; 
      const minT = (centerAbsolute - maxScrollTop) / viewportHeight;

      // The standard safe zone is the middle third (0.33 to 0.67).
      // If a section is trapped at the top or bottom and can't reach the middle, 
      // we dynamically expand its safe zone so it doesn't fade while parked at the edge.
      const safeTop = Math.min(0.33, maxT);
      const safeBottom = Math.max(0.67, minT);

      // Where is it right now?
      const currentT = (centerAbsolute - scrollTop) / viewportHeight;

      let opacity = 1;
      let translate = 0;

      if (currentT < safeTop) {
        // Moving UP out of its safe zone
        const distance = safeTop - currentT;
        const fadeRatio = Math.min(1, distance / 0.33); // Fades out over 33% of the screen
        opacity = 1 - (fadeRatio * 0.68); // Drops to 0.32 max
        translate = -(fadeRatio * 22);
      } else if (currentT > safeBottom) {
        // Moving DOWN out of its safe zone
        const distance = currentT - safeBottom;
        const fadeRatio = Math.min(1, distance / 0.33);
        opacity = 1 - (fadeRatio * 0.68);
        translate = (fadeRatio * 22);
      }

      el.style.opacity = opacity.toFixed(3);
      el.style.transform = `translateY(${translate.toFixed(1)}px)`;
    });
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function onResize() {
    measure();
    update();
  }

  measure();
  update();
  scrollEl.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });

  return function stop() {
    scrollEl.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    layout.forEach(({ el }) => {
      el.style.opacity = "";
      el.style.transform = "";
    });
  };
}

/* ---------------------------------------------------------------------
   Message form — sends straight to PROFILE.email via FormSubmit
   (formsubmit.co), a free no-signup email-forwarding service. No
   backend of your own required. See the NOTE near PROFILE at the top
   of this file about the one-time confirmation email.
--------------------------------------------------------------------- */
function setupMessageForm() {
  const form = document.getElementById("messageForm");
  if (!form) return;

  const status = document.getElementById("messageFormStatus");
  const submitBtn = document.getElementById("messageFormSubmit");
  const nameEl = document.getElementById("msgName");
  const emailEl = document.getElementById("msgEmail");
  const messageEl = document.getElementById("msgMessage");
  const honeyEl = form.querySelector('[name="_honey"]');

  function setStatus(text, state) {
    status.textContent = text;
    if (state) status.setAttribute("data-state", state);
    else status.removeAttribute("data-state");
  }

  function mailtoFallbackLink(name, email, message) {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const message = messageEl.value.trim();

    // Honeypot: real visitors never fill this in. If it's filled,
    // pretend to succeed without actually sending anything.
    if (honeyEl && honeyEl.value) {
      form.reset();
      setStatus("Message sent — thanks!", "success");
      return;
    }

    submitBtn.disabled = true;
    const originalLabel = submitBtn.querySelector(".btn--send-label").textContent;
    submitBtn.querySelector(".btn--send-label").textContent = "Sending…";
    setStatus("");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(PROFILE.email)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name}`,
        }),
      });

      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);

      form.reset();
      setStatus("Message sent — thanks, I'll get back to you.", "success");
    } catch (err) {
      console.error("[portfolio] message form send failed:", err);
      const fallback = mailtoFallbackLink(name, email, message);
      status.innerHTML =
        `Couldn't send automatically. ` +
        `<a href="${fallback}">Click here to email me directly</a> — your message is filled in.`;
      status.setAttribute("data-state", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector(".btn--send-label").textContent = originalLabel;
    }
  });
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
   Moving the mouse drops "ink" that blooms outward for ~1.2s then
   lingers and slowly fades over ~10s. Stop moving and everything
   already on screen finishes fading out on its own, back to white.
   The canvas itself is CSS-blurred + multiply-blended (see style.css)
   so overlapping drops mix like real pigment instead of stacking flat.
--------------------------------------------------------------------- */
/* ---------------------------------------------------------------------
   WebGL fluid simulation background
   A real Navier–Stokes fluid solver (advection, pressure projection,
   vorticity confinement) running on the GPU. Moving the mouse injects
   velocity + color ("dye") into the fluid; it naturally swirls, curls,
   and dissipates back to nothing on its own — no hand-timed fade logic
   needed, the physics does it. Dye is stored as "ink absorbed from
   white paper" (see the display shader) so it composites correctly
   against the page's white background without extra blend tricks.

   Returns true if it successfully took over the canvas, false if this
   browser/GPU can't support it — the caller falls back to the canvas
   2D version in that case.
--------------------------------------------------------------------- */
function setupFluidBackground(originalCanvas) {
  const glCanvas = document.createElement("canvas");
  glCanvas.className = "paint-canvas paint-canvas--gl";
  glCanvas.id = originalCanvas.id;
  glCanvas.setAttribute("aria-hidden", "true");

  const gl = glCanvas.getContext("webgl2", {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: false,
  });
  if (!gl) return false;

  const floatExt = gl.getExtension("EXT_color_buffer_float");
  const halfFloatExt = !floatExt && gl.getExtension("EXT_color_buffer_half_float");
  if (!floatExt && !halfFloatExt) return false;
  const texType = floatExt ? gl.FLOAT : gl.HALF_FLOAT;
  const internalFormat = floatExt ? gl.RGBA32F : gl.RGBA16F; // must match texType or texImage2D is invalid
  const linearExt =
    gl.getExtension("OES_texture_float_linear") || gl.getExtension("OES_texture_half_float_linear");
  const filtering = linearExt ? gl.LINEAR : gl.NEAREST;

  // --- config -----------------------------------------------------------
  const SIM_RESOLUTION = 128;
  const DYE_RESOLUTION = 640;
  const DENSITY_DISSIPATION = 1.05; // dye fade rate — settles to white in a handful of seconds once idle
  const VELOCITY_DISSIPATION = 0.4; // how quickly motion itself settles
  const PRESSURE_DISSIPATION = 0.8;
  const PRESSURE_ITERATIONS = 20;
  const CURL = 22; // swirliness
  const SPLAT_RADIUS = 0.22;
  const SPLAT_FORCE = 4200;
  const MAX_ABSORPTION = 0.78; // hard cap — background can never get darker than this, so text stays readable
  const DYE_STRENGTH = 0.55; // scales how much color a single splat injects
  const MIN_SPLAT_INTERVAL_MS = 40; // floor on how often mouse movement can inject color, even moving fast

  const COLOR_HOLD_MS = 6000;
  const COLOR_TRANSITION_MS = 2200;
  const PALETTE = [
    [168 / 255, 138 / 255, 247 / 255], // violet
    [247 / 255, 150 / 255, 201 / 255], // pink
    [120 / 255, 224 / 255, 181 / 255], // green
    [140 / 255, 180 / 255, 247 / 255], // blue
    [250 / 255, 178 / 255, 130 / 255], // coral
  ];

  // --- shader helpers -----------------------------------------------------
  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const info = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error("Shader compile error: " + info);
    }
    return shader;
  }

  function createProgram(vsSource, fsSource) {
    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const info = gl.getProgramInfoLog(program);
      throw new Error("Program link error: " + info);
    }
    const uniforms = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(program, i);
      uniforms[info.name] = gl.getUniformLocation(program, info.name);
    }
    return { program, uniforms };
  }

  const baseVertexShader = `#version 300 es
    precision highp float;
    layout(location = 0) in vec2 aPosition;
    out vec2 vUv;
    out vec2 vL;
    out vec2 vR;
    out vec2 vT;
    out vec2 vB;
    uniform vec2 texelSize;
    void main () {
      vUv = aPosition * 0.5 + 0.5;
      vL = vUv - vec2(texelSize.x, 0.0);
      vR = vUv + vec2(texelSize.x, 0.0);
      vT = vUv + vec2(0.0, texelSize.y);
      vB = vUv - vec2(0.0, texelSize.y);
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  function frag(body) {
    return `#version 300 es
      precision highp float;
      precision highp sampler2D;
      in vec2 vUv;
      in vec2 vL;
      in vec2 vR;
      in vec2 vT;
      in vec2 vB;
      out vec4 fragColor;
      ${body}
    `;
  }

  const splatProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      void main () {
        vec2 p = vUv - point;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture(uTarget, vUv).xyz;
        fragColor = vec4(base + splat, 1.0);
      }
    `)
  );

  // Same as splatProgram, but hard-caps how much color/absorption can
  // accumulate. Used only for dye (never velocity) so fast or repeated
  // mouse movement can tint the background richly but can never push
  // it all the way to black and swallow the text sitting on top of it.
  const splatDyeProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      uniform float maxAbsorption;
      void main () {
        vec2 p = vUv - point;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture(uTarget, vUv).xyz;
        fragColor = vec4(clamp(base + splat, 0.0, maxAbsorption), 1.0);
      }
    `)
  );

  const advectionProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt;
      uniform float dissipation;
      void main () {
        vec2 coord = vUv - dt * texture(uVelocity, vUv).xy * texelSize;
        vec4 result = texture(uSource, coord);
        float decay = 1.0 + dissipation * dt;
        fragColor = result / decay;
      }
    `)
  );

  // Same as advectionProgram, but clamps the transported value. Applied
  // only to the dye field each frame so the cap enforced at splat time
  // holds over time too, not just at the instant of a splat.
  const advectionDyeProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt;
      uniform float dissipation;
      uniform float maxAbsorption;
      void main () {
        vec2 coord = vUv - dt * texture(uVelocity, vUv).xy * texelSize;
        vec4 result = texture(uSource, coord);
        float decay = 1.0 + dissipation * dt;
        fragColor = vec4(clamp((result / decay).rgb, 0.0, maxAbsorption), 1.0);
      }
    `)
  );

  const divergenceProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uVelocity;
      void main () {
        float L = texture(uVelocity, vL).x;
        float R = texture(uVelocity, vR).x;
        float T = texture(uVelocity, vT).y;
        float B = texture(uVelocity, vB).y;
        vec2 C = texture(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        fragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `)
  );

  const curlProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uVelocity;
      void main () {
        float L = texture(uVelocity, vL).y;
        float R = texture(uVelocity, vR).y;
        float T = texture(uVelocity, vT).x;
        float B = texture(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        fragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `)
  );

  const vorticityProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;
      void main () {
        float L = texture(uCurl, vL).x;
        float R = texture(uCurl, vR).x;
        float T = texture(uCurl, vT).x;
        float B = texture(uCurl, vB).x;
        float C = texture(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 vel = texture(uVelocity, vUv).xy;
        fragColor = vec4(vel + force * dt, 0.0, 1.0);
      }
    `)
  );

  const pressureProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      void main () {
        float L = texture(uPressure, vL).x;
        float R = texture(uPressure, vR).x;
        float T = texture(uPressure, vT).x;
        float B = texture(uPressure, vB).x;
        float divergence = texture(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        fragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `)
  );

  const gradientSubtractProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture(uPressure, vL).x;
        float R = texture(uPressure, vR).x;
        float T = texture(uPressure, vT).x;
        float B = texture(uPressure, vB).x;
        vec2 velocity = texture(uVelocity, vUv).xy;
        velocity -= vec2(R - L, T - B);
        fragColor = vec4(velocity, 0.0, 1.0);
      }
    `)
  );

  const clearProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uTexture;
      uniform float value;
      void main () {
        fragColor = value * texture(uTexture, vUv);
      }
    `)
  );

  // White-paper display: the "dye" texture stores light absorbed per
  // channel, so the visible color is simply what's left of white.
  const displayProgram = createProgram(
    baseVertexShader,
    frag(`
      uniform sampler2D uTexture;
      void main () {
        vec3 absorption = texture(uTexture, vUv).rgb;
        vec3 color = clamp(vec3(1.0) - absorption, 0.0, 1.0);
        fragColor = vec4(color, 1.0);
      }
    `)
  );

  // --- fullscreen quad -----------------------------------------------------
  const quadVAO = gl.createVertexArray();
  gl.bindVertexArray(quadVAO);
  const quadBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const elemBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elemBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 2, 1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.bindVertexArray(null);

  function blit(target) {
    if (target == null) {
      gl.viewport(0, 0, glCanvas.width, glCanvas.height);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    } else {
      gl.viewport(0, 0, target.width, target.height);
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
    }
    gl.bindVertexArray(quadVAO);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  }

  // --- framebuffers -----------------------------------------------------
  function createFBO(w, h) {
    gl.activeTexture(gl.TEXTURE0);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filtering);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filtering);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, gl.RGBA, texType, null);

    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (status !== gl.FRAMEBUFFER_COMPLETE) {
      throw new Error("Incomplete framebuffer: " + status);
    }
    gl.viewport(0, 0, w, h);
    gl.clear(gl.COLOR_BUFFER_BIT);

    return {
      texture,
      fbo,
      width: w,
      height: h,
      attach(id) {
        gl.activeTexture(gl.TEXTURE0 + id);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        return id;
      },
    };
  }

  function createDoubleFBO(w, h) {
    let fbo1 = createFBO(w, h);
    let fbo2 = createFBO(w, h);
    return {
      width: w,
      height: h,
      get read() {
        return fbo1;
      },
      get write() {
        return fbo2;
      },
      swap() {
        const temp = fbo1;
        fbo1 = fbo2;
        fbo2 = temp;
      },
    };
  }

  function getResolution(resolution) {
    const aspect = glCanvas.width / glCanvas.height;
    const aspectInv = aspect < 1 ? 1 / aspect : aspect;
    const min = Math.round(resolution);
    const max = Math.round(resolution * aspectInv);
    return glCanvas.width > glCanvas.height ? { width: max, height: min } : { width: min, height: max };
  }

  let dye, velocity, divergenceFBO, curlFBO, pressure;

  function initFramebuffers() {
    const simRes = getResolution(SIM_RESOLUTION);
    const dyeRes = getResolution(DYE_RESOLUTION);
    dye = createDoubleFBO(dyeRes.width, dyeRes.height);
    velocity = createDoubleFBO(simRes.width, simRes.height);
    divergenceFBO = createFBO(simRes.width, simRes.height);
    curlFBO = createFBO(simRes.width, simRes.height);
    pressure = createDoubleFBO(simRes.width, simRes.height);
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const w = Math.round(window.innerWidth * dpr);
    const h = Math.round(window.innerHeight * dpr);
    if (glCanvas.width !== w || glCanvas.height !== h) {
      glCanvas.width = w;
      glCanvas.height = h;
      initFramebuffers();
    }
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // --- color cycle (shared "one color in charge at a time" behavior) -----
  let colorOrder = shufflePalette();
  let colorCycleStart = performance.now();
  let colorCursor = 0;

  function shufflePalette() {
    const a = PALETTE.map((_, i) => i);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function lerpColor(c1, c2, t) {
    return [c1[0] + (c2[0] - c1[0]) * t, c1[1] + (c2[1] - c1[1]) * t, c1[2] + (c2[2] - c1[2]) * t];
  }

  function currentDisplayColor(now) {
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
    return lerpColor(from, to, (elapsed - COLOR_HOLD_MS) / COLOR_TRANSITION_MS);
  }

  // --- splatting -----------------------------------------------------
  function splat(x, y, dx, dy, color) {
    gl.useProgram(splatProgram.program);
    gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
    gl.uniform1f(splatProgram.uniforms.aspectRatio, glCanvas.width / glCanvas.height);
    gl.uniform2f(splatProgram.uniforms.point, x, y);
    gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
    gl.uniform1f(splatProgram.uniforms.radius, SPLAT_RADIUS / 100.0);
    blit(velocity.write);
    velocity.swap();

    // dye stores absorption = (white - color) * strength, so displaying
    // it as 1 - absorption later reproduces a tint of the intended
    // pastel color. Clamped so no amount of overlapping/fast movement
    // can push it toward black and swallow the text on top of it.
    gl.useProgram(splatDyeProgram.program);
    gl.uniform1i(splatDyeProgram.uniforms.uTarget, dye.read.attach(0));
    gl.uniform1f(splatDyeProgram.uniforms.aspectRatio, glCanvas.width / glCanvas.height);
    gl.uniform2f(splatDyeProgram.uniforms.point, x, y);
    gl.uniform3f(
      splatDyeProgram.uniforms.color,
      (1.0 - color[0]) * DYE_STRENGTH,
      (1.0 - color[1]) * DYE_STRENGTH,
      (1.0 - color[2]) * DYE_STRENGTH
    );
    gl.uniform1f(splatDyeProgram.uniforms.radius, SPLAT_RADIUS / 100.0);
    gl.uniform1f(splatDyeProgram.uniforms.maxAbsorption, MAX_ABSORPTION);
    blit(dye.write);
    dye.swap();
  }

  let pointer = { x: 0, y: 0, lastX: 0, lastY: 0, moved: false, down: false };
  let lastSplatAt = 0;

  function toSimCoords(clientX, clientY) {
    const rect = glCanvas.getBoundingClientRect();
    return {
      x: (clientX - rect.left) / rect.width,
      y: 1.0 - (clientY - rect.top) / rect.height,
    };
  }

  function onPointerMove(clientX, clientY) {
    const p = toSimCoords(clientX, clientY);
    if (!pointer.down) {
      pointer.lastX = p.x;
      pointer.lastY = p.y;
      pointer.down = true;
      return;
    }
    const dx = (p.x - pointer.lastX) * SPLAT_FORCE;
    const dy = (p.y - pointer.lastY) * SPLAT_FORCE;
    pointer.lastX = p.x;
    pointer.lastY = p.y;
    if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;

    // Throttle: without this, fast mouse movement fires a splat on
    // nearly every mousemove event (often 60-100+/sec), which piles up
    // color far faster than intended regardless of any single-splat cap.
    const now = performance.now();
    if (now - lastSplatAt < MIN_SPLAT_INTERVAL_MS) return;
    lastSplatAt = now;

    splat(p.x, p.y, dx, dy, currentDisplayColor(now));
  }

  window.addEventListener(
    "mousemove",
    (e) => onPointerMove(e.clientX, e.clientY),
    { passive: true }
  );
  window.addEventListener(
    "touchmove",
    (e) => {
      const t = e.touches[0];
      if (t) onPointerMove(t.clientX, t.clientY);
    },
    { passive: true }
  );
  window.addEventListener("mouseleave", () => {
    pointer.down = false;
  });

  // --- main loop -----------------------------------------------------
  let lastTime = performance.now();

  function step(dt) {
    gl.disable(gl.BLEND);

    gl.viewport(0, 0, velocity.width, velocity.height);

    gl.useProgram(curlProgram.program);
    gl.uniform2f(curlProgram.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(curlFBO);

    gl.useProgram(vorticityProgram.program);
    gl.uniform2f(vorticityProgram.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(vorticityProgram.uniforms.uCurl, curlFBO.attach(1));
    gl.uniform1f(vorticityProgram.uniforms.curl, CURL);
    gl.uniform1f(vorticityProgram.uniforms.dt, dt);
    blit(velocity.write);
    velocity.swap();

    gl.useProgram(divergenceProgram.program);
    gl.uniform2f(divergenceProgram.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(divergenceFBO);

    gl.useProgram(clearProgram.program);
    gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
    gl.uniform1f(clearProgram.uniforms.value, PRESSURE_DISSIPATION);
    blit(pressure.write);
    pressure.swap();

    gl.useProgram(pressureProgram.program);
    gl.uniform2f(pressureProgram.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(pressureProgram.uniforms.uDivergence, divergenceFBO.attach(0));
    for (let i = 0; i < PRESSURE_ITERATIONS; i++) {
      gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
      blit(pressure.write);
      pressure.swap();
    }

    gl.useProgram(gradientSubtractProgram.program);
    gl.uniform2f(gradientSubtractProgram.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(gradientSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
    gl.uniform1i(gradientSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
    blit(velocity.write);
    velocity.swap();

    gl.useProgram(advectionProgram.program);
    gl.uniform2f(advectionProgram.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(advectionProgram.uniforms.uSource, velocity.read.attach(0));
    gl.uniform1f(advectionProgram.uniforms.dt, dt);
    gl.uniform1f(advectionProgram.uniforms.dissipation, VELOCITY_DISSIPATION);
    blit(velocity.write);
    velocity.swap();

    gl.viewport(0, 0, dye.width, dye.height);
    gl.useProgram(advectionDyeProgram.program);
    gl.uniform2f(advectionDyeProgram.uniforms.texelSize, 1.0 / velocity.width, 1.0 / velocity.height);
    gl.uniform1i(advectionDyeProgram.uniforms.uVelocity, velocity.read.attach(0));
    gl.uniform1i(advectionDyeProgram.uniforms.uSource, dye.read.attach(1));
    gl.uniform1f(advectionDyeProgram.uniforms.dt, dt);
    gl.uniform1f(advectionDyeProgram.uniforms.dissipation, DENSITY_DISSIPATION);
    gl.uniform1f(advectionDyeProgram.uniforms.maxAbsorption, MAX_ABSORPTION);
    blit(dye.write);
    dye.swap();
  }

  function render() {
    gl.useProgram(displayProgram.program);
    gl.uniform1i(displayProgram.uniforms.uTexture, dye.read.attach(0));
    blit(null);
  }

  function frame(now) {
    const dt = Math.min((now - lastTime) / 1000, 1 / 30);
    lastTime = now;
    step(dt);
    render();
    requestAnimationFrame(frame);
  }

  // Everything above ran without throwing, so this browser/GPU can
  // actually do it — commit to swapping the canvas into the page.
  originalCanvas.replaceWith(glCanvas);
  requestAnimationFrame(frame);
  return true;
}

/* ---------------------------------------------------------------------
   Theme toggle (light / dark)
   Only swaps CSS custom properties via the data-theme attribute — no
   other behavior on the page changes. Preference is saved so it
   sticks across visits; the inline snippet in <head> applies it
   before first paint to avoid a flash of the wrong theme.
--------------------------------------------------------------------- */
function setupThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const root = document.documentElement;

  function isDark() {
    return root.getAttribute("data-theme") === "dark";
  }

  function apply(dark) {
    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    btn.setAttribute("aria-pressed", String(dark));
  }

  // Sync the button's a11y state with whatever the inline <head>
  // script already applied before this ran.
  apply(isDark());

  btn.addEventListener("click", () => {
    const dark = !isDark();
    apply(dark); // always runs, so the toggle visibly works even if storage is blocked
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (err) {
      console.error("[portfolio] couldn't save theme preference:", err);
    }
  });

  // If the person never explicitly chose on this site, keep following
  // the OS-level preference live.
  if (window.matchMedia) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        let explicit = null;
        try {
          explicit = localStorage.getItem("theme");
        } catch (err) {
          /* storage blocked — just follow the OS preference */
        }
        if (explicit) return; // explicit choice wins
        apply(e.matches);
      });
  }
}

function setupPaintCanvas(canvasArg) {
  const canvas = canvasArg || document.getElementById("paintCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const DROP_LIFETIME_MS = 10000; // total time a drop takes to fully vanish
  const SPREAD_MS = 1400; // time to reach full bloom radius
  const MIN_MOVE_DIST = 38; // px the pointer must travel before a new drop spawns
  const MIN_SPAWN_INTERVAL_MS = 130; // floor on how often drops can land, even if flicked fast
  const MAX_ACTIVE_DROPS = 55; // safety cap so a fast flick can't flood the canvas
  const BASE_ALPHA = 0.4; // visible, but still meant to tint rather than cover

  const COLOR_HOLD_MS = 6000; // how long a color stays in charge before shifting
  const COLOR_TRANSITION_MS = 2200; // how long the slow crossfade to the next color takes

  // Soft, not neon — but with enough saturation to actually read against white.
  const PALETTE = [
    [168, 138, 247],  // violet
    [247, 150, 201],  // pink
    [120, 224, 181],  // green
    [140, 180, 247],  // blue
    [250, 178, 130],  // coral
  ];

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let drops = [];
  let lastX = null, lastY = null, lastSpawnAt = 0;

  // Persistent color cycle: every drop born "now" reads the same slowly
  // shifting color, instead of each drop rolling its own random one.
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
      const alpha = BASE_ALPHA * Math.pow(1 - fadeP, 1.6); // lingers, then fades slowly

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
