// Smooth scrolling and current year
(function () {

  // Smooth scroll for on-page anchors
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest('a[href^="#"]');
    if (!anchor) return;
    const id = anchor.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    event.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Current year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Project hover interactions
  const projectNames = document.querySelectorAll('.project-name');
  const projectPreview = document.querySelector('.project-preview');

  projectNames.forEach(project => {
    project.addEventListener('mouseenter', () => {
      const imageSrc = project.getAttribute('data-image');
      if (projectPreview && imageSrc) {
        projectPreview.src = imageSrc;
        projectPreview.alt = `${project.textContent} preview`;
      }
    });
  });

  // GSAP Hero Animation
  const heroTitles = document.querySelectorAll('.hero .hero-title');
  
  // Animation Switcher - Change the number to switch animations
  const animationType = 3; // Change this number: 1, 2, 3, 4, or 5

  const animations = {
    1: {
      from: { opacity: 0, x: -100 },
      to: { opacity: 1, x: 0, duration: 1.4, ease: "power3.out", stagger: 0.25 }
    },
    2: {
      from: { opacity: 0, scale: 0.5 },
      to: { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out", stagger: 0.3 }
    },
    3: {
      from: { opacity: 0, y: 100 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", stagger: 0.2 }
    },
    4: {
      from: { opacity: 0, y: -200 },
      to: { opacity: 1, y: 0, duration: 1.4, ease: "power2.out", stagger: 0.25 }
    },
    5: {
      from: { opacity: 0, rotation: 180, scale: 0 },
      to: { opacity: 1, rotation: 0, scale: 1, duration: 1.8, ease: "power2.out", stagger: 0.3 }
    }
  };

  // Apply the selected animation
  const selectedAnimation = animations[animationType];
  gsap.fromTo(heroTitles, selectedAnimation.from, selectedAnimation.to);

  // Spotify last played (if API connected)
  const spotifyEl = document.getElementById('spotify-last-played');
  if (spotifyEl) {
    fetch('/api/spotify-last-played')
      .then(function(r){ return r.ok ? r.json() : null; })
      .then(function(data){
        if (!data || !data.item) return;
        var track = data.item.name;
        var artists = (data.item.artists || []).map(function(a){ return a.name; }).join(', ');
        var url = (data.item.external_urls && data.item.external_urls.spotify) ? data.item.external_urls.spotify : '#';
        spotifyEl.innerHTML = 'listening to <a href="' + url + '" target="_blank" rel="noopener">' + track + '</a> — ' + artists;
      })
      .catch(function(){});
  }
})();
