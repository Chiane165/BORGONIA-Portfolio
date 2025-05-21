let currentSlideEducation = 0;
let currentSlideProjects = 0;
const slideWidth = 600;

// Function to move to the next or previous slide for Carousel
function moveSlideEducation(direction) {
    const slides = document.querySelector(".educationslides");
    const totalSlides = slides.children.length;

    currentSlideEducation += direction;

    if (currentSlideEducation < 0) {
        currentSlideEducation = totalSlides - 1; 
    }
    else if (currentSlideEducation >= totalSlides) {
        currentSlideEducation = 0;
    }

    slides.style.transform = `translateX(-${currentSlideEducation * slideWidth}px)`;
}

function moveSlideProjects(direction) {
    const slides = document.querySelector(".projectsslides");
    const totalSlides = slides.children.length;

    currentSlideProjects += direction;

    if (currentSlideProjects < 0) {
        currentSlideProjects = totalSlides - 1;
    }
    else if (currentSlideProjects >= totalSlides) {
        currentSlideProjects = 0;
    }

    slides.style.transform = `translateX(-${currentSlideProjects * slideWidth}px)`;
}

const contactWindow = document.getElementById('contactWindow');
const openContactWindowBtn = document.getElementById('openContactWindowBtn');
const closeContactWindowBtn = document.getElementsByClassName('close-contact')[0];


openContactWindowBtn.onclick = function() {
    contactWindow.style.display = "block";
    setTimeout(() => contactWindow.style.transform = "translateY(0)", 10);
}

closeContactWindowBtn.onclick = function() {
    contactWindow.style.transform = "translateY(100%)";
    setTimeout(() => contactWindow.style.display = "none", 300);
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
  
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });
