// GSAP Hero Title Animation
// Using free GSAP plugins and adapting to existing elements

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Get the hero titles
  const heroTitles = document.querySelectorAll('.hero-test .hero-title');
  
  // Create a staggered animation for each title
  heroTitles.forEach((title, index) => {
    // Split the text into individual characters manually
    const text = title.textContent;
    title.innerHTML = '';
    
    // Create spans for each character
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      title.appendChild(span);
    });
    
    // Animate each character
    const chars = title.querySelectorAll('span');
    gsap.from(chars, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.7,
      ease: "back",
      stagger: 0.1,
      delay: index * 0.5 // Stagger between titles
    });
  });
});
