(()=>{const btn=document.querySelector('.menu-toggle'),nav=document.querySelector('.primary-nav');if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}document.querySelectorAll('#year').forEach(e=>e.textContent=new Date().getFullYear());const steps=[...document.querySelectorAll('.journey-steps article')];let i=0;if(steps.length)setInterval(()=>{steps.forEach(s=>s.classList.remove('active'));steps[i].classList.add('active');i=(i+1)%steps.length;},2000);const form=document.querySelector('#contactForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Marval Parking Solutions Inquiry - '+(d.get('interest')||'General'));const body=encodeURIComponent(`Name: ${d.get('name')||''}
Company: ${d.get('company')||''}
Email: ${d.get('email')||''}
Phone: ${d.get('phone')||''}
Interest: ${d.get('interest')||''}

Message:
${d.get('message')||''}`);location.href=`mailto:office@marvalparkingsolutions.com?subject=${subject}&body=${body}`;});})();