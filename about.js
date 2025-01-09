/* about.js */
window.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('#about');
    
    // Simple fade-in effect for about page
    aboutSection.style.opacity = 0;
    setTimeout(() => {
      aboutSection.style.transition = 'opacity 2s ease-in-out';
      aboutSection.style.opacity = 1;
    }, 100);
  });
  