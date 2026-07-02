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

// ── TYPEWRITER (only runs if a #typewriter element exists on the page) ──
const tw = document.getElementById('typewriter');
if (tw) {
    const roles = ['Product Builder', 'Marketing Strategist', 'Operations Thinker', 'AI Explorer'];
    let ri = 0, ci = 0, deleting = false;

    function type() {
        const cur = roles[ri];
        if (deleting) {
            tw.textContent = cur.substring(0, ci - 1);
            ci--;
        } else {
            tw.textContent = cur.substring(0, ci + 1);
            ci++;
        }
        if (!deleting && ci === cur.length) { setTimeout(() => { deleting = true; }, 2200); }
        else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
        setTimeout(type, deleting ? 45 : 85);
    }
    setTimeout(type, 1300);
}
