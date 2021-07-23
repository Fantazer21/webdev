let sliders = document.querySelectorAll('.slider__item');

let nextBtn = document.querySelector('.slider__btn--end')
let previousBtn = document.querySelector('.slider__btn--start')

nextBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    let firstSlide = document.querySelector('.slider__item--first');
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i] === firstSlide) {
            let m = i + 1;
            let n = i + 3;
            if (n > sliders.length - 1) {
                n = sliders.length - 1;
            }
            if (m > sliders.length - 3) {
                m = sliders.length - 3;
            }
            sliders[i].classList.add('slider__item--hidden');
            sliders[i].classList.remove('slider__item--current');
            sliders[i].classList.remove('slider__item--first');
            sliders[m].classList.add('slider__item--first');
            sliders[n].classList.add('slider__item--current');
            sliders[n].classList.remove('slider__item--hidden');
        }

    }
});

previousBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    let firstSlide = document.querySelector('.slider__item--first');
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i] === firstSlide) {
            let m = i - 1;
            let n = i + 2;
            if (n >= sliders.length) {
                n = sliders.length - 1;
            }
            if (m < 0) {
                m = 0;
            }
            sliders[i].classList.remove('slider__item--first');
            sliders[m].classList.add('slider__item--current');
            sliders[m].classList.remove('slider__item--hidden');
            sliders[m].classList.add('slider__item--first');
            sliders[n].classList.remove('slider__item--current');
            sliders[n].classList.add('slider__item--hidden');
        }

    }
});