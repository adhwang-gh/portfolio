// ── SCROLL PROGRESS BAR ──
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
    const updateProgress = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        scrollProgress.style.width = pct + '%';
    };
    window.addEventListener('scroll', updateProgress);
    updateProgress();
}

// ── CARD TILT (mouse-tracking tilt on polaroid cards) ──
document.querySelectorAll('.polaroid-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ── SCROLL REVEAL ──
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── NAV SCROLL ──
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 24);
    });
}

// ── ACTIVE NAV ──
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const id = e.target.id;
            navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
        }
    });
}, { threshold: 0.35 });
document.querySelectorAll('section[id]').forEach(s => sectionObs.observe(s));

// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');
if (hamburger && navLinksEl) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinksEl.classList.toggle('open');
    });
    navLinksEl.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinksEl.classList.remove('open');
    }));
}

// ── TYPEWRITER (runs on every element with class "typewriter" and a data-words list) ──
document.querySelectorAll('.typewriter[data-words]').forEach((tw, idx) => {
    const words = tw.dataset.words.split('|').map(w => w.trim()).filter(Boolean);
    if (!words.length) return;
    let wi = 0, ci = 0, deleting = false;

    function type() {
        const cur = words[wi];
        if (deleting) {
            tw.textContent = cur.substring(0, ci - 1);
            ci--;
        } else {
            tw.textContent = cur.substring(0, ci + 1);
            ci++;
        }
        if (!deleting && ci === cur.length) { setTimeout(() => { deleting = true; }, 2200); }
        else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
        setTimeout(type, deleting ? 45 : 85);
    }
    setTimeout(type, 1300 + idx * 300);
});
