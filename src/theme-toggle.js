(function () {
  const STORAGE_KEY = 'user-theme'; // 'light' | 'dark'
  const root = document.documentElement;
  const stored = localStorage.getItem(STORAGE_KEY);

  // Default to light unless user explicitly set dark
  const isDarkInitial = stored === 'dark';

  function applyTheme(isDark) {
    root.classList.toggle('dark-mode', isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    if (btn) {
      btn.setAttribute('aria-pressed', String(isDark));
      btn.innerHTML = isDark ? moonToSunSvg() : sunToMoonSvg();
    }
  }

  // simple accessible icon svgs
  function sunToMoonSvg() {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"></path></svg>';
  }

  function moonToSunSvg() {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84 4.96 6.63 6.76 4.84zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zM16.24 19.16l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM20 11v2h3v-2h-3zM4.22 19.78L5.64 18.36 3.83 16.55 2.41 17.97 4.22 19.78zM12 6a6 6 0 100 12A6 6 0 0012 6z" fill="currentColor"/></svg>';
  }

  // Create button
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'theme-toggle';
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.setAttribute('title', 'Toggle dark mode');
  btn.style.lineHeight = '0';

  // Initialize icon and state
  applyTheme(isDarkInitial);

  // Click toggles
  btn.addEventListener('click', function () {
    const nowDark = root.classList.contains('dark-mode');
    applyTheme(!nowDark);
  });

  // Keyboard accessibility (space/enter)
  btn.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      btn.click();
    }
  });

  // Inject into page after DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(btn));
  } else {
    document.body.appendChild(btn);
  }
})();

