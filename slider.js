document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderWrapper = document.querySelector('.logo-slider-wrapper');
    const slides = document.querySelectorAll('.logo-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        const offset = -index * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    function goToNextSlide() {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }

    function goToPrevSlide() {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        showSlide(currentIndex);
    }

    // Event listeners for buttons
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);

    // Automatic sliding
    function startAutoSlide() {
        slideInterval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Start auto sliding on page load
    startAutoSlide();

    // Optional: Restart auto sliding if user interacts with navigation
    prevBtn.addEventListener('mouseover', stopAutoSlide);
    nextBtn.addEventListener('mouseover', stopAutoSlide);
    prevBtn.addEventListener('mouseout', startAutoSlide);
    nextBtn.addEventListener('mouseout', startAutoSlide);

    // Ensure the slider stops automatically when the user interacts with it
    sliderWrapper.addEventListener('mouseover', stopAutoSlide);
    sliderWrapper.addEventListener('mouseout', startAutoSlide);
});
