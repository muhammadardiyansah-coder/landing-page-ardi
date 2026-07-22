*{
  margin:0;
  padding:0;
  box-sizing:border-box
}
html{
  scroll-behavior:smooth
}
body{
  font-family:'Inter',sans-serif;
  background:#0A0A0A;
  color:#fff;
  overflow-x:hidden
}

:root{
  --primary:#D4FF00;
  --dark:#0A0A0A;
  --gray:#1A1A1A;
  --text:#A0A0A0
}
.container{
  max-width:1200px;
  margin:0 auto;
  padding:0 40px
}
.section{
  padding:120px 0
}

/* NAVBAR */
nav{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:30px 60px;
  position:fixed;
  top:0;
  width:100%;
  z-index:100;
  background:rgba(10,10,10,0.8);
  backdrop-filter:blur(10px);
  transition:0.3s
}
nav.scrolled{
  background:#000
}
.logo{
  font-size:22px;
  font-weight:900
}
.nav-links{
  display:flex;
  gap:40px;
  list-style:none
}
.nav-links a{
  text-decoration:none;
  color:#fff;
  font-weight:500;
  transition:0.3s
}
.nav-links a:hover{
  color:var(--primary)
}
.btn{
  padding:12px 24px;
  background:var(--primary);
  color:#000;
  border-radius:8px;
  text-decoration:none;
  font-weight:700;
  transition:0.3s
}
.btn:hover{
  transform:translateY(-2px)
}
.btn-outline{
  border:2px solid #fff;
  background:transparent;
  color:#fff
}
.btn-outline:hover{
  background:#fff;
  color:#000
}
.hamburger{
  display:none;
  font-size:24px;
  cursor:pointer
}

/* HERO */
.hero{
  height:100vh;
  display:flex;
  align-items:center;
  position:relative
}
.hero-bg{
  position:absolute;
  top:0;
  right:0;
  width:50%;
  height:100%;
  background:url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000') center/cover;
  opacity:0.3
}
.hero-content{
  z-index:2;
  max-width:700px
}
.hero h1{
  font-size:90px;
  font-weight:900;
  line-height:1.0;
  margin-bottom:20px
}
.hero h1.stroke{
  color:transparent;
  -webkit-text-stroke:2px #fff
}
.hero h1.highlight{
  background:var(--primary);
  color:#000;
  padding:0 10px
}
.hero p{
  font-size:20px;
  color:var(--text);
  margin-bottom:40px;
  max-width:500px
}
.hero-buttons{
  display:flex;
  gap:20px
}

/* ABOUT */
.about-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:60px;
  align-items:center
}
.about-img img{
  width:100%;
  border-radius:20px
}
.section-title{
  font-size:60px;
  font-weight:900;
  margin-bottom:20px
}
.section-title span{
  color:var(--primary)
}
.about-desc{
  color:var(--text);
  font-size:18px;
  line-height:1.8;
  margin-bottom:20px
}

/* SERVICES */
.services{
  background:var(--gray)
}
.service-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px
}
.service-card{
  background:#000;
  padding:40px;
  border-radius:20px;
  border:1px solid #222;
  transition:0.3s
}
.service-card:hover{
  border-color:var(--primary);
  transform:translateY(-10px)
}
.service-card i{
  font-size:40px;
  color:var(--primary);
  margin-bottom:20px
}
.service-card h3{
  margin-bottom:10px
}

/* PORTFOLIO */
.portfolio-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:30px
}
.portfolio-item{
  position:relative;
  border-radius:20px;
  overflow:hidden
}
.portfolio-item img{
  width:100%;
  display:block;
  transition:0.5s
}
.portfolio-item:hover img{
  transform:scale(1.1)
}
.portfolio-overlay{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  padding:30px;
  background:linear-gradient(transparent,rgba(0,0,0,0.9))
}

