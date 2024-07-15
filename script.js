// JavaScript for typewriter effect
const text = document.getElementById('intro_message').textContent.trim();
const speed = 50; // Adjust typing speed in milliseconds

document.getElementById('intro_message').textContent = '';

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById('intro_message').textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Start typing animation
typeWriter();
