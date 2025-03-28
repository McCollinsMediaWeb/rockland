function setScreenHeight() {
    const header = document.querySelector('.header'); // Adjust selector as needed
    const screenHeight = window.innerHeight;
    const headerHeight = header ? header.offsetHeight : 0;
    const screenElements = document.querySelectorAll('.screenHeight');

    screenElements.forEach(element => {
        element.style.height = `${screenHeight - headerHeight + 25}px`;
    });
}

// Run on load and resize
window.addEventListener('load', setScreenHeight);
window.addEventListener('resize', setScreenHeight);

function setScreenHeight1() {
    const header = document.querySelector('.header'); // Adjust selector as needed
    const screenHeight = window.innerHeight;
    const headerHeight = header ? header.offsetHeight : 0;
    const screenElements = document.querySelectorAll('.screenHeightimage');
    const heroBanner = document.querySelector('.heorbanner');
    const container = document.querySelector('.container');
    const containerWidth = container ? container.offsetWidth : '100%';

    screenElements.forEach(element => {
        element.style.maxHeight = `${screenHeight - headerHeight+200}px`;
        element.style.maxWidth = `${containerWidth - 120}px`;
    });
    
    if (heroBanner) {
        heroBanner.style.height = `${screenHeight - headerHeight}px`;
        heroBanner.style.maxWidth = `${containerWidth}px`;
    }
}

// Run on load and resize
window.addEventListener('load', setScreenHeight1);
window.addEventListener('resize', setScreenHeight1);

