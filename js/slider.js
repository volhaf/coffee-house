'use strict';

const prevBtn = document.querySelector('.slider__button-prev');
const nextBtn = document.querySelector('.slider__button-next');
const sliderRow= document.querySelector('.favorite__slider-row');
const slides = document.querySelectorAll('.favorite__slide');


const slidesArray = Array.from(slides); // сделали массив из 3 элементов
let currentIndex = 0; //первый слайд
let slideWidth = slidesArray[0].clientWidth;

const showSlide = (index) =>{
    sliderRow.style.transform = `translateX(-${index * slideWidth}px)`
}

showSlide(currentIndex);

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
