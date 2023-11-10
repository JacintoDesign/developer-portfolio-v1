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
    fetch('https://randomuser.me/api/?gender=female&results=3')
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
    const bannerContent = document.querySelector('.banner-content');
    const message = '<a href="mailto:email@example.com" class="contact-link">Contact us at email@example.com - We\'re here to help!</a>';
    let messages = '';
  
    // Generate 10 messages
    for (let i = 0; i < 10; i++) {
      messages += message;
    }
  
    bannerContent.innerHTML = messages + messages; // Duplicate the set of messages
  
    const scroll = () => {
      // Reset the scroll position to 0 if it has reached the end of the first set of messages
      if (bannerContent.offsetWidth + bannerContent.scrollLeft >= bannerContent.scrollWidth / 2) {
        bannerContent.scrollLeft = 0;
      } else {
        bannerContent.scrollLeft += 1; // Adjust the speed as needed
      }
      window.requestAnimationFrame(scroll);
    };
  
    scroll();
});

// Houdini
CSS.paintWorklet.addModule('https://unpkg.com/parallelowow@0.1.5/parallelowow.js');
