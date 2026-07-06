const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function getEffectiveTheme() {
  const stored = document.documentElement.dataset.theme;
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function parseRgb(color) {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return [220, 240, 252];
  return match.slice(1, 4).map(Number);
}

function rgbToCss(r, g, b) {
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function applyStaticBackground() {
  const styles = getComputedStyle(document.documentElement);
  const start = styles.getPropertyValue('--bg-start').trim();
  const end = styles.getPropertyValue('--bg-end').trim();
  document.body.style.background = `linear-gradient(90deg, ${start} 0%, ${end} 100%)`;
}

function applyInteractiveBackground(mouseX, mouseY) {
  const theme = getEffectiveTheme();
  if (theme === 'dark') {
    const styles = getComputedStyle(document.documentElement);
    const [r1, g1, b1] = parseRgb(styles.getPropertyValue('--bg-start').trim());
    const [r2, g2, b2] = parseRgb(styles.getPropertyValue('--bg-end').trim());
    const shift = 18;
    const start = rgbToCss(
      lerp(r1, r2, mouseX * 0.15) + mouseX * shift - shift / 2,
      lerp(g1, g2, mouseX * 0.15) + mouseY * shift * 0.5 - shift / 4,
      lerp(b1, b2, mouseY * 0.15) + mouseY * shift - shift / 2
    );
    const end = rgbToCss(
      lerp(r2, r1, mouseY * 0.15) + mouseY * shift - shift / 2,
      lerp(g2, g1, mouseY * 0.15) + mouseX * shift * 0.5 - shift / 4,
      lerp(b2, b1, mouseX * 0.15) + mouseX * shift - shift / 2
    );
    document.body.style.background = `linear-gradient(90deg, ${start} 0%, ${end} 100%)`;
    return;
  }

  document.body.style.background = `linear-gradient(
    90deg,
    hsl(${40 * mouseX + 185}, ${48 + mouseX * 18}%, ${89 + mouseX * 3}%) 0%,
    hsl(${40 * mouseY + 185}, ${48 + mouseY * 18}%, ${89 + mouseY * 3}%) 100%
  )`;
}

let backgroundMouseHandler = null;

function initBackground() {
  if (backgroundMouseHandler) {
    window.removeEventListener('mousemove', backgroundMouseHandler);
    backgroundMouseHandler = null;
  }

  applyStaticBackground();

  if (prefersReducedMotion()) return;

  backgroundMouseHandler = (e) => {
    applyInteractiveBackground(
      e.clientX / window.innerWidth,
      e.clientY / window.innerHeight
    );
  };
  window.addEventListener('mousemove', backgroundMouseHandler);
}

function getStoredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return 'auto';
}

function updateThemeSwitchUI() {
  const switchEl = document.getElementById('theme-switch');
  if (!switchEl) return;

  const active = getStoredTheme();
  document.documentElement.dataset.themeSwitch = active;

  switchEl.querySelectorAll('.theme-switch-option').forEach((btn) => {
    const isActive = btn.dataset.theme === active;
    btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
  });
}

function applyTheme(stored) {
  if (stored === 'light' || stored === 'dark') {
    document.documentElement.dataset.theme = stored;
    localStorage.setItem('theme', stored);
  } else {
    delete document.documentElement.dataset.theme;
    localStorage.removeItem('theme');
  }
  updateThemeSwitchUI();
  initBackground();
}

function initTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    document.documentElement.dataset.theme = stored;
  }
  updateThemeSwitchUI();
  initBackground();

  const switchEl = document.getElementById('theme-switch');
  if (switchEl) {
    switchEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.theme-switch-option');
      if (!btn) return;
      applyTheme(btn.dataset.theme === 'auto' ? null : btn.dataset.theme);
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!localStorage.getItem('theme')) {
      initBackground();
      updateThemeSwitchUI();
    }
  });
}

document.addEventListener('alpine:init', () => {
  Alpine.data('mainPage', () => ({
    featured: projectsByTier('featured')[0],
    clientFull: projectsByTier('client-full'),
    clientCompact: projectsByTier('client-compact'),
    craftLead: allProjects.find(p => p.tier === 'craft' && p.body),
    craft: allProjects.filter(p => p.tier === 'craft' && p.summary),
  }));
});

window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', initBackground);

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  requestAnimationFrame(() => {
    document.documentElement.classList.add('theme-switch-ready');
  });
});
