'use strict';

const prevBtn = document.querySelector('.slider__button-prev');
const nextBtn = document.querySelector('.slider__button-next');
const sliderRow= document.querySelector('.favorite__slider-row');
const wrapper   = document.querySelector('.favorite__slider-wrapper');
const slides = document.querySelectorAll('.favorite__slide');
const controls = document.querySelectorAll('.favorite__controls-btn');


const slidesArray = Array.from(slides); // сделали массив из 3 элементов
let currentIndex = 0; //первый слайд
let slideWidth = slidesArray[0].clientWidth;


const showSlide = (index) =>{
    sliderRow.style.transform = `translateX(-${index * slideWidth}px)`;

    controls.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('favorite__controls-btn--active');
        } else {
            btn.classList.remove('favorite__controls-btn--active');
        }
    });
} //двигаем

showSlide(currentIndex); //начало

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

setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;
    showSlide(currentIndex);
}, 6000);

window.addEventListener('resize', () => {
    slideWidth = wrapper.clientWidth;
    showSlide(currentIndex);
});