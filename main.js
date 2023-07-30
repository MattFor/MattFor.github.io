/**
 * Grr stop looking here all is available at
 * @link https://github.com/MattFor/MattFor.github.io
 */

const setInitialTheme = () => {
    const theme = localStorage.getItem('theme');
    const themeButton = document.getElementById('themeButton');

    if (theme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeButton.innerText = 'Light Mode';
    } else if (theme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeButton.innerText = 'Dark Mode';
    }
};

const toggleTheme = () => {
    const themeButton = document.getElementById('themeButton');
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeButton.innerText = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeButton.innerText = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
};

document.addEventListener("DOMContentLoaded", () => {
    setInitialTheme();
});
