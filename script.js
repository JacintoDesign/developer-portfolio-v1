document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n+slides.length)%slides.length; // this line ensures we loop around to the beginning/end
        slides[currentSlide].classList.add('active');
    }

    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000); // changes slides every 5 seconds
});


// document.addEventListener('DOMContentLoaded', function() {
//     const mockups = document.querySelectorAll('.mockup');

//     mockups.forEach(mockup => {
//         mockup.addEventListener('mousemove', (event) => {
//             // Relative mouse position
//             const rect = mockup.getBoundingClientRect();
//             const mouseX = event.clientX - rect.left;
//             const mouseY = event.clientY - rect.top;

//             // Center of the mockup element
//             const centerX = rect.width / 2;
//             const centerY = rect.height / 2;

//             const deltaX = mouseX - centerX;
//             const deltaY = mouseY - centerY;

//             // Calculate rotation based on mouse position relative to element's center
//             const percentageX = deltaX / centerX;
//             const percentageY = deltaY / centerY;

//             const rotationY = -30 * percentageX;
//             const rotationX = 30 * percentageY;

//             mockup.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
//         });

//         // Reset rotation when mouse leaves the element
//         mockup.addEventListener('mouseleave', () => {
//             mockup.style.transform = `rotateX(0deg) rotateY(0deg)`;
//         });
//     });
// });

