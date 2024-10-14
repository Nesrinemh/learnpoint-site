// Dark mode toggle

document.addEventListener('DOMContentLoaded', () => {
  const themeToggles = document.querySelectorAll(
    '[data-theme-toggle]'
  );

  const prefersDarkScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  );

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }
  }

  function handleSystemThemeChange(e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  }

  themeToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const theme = toggle.getAttribute('data-theme-toggle');
      setTheme(theme);
    });
  });

  prefersDarkScheme.addEventListener(handleSystemThemeChange);

  initializeTheme();
});
