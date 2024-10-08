// Dark mode toggle

// DOMContentLoaded: to ensure it runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the data-theme-toggle attribute
  const themeToggles = document.querySelectorAll(
    '[data-theme-toggle]'
  );
  // Create a media query to detect system dark mode preference
  const prefersDarkScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  );

  function setTheme(theme) {
    // Set the data-theme attribute on the document element in HTML tag
    document.documentElement.setAttribute('data-theme', theme);
    // Store the theme preference in localStorage
    localStorage.setItem('theme', theme);
  }

  function initializeTheme() {
    // Retrieve the saved theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    // If a saved theme exists, set the theme accordingly
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If no saved theme exists, set the theme based on the system preference
      setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }
  }

  function handleSystemThemeChange(e) {
    // If no saved theme exists, set the theme based on the system preference
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  }

  // Add click event listeners to theme toggle buttons
  themeToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const theme = toggle.getAttribute('data-theme-toggle');
      setTheme(theme);
    });
  });

  // Listen for changes to the system color scheme
  prefersDarkScheme.addEventListener(handleSystemThemeChange);

  // Initialize the theme based on user preference
  initializeTheme();
});
