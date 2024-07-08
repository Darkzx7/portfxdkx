document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".content-section");
  const navLinks = document.querySelectorAll(".nav-link");
  const logoImg = document.querySelector(".logo-img");
  const logoText = document.querySelector(".logo-text");

  // Navigation click handling
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);

      sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
      });

      targetSection.classList.add('active');
      targetSection.style.display = 'block';
    });
  });

  // Logo hover/click effects
  logoImg.addEventListener("mouseover", () => {
    logoText.style.opacity = "1";
  });

  logoImg.addEventListener("mouseout", () => {
    logoText.style.opacity = "0";
  });

  logoImg.addEventListener("click", () => {
    logoText.style.opacity = "1";
  });

  // Initial animation for entry
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 500);
});
