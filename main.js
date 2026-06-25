/**
 * Grr! stop looking here all is available at
 * @link https://github.com/MattFor/MattFor.github.io
 */

const syncThemeButton = () =>
{
    const themeButton = document.getElementById('themeButton');
    if (!themeButton)
    {
        return;
    }

    const isLight = document.documentElement.classList.contains('light-mode');

    themeButton.innerText = isLight ? 'Dark Mode' : 'Light Mode';
    themeButton.setAttribute('aria-pressed', String(isLight));
};

const toggleTheme = () =>
{
    const isLight = document.documentElement.classList.toggle('light-mode');
    try
    {
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }
    catch (e)
    {
        // storage unavailable so theme won't persist
    }

    syncThemeButton();
};

// Expose for the inline onclick handler on the theme button
window.toggleTheme = toggleTheme;

document.addEventListener('DOMContentLoaded', syncThemeButton);
