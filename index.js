/* home.js */
window.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('#home');
    
    // Simple fade-in effect for home page
    homeSection.style.opacity = 0;
    setTimeout(() => {
      homeSection.style.transition = 'opacity 2s ease-in-out';
      homeSection.style.opacity = 1;
    }, 100);
  });
  