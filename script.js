
    const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    slidesPerView: 1.1,

    spaceBetween: -28,

    breakpoints: {
        320: {
            slidesPerView: 1.1,
        },
        480: {
            slidesPerView: 1.5,
        },
        530: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 2.20,
        },
    }
});


function toggleSlides() {
    const hiddenSlides = document.querySelectorAll('.hidden-slides');
    const buttonText = document.querySelector('.show__button-text');
    const buttonImage = document.querySelector('.show__button-img');

    hiddenSlides.forEach(slide => {
        if (getComputedStyle(slide).display === "none") {
            slide.style.display = "block"; 
        } else {
            slide.style.display = "none";  
        }
    });

    if (buttonText.textContent === "Показать все") {
        buttonText.textContent = "Скрыть";
        buttonImage.style.transform = "rotate(180deg)";
    } else {
        buttonText.textContent = "Показать все";
        buttonImage.style.transform = "rotate(0deg)";
    }
}

// П
document.getElementById('showButton').addEventListener('click', toggleSlides);
