const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let timeId = null;

document.addEventListener("DOMContentLoaded", firstSlide);

function firstSlide() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        timeId = setInterval(nextSlide, 3000);
    }
}

function showsSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function nextSlide() {
    if (slideIndex >= slides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    showsSlide(slideIndex);console.log(slideIndex);
}

function previousSlide() {
    clearInterval(timeId);
    if (slideIndex <= 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex--;
    }
    showsSlide(slideIndex);
}