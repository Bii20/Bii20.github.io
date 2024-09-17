// scripts.js
document.querySelector('.cta-btn').addEventListener('click', () => {
    //alert('Welcome to my projects!');
    window.location.href="https://github.com/Bii20";
  });
  // scripts.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      window.location.href="https://github.com/Bii20";
    });
  });
  