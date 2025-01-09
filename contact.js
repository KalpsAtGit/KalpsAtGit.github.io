/* contact.js */
window.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.querySelector('#contact');
  
    // Add a fade-in effect for the contact page
    contactSection.style.opacity = 0;
    setTimeout(() => {
      contactSection.style.transition = 'opacity 2s ease-in-out';
      contactSection.style.opacity = 1;
    }, 100);
  });
  