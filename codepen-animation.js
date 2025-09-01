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

  // Location Marker Animation
  const pinIcon = document.querySelector('.pin-icon');
  const locationText = document.querySelector('.location-text');
  
  if (pinIcon && locationText) {
    // Set initial state
    gsap.set([pinIcon, locationText], { opacity: 0, y: 20 });
    
    // Create a timeline for the location animation
    const locationTimeline = gsap.timeline({ delay: 1.5 }); // Start after hero titles
    
    // Animate pin icon with a bounce effect
    locationTimeline.fromTo(pinIcon, {
      opacity: 0,
      y: 20,
      scale: 0.8,
      rotation: -15
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    });
    
    // Animate location text with a fade-in
    locationTimeline.fromTo(locationText, {
      opacity: 0,
      y: 15
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4"); // Start slightly before pin animation ends
    
    // Add a subtle floating animation to the pin icon
    locationTimeline.to(pinIcon, {
      y: -3,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    }, "+=0.5");
  }
});
