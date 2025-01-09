/* skills.js */
window.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('#skills');
    
    // Simple fade-in effect for skills page
    skillsSection.style.opacity = 0;
    setTimeout(() => {
      skillsSection.style.transition = 'opacity 2s ease-in-out';
      skillsSection.style.opacity = 1;
    }, 100);
  });
  