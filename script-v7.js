const menuButton=document.getElementById("menuButton");
const navLinks=document.getElementById("navLinks");

function closeMenu(){
  navLinks?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded","false");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click",()=>{
  const open=navLinks?.classList.toggle("open")??false;
  menuButton.setAttribute("aria-expanded",String(open));
  document.body.classList.toggle("menu-open",open);
});
navLinks?.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenu();});
document.addEventListener("click",event=>{
  if(!navLinks?.classList.contains("open"))return;
  if(navLinks.contains(event.target)||menuButton?.contains(event.target))return;
  closeMenu();
});
window.addEventListener("resize",()=>{if(window.innerWidth>760)closeMenu();});

const year=document.getElementById("year");
if(year)year.textContent=new Date().getFullYear();

document.getElementById("demoForm")?.addEventListener("submit",(event)=>{
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  const name=String(form.get("name")||"").trim();
  const company=String(form.get("company")||"").trim();
  const email=String(form.get("email")||"").trim();
  const phone=String(form.get("phone")||"").trim();
  const interest=String(form.get("interest")||"").trim();
  const message=String(form.get("message")||"").trim();
  const subject=encodeURIComponent(`Demo request from ${company||name}`);
  const body=encodeURIComponent(`Hello Marval Parking Solutions,\n\nI would like to discuss: ${interest}\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nProject details:\n${message}\n\nSent from marvalparkingsolutions.com`);
  window.location.href=`mailto:office@marvalparkingsolutions.com?subject=${subject}&body=${body}`;
});
