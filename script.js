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
})();
