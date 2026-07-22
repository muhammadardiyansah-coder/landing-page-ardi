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