const toggleDarkMode = () => {
    const themeButton = document.getElementById('themeButton');
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeButton.innerText = 'Dark Mode'; // Change to Dark Mode when light mode is active
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeButton.innerText = 'Light Mode'; // Change to Light Mode when dark mode is active
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('themeButton').innerText = 'Light Mode';
    } else {
        document.getElementById('themeButton').innerText = 'Dark Mode';
    }
});
