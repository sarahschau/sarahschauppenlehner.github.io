(function() {

    let currentSlide = 0;
    let slides = document.querySelectorAll('.content__slide');

    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');

    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);

    function prevSlide() {
        slides[currentSlide].classList.remove('content__slide--active');

        if(currentSlide === 0) {
            currentSlide = 11;
        } else {
            currentSlide = currentSlide - 1;
        }
        slides[currentSlide].classList.add('content__slide--active');
    }

    function nextSlide() {
        slides[currentSlide].classList.remove('content__slide--active');

        if(currentSlide === 11) {
            currentSlide = 0;
        } else {
            currentSlide = currentSlide + 1;
        }
        slides[currentSlide].classList.add('content__slide--active');
    }

})();