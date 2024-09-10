
// In charge of toogling through dark and light mode and saving those changes -------------->
let darkMode = localStorage.getItem('darkMode');

const darkLightModeToggle = document.querySelector('#darkLightModeToggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
    document.getElementById("dlTextSwitch").textContent = 'Light Mode';
    document.getElementById("darkLightModeToggle").src="images/lightLogo.png";
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
    document.getElementById("dlTextSwitch").textContent = 'Dark Mode';
    document.getElementById("darkLightModeToggle").src="images/darkLogo.png";
};

if (darkMode === 'enabled') {
    enableDarkMode();
};

darkLightModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// In charge of changing the model img when scrolling -------------->
const backgroundImages = [
    'images/1-transformed.png',
    'images/2-transformed.png',
    'images/3-transformed.png',
    'images/4-transformed.png',
    'images/5-transformed.png',
    'images/6-transformed.png',
    'images/7-transformed.png'
];

const model = document.querySelector('.model');

const scrollChangeFactor = 0.02; 

window.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercent = scrollPosition / scrollableHeight;
    const imageIndex = Math.floor(scrollPercent / scrollChangeFactor) % backgroundImages.length;
    model.style.backgroundImage = `url(${backgroundImages[imageIndex]})`;
});




