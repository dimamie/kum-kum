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
  const heroTitles = document.querySelectorAll('.hero .hero-title');
  
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

  // Hero Right Animation - starts at the same time as hero titles
  const heroRight = document.querySelector('.hero .hero-right');
  if (heroRight) {
    // Get the hero-right elements
    const heroAvatars = heroRight.querySelector('.hero-avatars');
    const heroServicesText = heroRight.querySelector('.hero-services-text');
    const heroEmailLink = heroRight.querySelectorAll('.hero-email-link');
    
    // Set initial state - hidden and below
    gsap.set([heroAvatars, heroServicesText, ...heroEmailLink], {
      opacity: 0,
      y: 50
    });
    
    // Animate hero-right elements at the same time as titles
    gsap.to([heroAvatars, heroServicesText, ...heroEmailLink], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      delay: 0 // Start immediately with titles
    });
  }

  // Scroll-triggered Contact Section Animation - same as hero-right
  const contactSection = document.querySelector('.contact');
  if (contactSection) {
    // Get the contact elements
    const contactIntro = contactSection.querySelector('.contact-intro');
    const contactEmail = contactSection.querySelector('.contact-email');
    
    // Set initial state - hidden and below (same as hero-right)
    gsap.set([contactIntro, contactEmail], {
      opacity: 0,
      y: 50
    });
    
    // Animate contact elements when scrolled into view
    gsap.to([contactIntro, contactEmail], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: contactSection,
        start: "top 80%", // Start when top of contact section is 80% up the viewport
        onEnter: () => console.log('📧 Contact section entered viewport - starting animation!'),
        onLeave: () => console.log('👋 Contact section left viewport'),
        onEnterBack: () => console.log('📧 Contact section re-entered viewport'),
        onLeaveBack: () => console.log('👋 Contact section left viewport (scrolling up)')
      }
    });
  }
});
