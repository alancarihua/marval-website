const mobileMenu = document.getElementById("mobileMenu");
const mainNav = document.getElementById("mainNav");

mobileMenu?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  mobileMenu.setAttribute("aria-expanded", String(isOpen));
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    mobileMenu?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("demoForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const company = String(form.get("company") || "").trim();
  const email = String(form.get("email") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const interest = String(form.get("interest") || "").trim();
  const message = String(form.get("message") || "").trim();

  const subject = encodeURIComponent(`Demo request from ${company || name}`);
  const body = encodeURIComponent(
`Hello Marval Parking Solutions,

I would like to discuss: ${interest}

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

Project details:
${message}

Sent from marvalparkingsolutions.com`
  );

  window.location.href = `mailto:office@marvalparkingsolutions.com?subject=${subject}&body=${body}`;
});
