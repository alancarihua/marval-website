
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

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
