
document.getElementById("yearspan").textContent = new Date().getFullYear();
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

let sections = document.querySelectorAll("section");
let currentIndex = 0;
let isScrolling = false;
let headerHeight = document.querySelector(".header").offsetHeight;


// function smoothScroll(event) {
//     if (window.innerWidth <= 1024) return; // Only activate on desktop

//     if (isScrolling) return;

//     isScrolling = true;
//     setTimeout(() => isScrolling = false, 800);

//     if (event.deltaY > 0) {
//         currentIndex = Math.min(currentIndex + 1, sections.length - 1);
//     } else {
//         currentIndex = Math.max(currentIndex - 1, 0);
//     }

//     let targetPosition = sections[currentIndex].offsetTop - headerHeight;
//     window.scrollTo({ top: targetPosition, behavior: "smooth" });
// }

function updateBodyClass() {
    requestAnimationFrame(() => {
        if (window.scrollY > 100) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });
}

// window.addEventListener("wheel", smoothScroll);
window.addEventListener("scroll", updateBodyClass);

function adjustPopupContentHeight() {
    const popupHeader = document.querySelector('.popupHeader');
    const popupContent = document.querySelector('.popupContent');

    if (popupHeader && popupContent) {
        const headerHeight = popupHeader.offsetHeight;
        const totalHeight = window.innerHeight;
        const contentHeight = totalHeight - headerHeight;

        popupContent.style.height = `${contentHeight}px`;
    }
}

// Run on page load and window resize
window.addEventListener('load', adjustPopupContentHeight);
window.addEventListener('resize', adjustPopupContentHeight);




$(document).ready(function() {
    $('.brands').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".ActivateMenu").click(function() {
        $("body").toggleClass("popupactivated");
    });
    if (jQuery(window).width() < 1000) {
        jQuery(".ImageSwitcher")
        .fadeOut(400, function() {
          jQuery(this).attr('src',jQuery(this).attr('data-mobile'));
        })
        .fadeIn(400);
    }
    else {
      jQuery(".ImageSwitcher")
        .fadeOut(400, function() {
          jQuery(this).attr('src',jQuery(this).attr('data-desktop'));
        })
        .fadeIn(400);
    }
});
