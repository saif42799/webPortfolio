
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

document.addEventListener('mousemove', (e) => {
    const images = document.querySelectorAll('.image');
    const container = document.querySelector('.headSpace');
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    images.forEach((image, index) => {
        if (index === 1) {
            image.style.transform = `translate(${offsetX * 0.02}px, ${offsetY * 0.02}px)`;
        } else if (index === 2) {
            image.style.transform = `translate(${offsetX * 0.04}px, ${offsetY * 0.04}px)`;
        }
    });
});





