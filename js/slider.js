'use strict';

const prevBtn = document.querySelector('.slider__button-prev');
const nextBtn = document.querySelector('.slider__button-next');
const sliderRow= document.querySelector('.favorite__slider-row');
const slides = document.querySelectorAll('.favorite__slide');


const slidesArray = Array.from(slides); // сделали массив из 3 элементов
let currentIndex = 0; //первый слайд


function showSlide(index) {
    slidesArray.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block'; // показываем текущий
        } else {
            slide.style.display = 'none';  // остальные скрываем
        }
    });
}

showSlide(currentIndex); // показываем слайд


    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slidesArray.length - 1;
        }
        showSlide(currentIndex);
    });


    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= slidesArray.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    });
