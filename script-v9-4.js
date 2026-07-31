(() => {
  const root = document.documentElement;
  root.classList.add("animations-ready");

  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu");
  const primaryNav = document.querySelector("header nav");

  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  });

  if (menuToggle && primaryNav) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.addEventListener("click", () => {
      const open = primaryNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    primaryNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px 80px 0px" });

    revealItems.forEach(item => observer.observe(item));

    // Make above-the-fold content visible immediately even if observer timing is delayed.
    requestAnimationFrame(() => {
      revealItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.05) item.classList.add("visible");
      });
    });
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const steps = [...document.querySelectorAll(".steps > div")];
  let activeStep = 0;
  if (steps.length) {
    setInterval(() => {
      steps.forEach(item => item.classList.remove("active"));
      steps[activeStep].classList.add("active");
      activeStep = (activeStep + 1) % steps.length;
    }, 2000);
  }

  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(
        `Marval Parking Solutions Inquiry - ${data.get("interest") || "General Inquiry"}`
      );
      const body = encodeURIComponent(
        `Name: ${data.get("name") || ""}\n` +
        `Company: ${data.get("company") || ""}\n` +
        `Email: ${data.get("email") || ""}\n` +
        `Phone: ${data.get("phone") || ""}\n` +
        `Interest: ${data.get("interest") || ""}\n\n` +
        `Message:\n${data.get("message") || ""}`
      );
      window.location.href =
        `mailto:office@marvalparkingsolutions.com?subject=${subject}&body=${body}`;
    });
  }
})();

// Absolute safety fallback: never leave page content hidden.
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach(item => item.classList.add("visible"));
  }, 1200);
});
