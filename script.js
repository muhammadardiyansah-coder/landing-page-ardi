// 1. EFEK KETIK DI HERO
const words = ["Developer", "Designer", "Freelancer"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const el = document.getElementById('typing');
  if(!el) return;
  let current = words[i];

  if(isDeleting){
    el.innerHTML = current.substring(0, j--);
  } else {
    el.innerHTML = current.substring(0, j++);
  }

  if(j == current.length){
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }
  if(j == 0){
    isDeleting = false;
    i = (i+1) % words.length;
  }
  setTimeout(type, isDeleting? 100 : 150);
}
type();

// 2. ANIMASI MUNCUL PAS SCROLL
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  })
},{threshold:0.1});

document.querySelectorAll('.fade').forEach(el=>observer.observe(el));

// 3. NAVBAR SCROLL EFFECT
window.addEventListener('scroll', ()=>{
  const nav = document.getElementById('navbar');
  if(window.scrollY > 50){
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
})

// 4. MOBILE MENU HAMBURGER
document.getElementById('hamburger').addEventListener('click', ()=>{
  document.getElementById('navLinks').classList.toggle('show');
})

// 5. SMOOTH SCROLL TUTUP MENU PAS KLIK
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click', ()=>{
    document.getElementById('navLinks').classList.remove('show');
  })
})
// CURSOR FOLLOW
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e=>{
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
})

document.querySelectorAll('a, .btn, .portfolio-item').forEach(el=>{
  el.addEventListener('mouseenter', ()=>cursor.classList.add('cursor-grow'));
  el.addEventListener('mouseleave', ()=>cursor.classList.remove('cursor-grow'));
})
// COUNTER
const counters = document.querySelectorAll('.counter');
const countObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const inc = target / 100;
      const update = ()=>{
        if(count < target){
          count += inc;
          counter.innerText = Math.ceil(count) + '+';
          setTimeout(update, 20);
        }
      }
      update();
      countObserver.unobserve(counter);
    }
  })
})
counters.forEach(c=>countObserver.observe(c));
// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('light');
  themeToggle.innerHTML = document.body.classList.contains('light')? 
    '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
})
// FORM SUBMIT
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.style.display = 'block';
  setTimeout(()=>toast.style.display='none', 3000);
  e.target.reset();
})
// FORM SUBMIT - Sekarang kirim ke WA juga
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  
  const nama = e.target.nama.value;
  const email = e.target.email.value;
  const pesan = e.target.pesan.value;

  // 1. Munculin notif
  const toast = document.getElementById('toast');
  toast.style.display = 'block';
  setTimeout(()=>toast.style.display='none', 3000);

  // 2. Opsional: langsung buka WA dengan isi form
  const waNumber = "628123456789"; // ganti nomor kamu
  const waMessage = `Halo, saya ${nama}%0AEmail: ${email}%0APesan: ${pesan}`;
  window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');

  e.target.reset();
})