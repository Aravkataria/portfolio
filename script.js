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
/* ---------------------------------------------------------------------
   WebGL Ping-Pong Fluid Ink Simulation
--------------------------------------------------------------------- */
function setupPaintCanvas() {
  const canvas = document.getElementById("paintCanvas");
  if (!canvas) return;

  const gl = canvas.getContext("webgl", { antialias: false, alpha: true });
  if (!gl) {
    console.warn("WebGL not supported. Fluid background disabled.");
    return;
  }

  // --- Shaders ---
  const vertexShaderSrc = `
    attribute vec2 a_position;
    varying vec2 v_uv;
    void main() {
      v_uv = a_position * 0.5 + 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // The main simulation shader: handles ink fading, spreading, and mouse splats
  const fragmentShaderSrc = `
    precision highp float;
    varying vec2 v_uv;
    uniform sampler2D u_texture;
    uniform vec2 u_mouse;
    uniform vec2 u_velocity;
    uniform float u_aspect;
    uniform vec3 u_color;
    uniform float u_splatActive;

    void main() {
      vec2 uv = v_uv;

      // 1. Fluid Advection (Expansion and Swirl)
      // Slightly push the ink outwards from the center and warp it
      vec2 warp = uv - 0.5;
      vec2 advected_uv = uv - warp * 0.003 - u_velocity * 0.001;
      vec4 prev = texture2D(u_texture, advected_uv);
      
      // Fade ink out slowly
      prev.a *= 0.96; 
      prev.rgb *= 0.98;

      // 2. Mouse Splat (Adding new ink)
      vec2 d = uv - u_mouse;
      d.x *= u_aspect;
      float dist = length(d);
      
      // Smooth, soft brush
      float splat = exp(-dist * dist * 400.0) * u_splatActive;
      vec4 newColor = vec4(u_color * splat, splat);

      // Blend previous frame with new splat
      gl_FragColor = prev + newColor;
    }
  `;

  const displayShaderSrc = `
    precision highp float;
    varying vec2 v_uv;
    uniform sampler2D u_texture;
    void main() {
      vec4 color = texture2D(u_texture, v_uv);
      // Ensure it outputs smoothly to the transparent canvas
      gl_FragColor = color;
    }
  `;

  // --- WebGL Helpers ---
  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  }

  function createProgram(vsSrc, fsSrc) {
    const vs = compileShader(gl.VERTEX_SHADER, vsSrc);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSrc);
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    return prog;
  }

  const simProgram = createProgram(vertexShaderSrc, fragmentShaderSrc);
  const displayProgram = createProgram(vertexShaderSrc, displayShaderSrc);

  // --- Geometry ---
  // A simple quad that covers the entire screen
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,  1, -1,  -1,  1,
    -1,  1,  1, -1,   1,  1
  ]), gl.STATIC_DRAW);

  // --- Framebuffers (Ping-Pong Setup) ---
  function createFBO(w, h) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    return { fbo, texture };
  }

  let fboA, fboB;
  let width, height;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth * dpr;
    height = window.innerHeight * dpr;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);

    fboA = createFBO(width, height);
    fboB = createFBO(width, height);
  }
  resize();
  window.addEventListener("resize", resize);

  // --- Interaction State ---
  let mouse = { x: -1, y: -1, vx: 0, vy: 0, active: 0 };
  let lastMouse = { x: -1, y: -1 };
  
  // Pastel fluid palette
  const PALETTE = [
    [185/255, 164/255, 247/255], // Violet
    [248/255, 180/255, 217/255], // Pink
    [155/255, 232/255, 201/255], // Mint
    [169/255, 199/255, 247/255], // Blue
    [251/255, 200/255, 163/255], // Coral
  ];
  let colorIndex = 0;
  let currentColor = PALETTE[0];

  function handleMove(clientX, clientY) {
    const x = clientX / window.innerWidth;
    const y = 1.0 - (clientY / window.innerHeight); // WebGL Y is flipped
    
    if (lastMouse.x !== -1) {
      mouse.vx = x - lastMouse.x;
      mouse.vy = y - lastMouse.y;
      
      // Cycle colors if mouse moves fast enough
      if (Math.hypot(mouse.vx, mouse.vy) > 0.01) {
        colorIndex = (colorIndex + 1) % (PALETTE.length * 10);
        currentColor = PALETTE[Math.floor(colorIndex / 10)];
      }
    }

    mouse.x = x;
    mouse.y = y;
    mouse.active = 1.0;
    
    lastMouse.x = x;
    lastMouse.y = y;
  }

  window.addEventListener("mousemove", (e) => handleMove(e.clientX, e.clientY));
  window.addEventListener("touchmove", (e) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  // --- Render Loop ---
  function render() {
    // 1. Simulate: Render to FBO B using texture from FBO A
    gl.bindFramebuffer(gl.FRAMEBUFFER, fboB.fbo);
    gl.viewport(0, 0, width, height);
    gl.useProgram(simProgram);

    // Bind position buffer
    const posLoc = gl.getAttribLocation(simProgram, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    gl.uniform1i(gl.getUniformLocation(simProgram, "u_texture"), 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, fboA.texture);

    gl.uniform2f(gl.getUniformLocation(simProgram, "u_mouse"), mouse.x, mouse.y);
    gl.uniform2f(gl.getUniformLocation(simProgram, "u_velocity"), mouse.vx, mouse.vy);
    gl.uniform1f(gl.getUniformLocation(simProgram, "u_aspect"), width / height);
    gl.uniform3f(gl.getUniformLocation(simProgram, "u_color"), currentColor[0], currentColor[1], currentColor[2]);
    gl.uniform1f(gl.getUniformLocation(simProgram, "u_splatActive"), mouse.active);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    // Decay mouse activity so it stops splatting when still
    mouse.active *= 0.9;
    mouse.vx *= 0.9;
    mouse.vy *= 0.9;

    // 2. Display: Render FBO B to the screen
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.useProgram(displayProgram);

    gl.uniform1i(gl.getUniformLocation(displayProgram, "u_texture"), 0);
    gl.bindTexture(gl.TEXTURE_2D, fboB.texture);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    // 3. Swap framebuffers for the next frame (Ping-Pong)
    let temp = fboA;
    fboA = fboB;
    fboB = temp;

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