/* CONTACT */
.contact{
  background:var(--gray);
  text-align:center
}
.contact.section-title{
  font-size:60px
}
.contact-desc{
  color:var(--text);
  margin-bottom:30px
}

/* FOOTER */
footer{
  padding:40px 0;
  text-align:center;
  border-top:1px solid #222;
  color:var(--text)
}

/* ANIMASI SCROLL */
.fade{
  opacity:0;
  transform:translateY(40px);
  transition:1s
}
.fade.show{
  opacity:1;
  transform:translateY(0)
}

/* RESPONSIVE */
@media(max-width:900px){
 .hero h1{font-size:50px}
 .about-grid,.service-grid,.portfolio-grid{grid-template-columns:1fr}
 .nav-links{
    display:none;
    position:absolute;
    top:80px;
    left:0;
    right:0;
    background:#000;
    flex-direction:column;
    padding:20px;
    gap:20px
  }
 .nav-links.show{display:flex}
 .hamburger{display:block}
 .hero-bg{width:100%}
 .container{padding:0 20px}
 .section-subtitle{
  font-size:18px;
  color:var(--text);
  text-align:center;
  max-width:600px;
  margin:0 auto 50px
}

.portfolio-grid{
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  gap:30px
}

.portfolio-item{
  position:relative;
  border-radius:20px;
  overflow:hidden;
  height:350px
}

.portfolio-item img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  transition:0.5s
}

.portfolio-item:hover img{
  transform:scale(1.1)
}

.portfolio-overlay{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  padding:30px;
  background:linear-gradient(transparent,rgba(0,0,0,0.9));
  transform:translateY(100%);
  transition:0.4s
}

.portfolio-item:hover .portfolio-overlay{
  transform:translateY(0)
}

.portfolio-overlay h3{font-size:24px;margin-bottom:5px}
.portfolio-overlay p{color:var(--text);margin-bottom:15px}

.btn-mini{
  padding:10px 20px;
  background:var(--primary);
  color:#000;
  border-radius:8px;
  text-decoration:none;
  font-weight:700;
  font-size:14px
}

@media(max-width:900px){
  .portfolio-grid{grid-template-columns:1fr}
  .portfolio-item{height:300px}
}
.stats{background:var(--gray)}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center}
.stat-item h3{font-size:60px;color:var(--primary);font-weight:900}
.stat-item p{color:var(--text);font-size:18px}
@media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr)}}
.tech-grid{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:30px;
  text-align:center;
  margin-top:50px
}
.tech-item{
  background:#1A1A1A;
  padding:40px 20px;
  border-radius:20px;
  border:1px solid #333;
  transition:0.3s;
  cursor:default
}
.tech-item:hover{
  border-color:#D4FF00;
  transform:translateY(-10px);
  background:#222
}
.tech-item i{
  font-size:60px;
  color:#D4FF00;
  margin-bottom:15px
}
.tech-item p{
  font-weight:600;
  font-size:18px
}

