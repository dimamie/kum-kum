// GSAP Hero Title Animation
// Using free GSAP plugins and adapting to existing elements

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Check if ScrollTrigger is available
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    console.log('✅ ScrollTrigger plugin registered');
  } else {
    console.log('❌ ScrollTrigger plugin not loaded');
  }
  
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

  // Scroll-triggered Location Marker Animation
  console.log('🔍 Looking for location marker...');
  
  // Target the whole location marker
  const locationMarker = document.querySelector('.location-marker');
  
  console.log('📍 Location marker found:', locationMarker);
  
  if (locationMarker) {
    console.log('✅ Location marker found - setting up animation...');
    console.log('📍 Element details:', locationMarker.tagName, locationMarker.className);
    
    // Set up the 3pm rotation animation
    console.log('🎬 Setting up 3pm rotation animation...');
    
    gsap.to(locationMarker, {
      rotation: 90, // Rotate to 3pm position
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      onStart: () => console.log('🔄 3pm rotation animation started!')
    });
    
    console.log('🎬 Animation setup complete!');
  } else {
    console.log('❌ Location marker not found');
  }
});
