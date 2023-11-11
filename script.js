document.addEventListener('DOMContentLoaded', function() {
    // Slideshow ---------------------------------------
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n+slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000); 

    // Random User Images -----------------------------
    fetch('https://randomuser.me/api/?gender=male&results=3')
        .then(response => response.json())
        .then(data => {
            const testimonials = document.querySelectorAll('.testimonial');
            
            testimonials.forEach((testimonial, index) => {
            const userIcon = testimonial.querySelector('.user-icon');
            userIcon.src = data.results[index].picture.medium;
            });
        })
        .catch(error => console.error('Error fetching user data:', error));

    // Banner -----------------------------------------
    const bannerContent = document.getElementById('bannerContent');
    let messageHTML = '<span class="contact-message">Contact us at email@example.com - We\'re here to help!</span>';
    let repeatedMessage = messageHTML.repeat(10); // Create a string with the message repeated 10 times
    
    // Set the repeated messages as the content
    bannerContent.innerHTML = repeatedMessage + repeatedMessage; // Duplicate for infinite scrolling
  
    function scrollBanner() {
      if (bannerContent.scrollLeft >= bannerContent.firstChild.offsetWidth * 10) {
        bannerContent.scrollLeft = 0; // Reset scroll position when end is reached
      } else {
        bannerContent.scrollLeft += 2; // Increase for a faster scroll speed
      }
      requestAnimationFrame(scrollBanner);
    }
  
    scrollBanner();
});

// Houdini Worklet
CSS.paintWorklet.addModule('https://unpkg.com/parallelowow@0.1.5/parallelowow.js');

// Navigation
const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
}

function hideMenu() {
  nav.classList.remove('active');
  menuIcon.classList.remove('active');
}