@media(max-width:900px){
  .tech-grid{grid-template-columns:repeat(3,1fr)}
}
@media(max-width:500px){
  .tech-grid{grid-template-columns:repeat(2,1fr)}
}
.faq-item{background:#1A1A1A;padding:25px;border-radius:12px;margin-bottom:15px;border-left:3px solid var(--primary)}
.faq-item h3{margin-bottom:10px}
.faq-item p{color:var(--text)}
.portfolio-grid{
  display:grid;
  grid-template-columns:repeat(3, 1fr); /* dari 2 jadi 3 */
  gap:30px
}
/* STATS */
.stats{background:#111}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center}
.stat-item h3{font-size:70px;color:#D4FF00;font-weight:900}
.stat-item p{color:#888;font-size:18px;margin-top:5px}
@media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr)}}

/* TESTIMONI */
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px}
.testi-card{background:#1A1A1A;padding:30px;border-radius:20px;border:1px solid #333}
.testi-card p{font-size:16px;color:#ccc;font-style:italic;margin-bottom:20px}
.testi-user{display:flex;align-items:center;gap:15px}
.testi-user img{border-radius:50%;width:50px;height:50px}
.testi-user h4{font-size:18px}
.testi-user span{color:#888;font-size:14px}
@media(max-width:900px){.testi-grid{grid-template-columns:1fr}}

/* FAQ */
.faq-list{max-width:800px;margin:0 auto}
.faq-item{background:#1A1A1A;padding:25px;border-radius:15px;margin-bottom:20px;border-left:4px solid #D4FF00}
.faq-item h3{font-size:20px;margin-bottom:10px}
.faq-item p{color:#888;line-height:1.7}
/* PROSES KERJA */
.process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;margin-top:50px}
.process-item{text-align:center}
.process-number{font-size:60px;font-weight:900;color:#D4FF00;opacity:0.3}
.process-item h3{font-size:22px;margin:10px 0}
.process-item p{color:#888}
@media(max-width:900px){.process-grid{grid-template-columns:repeat(2,1fr)}}

/* HARGA */
.pricing{background:#111}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:50px}
.pricing-card{background:#1A1A1A;padding:40px;border-radius:20px;border:1px solid #333;text-align:center;position:relative}
.pricing-card.featured{border-color:#D4FF00;transform:scale(1.05)}
.badge{position:absolute;top:-15px;left:50%;transform:translateX(-50%);background:#D4FF00;color:#000;padding:5px 15px;border-radius:20px;font-size:12px;font-weight:700}
.pricing-card h3{font-size:24px;margin-bottom:10px}
.pricing-card h4{font-size:36px;color:#D4FF00;margin-bottom:20px}
.pricing-card ul{list-style:none;margin-bottom:30px;text-align:left}
.pricing-card ul li{padding:8px 0;color:#ccc}
@media(max-width:900px){.pricing-grid{grid-template-columns:1fr}.pricing-card.featured{transform:scale(1)}}

/* BLOG */
.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:50px}
.blog-card{background:#1A1A1A;border-radius:20px;overflow:hidden;border:1px solid #333}
.blog-card img{width:100%;height:200px;object-fit:cover}
.blog-content{padding:25px}
.blog-date{font-size:14px;color:#888}
.blog-content h3{font-size:20px;margin:10px 0 15px}
.blog-content a{color:#D4FF00;text-decoration:none;font-weight:700}
@media(max-width:900px){.blog-grid{grid-template-columns:1fr}}
/* CTA BANNER */
.cta-banner{
  background:#000;
  padding:80px 20px;
}
.cta-box{
  background:linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%);
  border:1px solid #333;
  border-radius:20px;
  padding:60px 50px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:40px;
}
.cta-text h2{
  font-size:42px;
  color:#fff;
  margin-bottom:15px;
  line-height:1.2;
}
.cta-text p{
  font-size:18px;
  color:#888;
  max-width:600px;
}
.btn-cta{
  background:#D4FF00;
  color:#000;
  font-size:18px;
  font-weight:800;
  padding:20px 40px;
  border-radius:12px;
  text-decoration:none;
  white-space:nowrap;
  transition:0.3s;
}
.btn-cta:hover{
  background:#c4e600;
  transform:translateY(-3px);
  box-shadow:0 10px 30px rgba(212,255,0,0.3);
}

/* MOBILE */
@media(max-width:900px){
  .cta-box{
    flex-direction:column;
    text-align:center;
    padding:40px 30px;
  }
  .cta-text h2{font-size:32px}
  .cta-text p{max-width:100%}
}
/* HARGA */
.pricing{background:#111; padding:100px 20px}
.pricing-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
  margin-top:50px;
}
.pricing-card{
  background:#1A1A1A;
  padding:40px 30px;
  border-radius:20px;
  border:1px solid #333;
  text-align:center;
  position:relative;
  transition:0.3s;
}
.pricing-card:hover{
  border-color:#D4FF00;
  transform:translateY(-10px);
}
.pricing-card.featured{
  border-color:#D4FF00;
  transform:scale(1.05);
  background:#222;
}
.badge{
  position:absolute;
  top:-15px;
  left:50%;
  transform:translateX(-50%);
  background:#D4FF00;
  color:#000;
  padding:8px 20px;
  border-radius:20px;
  font-size:12px;
  font-weight:800;
}
.pricing-card h3{font-size:24px;margin-bottom:10px}
.pricing-card h4{font-size:36px;color:#D4FF00;margin-bottom:25px;font-weight:900}
.pricing-card ul{list-style:none;margin-bottom:30px;text-align:left}
.pricing-card ul li{
  padding:10px 0;
  color:#ccc;
  border-bottom:1px dashed #333;
}
.pricing-card ul li:before{
  content:"✓ ";
  color:#D4FF00;
  font-weight:800;
  margin-right:8px;
}
.pricing-card .btn{
  display:block;
  width:100%;
  background:#D4FF00;
  color:#000;
  padding:15px;
  border-radius:10px;
  font-weight:800;
  text-decoration:none;
  transition:0.3s;
}
.pricing-card .btn:hover{background:#c4e600}

/* MOBILE */
@media(max-width:900px){
  .pricing-grid{grid-template-columns:1fr}
  .pricing-card.featured{transform:scale(1)}
}
/* HARGA - VERSI PAKSA */
section.pricing{
  background:#111 !important; 
  padding:100px 20px !important;
}
.pricing-grid{
  display:grid !important;
  grid-template-columns:repeat(3,1fr) !important;
  gap:30px !important;
  margin-top:50px !important;
}
.pricing-card{
  background:#1A1A1A !important;
  padding:40px 30px !important;
  border-radius:20px !important;
  border:1px solid #333 !important;
  text-align:center !important;
  position:relative !important;
  display:flex !important;
  flex-direction:column !important;
}
.pricing-card.featured{
  border-color:#D4FF00 !important;
  transform:scale(1.05) !important;
  background:#222 !important;
}
.badge{
  position:absolute !important;
  top:-15px !important;
  left:50% !important;
  transform:translateX(-50%) !important;
  background:#D4FF00 !important;
  color:#000 !important;
  padding:8px 20px !important;
  border-radius:20px !important;
  font-size:12px !important;
  font-weight:800 !important;
  z-index:2 !important;
}
.pricing-card h3{font-size:24px !important; margin-bottom:10px !important; color:#fff !important;}
.pricing-card h4{font-size:36px !important; color:#D4FF00 !important; margin-bottom:25px !important; font-weight:900 !important;}
.pricing-card ul{list-style:none !important; margin-bottom:30px !important; text-align:left !important; flex-grow:1 !important;}
.pricing-card ul li{padding:10px 0 !important; color:#ccc !important; border-bottom:1px dashed #333 !important;}
.pricing-card .btn{
  display:block !important;
  width:100% !important;
  background:#D4FF00 !important;
  color:#000 !important;
  padding:15px !important;
  border-radius:10px !important;
  font-weight:800 !important;
  text-decoration:none !important;
  margin-top:auto !important;
}

@media(max-width:900px){
  .pricing-grid{grid-template-columns:1fr !important;}
  .pricing-card.featured{transform:scale(1) !important;}
}
.pricing-grid{background:red !important;}
.pricing{background:#111;padding:100px 20px}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:50px}
.pricing-card{background:#1A1A1A;padding:40px 30px;border-radius:20px;border:1px solid #333;text-align:center;position:relative;display:flex;flex-direction:column;height:100%}
.pricing-card.featured{border:2px solid #D4FF00;transform:scale(1.05)}
.badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:#D4FF00;color:#000;padding:6px 18px;border-radius:20px;font-size:12px;font-weight:800}
.pricing-card h3{font-size:24px;margin-bottom:10px;color:#fff}
.pricing-card h4{font-size:36px;color:#D4FF00;margin-bottom:25px;font-weight:900}
.pricing-card ul{list-style:none;margin-bottom:30px;text-align:left;flex-grow:1}
.pricing-card ul li{padding:10px 0;color:#ccc;border-bottom:1px dashed #333}
.pricing-card ul li:last-child{border-bottom:none}
.pricing-card .btn{display:block;width:100%;background:#D4FF00;color:#000;padding:15px;border-radius:10px;font-weight:800;text-decoration:none;margin-top:auto}
.pricing-card .btn:hover{background:#c4e600}

@media(max-width:900px){
  .pricing-grid{grid-template-columns:1fr}
  .pricing-card.featured{transform:scale(1)}
}
/* EFEK HOVER BUAT CARD HARGA */
.pricing-card{
  transition: all 0.4s ease; /* biar animasinya smooth */
  cursor:pointer;
}

.pricing-card:hover{
  transform: translateY(-15px) scale(1.02); /* naik + gede dikit */
  border-color: #D4FF00; /* border jadi kuning */
  box-shadow: 0 20px 50px rgba(212, 255, 0, 0.25); /* glow kuning */
  background: #222; /* background agak terang */
}

/* EFEK BUAT CARD "PALING POPULER" */
.pricing-card.featured:hover{
  transform: translateY(-15px) scale(1.07); /* dia naik lebih tinggi */
  box-shadow: 0 25px 60px rgba(212, 255, 0, 0.4); /* glow lebih kuat */
}

/* EFEK BUAT TOMBOL PAS HOVER CARD */
.pricing-card .btn{
  transition: all 0.3s ease;
}

.pricing-card:hover .btn{
  background: #000; /* tombol jadi hitam */
  color: #D4FF00; /* tulisan jadi kuning */
  border: 1px solid #D4FF00;
}

/* EFEK BUAT HARGA PAS HOVER */
.pricing-card h4{
  transition: all 0.3s ease;
}
.pricing-card:hover h4{
  transform: scale(1.1); /* harga gede dikit */
  color: #fff; /* harga jadi putih pas hover */
}
/* ============ SECTION DIPERCAYA OLEH ============ */
.trusted{
  background:#000;
  padding:80px 20px;
  text-align:center;
}
.trusted h2{
  font-size:40px;
  color:#fff;
  margin-bottom:50px;
}
.trusted h2 span{
  color:#D4FF00;
}
.trusted-logos{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:50px;
  flex-wrap:wrap;
}
.trusted-logos img{
  height:50px;
  filter: grayscale(100%) brightness(0.5); /* logo jadi abu2 */
  transition:0.3s;
  opacity:0.6;
}
.trusted-logos img:hover{
  filter: grayscale(0%) brightness(1); /* pas hover jadi warna */
  opacity:1;
  transform:scale(1.1);
}

/* ============ EFEK HOVER HARGA ============ */
.pricing-card{
  transition: all 0.4s ease;
  cursor:pointer;
}
.pricing-card:hover{
  transform: translateY(-15px) scale(1.02);
  border-color: #D4FF00;
  box-shadow: 0 20px 50px rgba(212, 255, 0, 0.25);
  background: #222;
}
.trusted{background:#000; padding:100px 20px; text-align:center;}
.trusted h2{font-size:40px; color:#fff; margin-bottom:60px;}
.trusted h2 span{color:#D4FF00;}
.trusted-logos{display:flex; justify-content:center; align-items:center; gap:60px; flex-wrap:wrap;}
.trusted-logos img{
  height:45px; 
  filter: grayscale(100%) brightness(0.4); /* jadi abu2 gelap */
  transition:0.4s;
}
.trusted-logos img:hover{
  filter: grayscale(0%) brightness(1); /* jadi warna + terang */
  transform: translateY(-5px);
}
.trusted{background:#000; padding:100px 20px; overflow:hidden;}
.trusted h2{text-align:center; font-size:40px; color:#fff; margin-bottom:60px;}
.trusted h2 span{color:#D4FF00;}

.marquee{width:100%; overflow:hidden;}
.marquee-content{
  display:flex;
  gap:80px;
  animation: scroll 20s linear infinite;
}
.marquee-content img{
  height:50px;
  filter: grayscale(100%) brightness(0.5);
  transition:0.3s;
}
.marquee-content img:hover{
  filter: grayscale(0%) brightness(1);
}

@keyframes scroll{
  from{transform:translateX(0)}
  to{transform:translateX(-50%)} /* -50% karena kita duplikat */
}

.marquee:hover .marquee-content{
  animation-play-state: paused; /* berhenti pas di hover */
}
.trusted{background:#000; padding:100px 20px; overflow:hidden;}
.trusted h2{text-align:center; font-size:40px; color:#fff; margin-bottom:60px;}
.trusted h2 span{color:#D4FF00;}

.marquee{width:100%; overflow:hidden;}
.marquee-content{
  display:flex;
  gap:80px;
  animation: scroll 25s linear infinite;
}
.marquee-content img{
  height:50px;
  filter: grayscale(100%) brightness(0.5);
  transition:0.3s;
}
.marquee-content img:hover{
  filter: grayscale(0%) brightness(1);
  transform: scale(1.1);
}

@keyframes scroll{
  from{transform:translateX(0)}
  to{transform:translateX(-50%)}
}

.marquee:hover .marquee-content{
  animation-play-state: paused;
}
.trusted{background:#000; padding:100px 20px; overflow:hidden;}
.trusted h2{text-align:center; font-size:40px; color:#fff; margin-bottom:60px;}
.trusted h2 span{color:#D4FF00;}

.marquee{width:100%; overflow:hidden;}
.marquee-content{
  display:flex;
  gap:80px;
  animation: scroll 25s linear infinite;
}
.marquee-content img{
  height: 50px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.5);
  transition:0.3s;
  flex-shrink: 0;
}
.marquee-content img:hover{
  filter: grayscale(0%) brightness(1);
  transform: scale(1.1);
}

@keyframes scroll{
  from{transform:translateX(0)}
  to{transform:translateX(-50%)}
}

.marquee:hover .marquee-content{
  animation-play-state: paused;
}
.marquee-content img{
  height: 50px;      /* tinggi dikunci 50px */
  width: auto;       /* lebar ngikutin biar ga gepeng */
  max-width: 120px;  /* biar ga ada yg kegedean */
  object-fit: contain; /* biar logonya ga kepotong */
  
  filter: grayscale(100%) brightness(0.5);
  transition:0.3s;
  flex-shrink: 0; /* penting biar ga keteken pas marquee */
}
/* PAKSA LOGO KECIL */
section.trusted .marquee .marquee-content img{
  height: 45px !important;
  width: auto !important;
  max-width: 100px !important;
  max-height: 45px !important;
  object-fit: contain !important;
  flex-shrink: 0 !important;
  filter: grayscale(100%) brightness(0.5) !important;
}
section.trusted .marquee .marquee-content{
  display:flex;
  gap:60px;
  animation: scroll 20s linear infinite;
}
section.trusted .marquee .marquee-content img{
  height: 45px !important;
  width: auto !important;
  flex-shrink: 0 !important;
  filter: grayscale(100%) brightness(1.5) !important;
  opacity: 0.8;
}
section.trusted .marquee .marquee-content img:hover{
  filter: grayscale(0%) brightness(1) !important;
  opacity: 1;
}
@keyframes scroll{
  from{transform:translateX(0)}
  to{transform:translateX(-50%)}
.marquee:hover .marquee-content{animation-play-state: paused;}
}
/* PAKSA LOGO KECIL DAN URUT */
section.trusted .marquee-content{
  display: flex !important;
  align-items: center !important;
  gap: 60px !important;
  animation: scroll 20s linear infinite !important;
}

section.trusted .marquee-content img{
  height: 45px !important;      /* PAKSA TINGGI 45px */
  width: auto !important;       /* LEBAR NGIKUT */
  max-width: 120px !important;  /* JAGA2 BIAR GA GEDE BANGET */
  flex-shrink: 0 !important;    /* JANGAN MENGECIL SENDIRI */
  filter: grayscale(100%) brightness(1.5) !important;
  opacity: 0.8 !important;
}

section.trusted .marquee-content img:hover{
  filter: grayscale(0%) brightness(1) !important;
  opacity: 1 !important;
}

@keyframes scroll{
  from{transform: translateX(0)}
  to{transform: translateX(-50%)}
}

section.trusted .marquee{
  overflow: hidden !important;
}
@keyframes scroll{
  from{transform: translateX(0)}
  to{transform: translateX(-50%)}
section.trusted .marquee{ overflow: hidden; }
}
/* SECTION PREMIUM */
section.trusted{
  padding: 80px 0;
  background: #0a0a0a;
  overflow: hidden;
  position: relative;
}
section.trusted h2{
  font-size: 28px;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 600;
  color: #fff;
}
section.trusted h2 span{
  background: linear-gradient(90deg, #00f5ff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* MARQUEE CONTAINER */
section.trusted .marquee{
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent); /* FADE KANAN KIRI */
}

section.trusted .marquee-content{
  display: flex;
  align-items: center;
  gap: 70px;
  width: max-content;
  animation: scroll 25s linear infinite;
}

/* LOGO CARD EFFECT */
section.trusted .marquee-content img{
  height: 55px;
  width: auto;
  flex-shrink: 0;
  padding: 15px 20px;
  background: rgba(255,255,255,0.05); /* KACA BURAM */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  filter: grayscale(100%) brightness(1.2);
  opacity: 0.6;
  transition: all 0.4s ease;
}

/* PAS HOVER ADA GLOW */
section.trusted .marquee-content img:hover{
  filter: grayscale(0%) brightness(1);
  opacity: 1;
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(0,245,255,0.3); /* GLOW BIRU */
  border-color: rgba(0,245,255,0.5);
}

@keyframes scroll{
  from{transform: translateX(0)}
  to{transform: translateX(-50%)}
section.trusted .marquee:hover .marquee-content{
  animation-play-state: paused;
}
}
.tech-marquee{
  padding: 80px 0;
  background: #0a0a0a;
  overflow: hidden;
}
.tech-marquee h2{
  font-size: 28px;
  text-align: center;
  margin-bottom: 50px;
  color: #fff;
  font-weight: 700;
}
.tech-marquee h2 span{
  background: linear-gradient(90deg, #00f5ff, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech-marquee .marquee-wrap{
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
}

.tech-marquee .marquee-track{
  display: flex !important;
  align-items: center !important;
  gap: 60px !important;
  width: max-content !important;
  animation: tech-scroll 20s linear infinite !important;
}

.tech-marquee .logo-item{
  flex-shrink: 0 !important;
  padding: 18px 25px !important;
  background: rgba(255,255,255,0.06) !important;
  border: 1px solid rgba(255,255,255,0.1) !important;
  border-radius: 18px !important;
  backdrop-filter: blur(12px) !important;
  transition: all 0.4s ease !important;
}

.tech-marquee .logo-item img{
  display: block !important;
  height: 50px !important;
  width: auto !important;
  max-width: none !important;
  filter: grayscale(100%) brightness(1.3) !important;
  opacity: 0.7 !important;
}

.tech-marquee .logo-item:hover{
  transform: translateY(-6px) !important;
  box-shadow: 0 0 30px rgba(168,85,247,0.4) !important;
  border-color: rgba(168,85,247,0.6) !important;
}
.tech-marquee .logo-item:hover img{
  filter: grayscale(0%) brightness(1) !important;
  opacity: 1 !important;
}

@keyframes tech-scroll{
  from{transform: translateX(0)}
  to{transform: translateX(-50%)}
.tech-marquee .marquee-wrap:hover .marquee-track{
  animation-play-state: paused !important;
}
}
.tech-marquee{ padding: 70px 20px; background: #0a0a0a; overflow: hidden; }
.tech-marquee h2{ font-size: 26px; text-align: center; margin-bottom: 40px; color: #fff; }
.tech-marquee h2 span{ background: linear-gradient(90deg, #00f5ff, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

.tech-marquee .marquee-wrap{ overflow: hidden; mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); }

.tech-marquee .marquee-track{
  display: flex !important;
  align-items: center !important;
  gap: 50px !important;
  width: max-content !important;
  animation: tech-scroll 18s linear infinite !important;
}

/* INI KUNCINYA - KITA KECILIN DIV NYA BUKAN IMG NYA */
.tech-marquee .logo-item{
  width: 90px !important;
  height: 90px !important;
  flex-shrink: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 15px !important;
  background: rgba(255,255,255,0.05) !important;
  border: 1px solid rgba(255,255,255,0.1) !important;
  border-radius: 20px !important;
  backdrop-filter: blur(10px) !important;
  transition: 0.3s !important;
}

/* IMG NYA KITA PAKSA MASUK KE DALAM DIV */
.tech-marquee .logo-item img{
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important; /* BIAR GA KE DISTORSI */
  filter: grayscale(100%) brightness(1.4) !important;
  opacity: 0.7 !important;
}

.tech-marquee .logo-item:hover{ transform: translateY(-5px); box-shadow: 0 0 25px rgba(168,85,247,0.4); }
.tech-marquee .logo-item:hover img{ filter: grayscale(0%) brightness(1); opacity: 1; }

@keyframes tech-scroll{ from{transform: translateX(0)} to{transform: translateX(-50%)} }
.tech-marquee .marquee-wrap:hover .marquee-track{ animation-play-state: paused !important; }
.tech-marquee{ padding: 70px 20px; background: #0a0a0a; overflow: hidden; }
.tech-marquee h2{ font-size: 26px; text-align: center; margin-bottom: 40px; color: #fff; font-weight: 700; }
.tech-marquee h2 span{ background: linear-gradient(90deg, #00f5ff, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

.tech-marquee .marquee-wrap{ overflow: hidden; mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); }

.tech-marquee .marquee-track{
  display: flex !important;
  align-items: center !important;
  gap: 50px !important;
  width: max-content !important;
  animation: tech-scroll 18s linear infinite !important;
}

.tech-marquee .logo-item{
  width: 80px !important; /* KITA KECILIN KOTAKNYA */
  height: 80px !important;
  flex-shrink: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 12px !important;
  background: rgba(255,255,255,0.06) !important;
  border: 1px solid rgba(255,255,255,0.12) !important;
  border-radius: 18px !important;
  backdrop-filter: blur(10px) !important;
  transition: 0.3s !important;
}

/* INI KUNCI NUKLIRNYA */
.tech-marquee .logo-item img{
  width: 100% !important;
  height: 100% !important;
  max-width: 60px !important; /* PAKSA GA BOLEH LEBIH DARI 60px */
  max-height: 60px !important;
  object-fit: contain !important;
  display: block !important;
  filter: grayscale(100%) brightness(1.4) !important;
  opacity: 0.7 !important;
}

.tech-marquee .logo-item:hover{ transform: translateY(-5px) !important; box-shadow: 0 0 25px rgba(168,85,247,0.4) !important; }
.tech-marquee .logo-item:hover img{ filter: grayscale(0%) brightness(1) !important; opacity: 1 !important; }

@keyframes tech-scroll{
  from{transform: translateX(0)}
  to{transform: translateX(-50%)}
}

.tech-marquee .marquee-wrap:hover .marquee-track{ animation-play-state: paused !important; }
