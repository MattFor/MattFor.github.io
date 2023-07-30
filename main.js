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

const setInitialAudio = () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioButton = document.getElementById('audioButton');
    const audioStatus = localStorage.getItem('audioStatus');

    if (audioStatus === 'off') {
        audioPlayer.pause();
        audioButton.innerText = 'Music Off';
    } else {
        audioPlayer.play();
        audioPlayer.volume = 0.1;
        audioButton.innerText = 'Music On';
    }
};

const toggleAudio = () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioButton = document.getElementById('audioButton');

    if (audioPlayer.paused) {
        audioPlayer.play();
        audioPlayer.volume = 0.1;
        audioButton.innerText = 'Music On';
        localStorage.setItem('audioStatus', 'on');
    } else {
        audioPlayer.pause();
        audioButton.innerText = 'Music Off';
        localStorage.setItem('audioStatus', 'off');
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const scrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
};

document.addEventListener("DOMContentLoaded", () => {
    setInitialTheme();
    setInitialAudio();
});
