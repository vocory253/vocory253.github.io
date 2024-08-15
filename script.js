
document.addEventListener("DOMContentLoaded", function() {
  // Code for adding 'active' class to current page link
  var currentUrl = window.location.href;
  var links = document.querySelectorAll('.navbar');
  
  links.forEach((link) => {
      if (link.href === currentUrl) {
          link.classList.add('active');
      }
  });

  // Check if we're on the projects page
  if (window.location.pathname.includes('project.html')) {
    // Typewriter effect code
    const introMessage = document.getElementById('intro_message');
    if (introMessage) {
      const text = introMessage.textContent.trim();
      const speed = 50; // Adjust typing speed in milliseconds

      introMessage.textContent = '';

      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          introMessage.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      // Start typing animation
      typeWriter();
    }
  }
});
