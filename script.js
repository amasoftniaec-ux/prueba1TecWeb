// --- Navegación on Scroll ---
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Highlight Active Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current) && current !== '') {
            link.classList.add('active');
        }
    });
});

// --- Configuración de Particles.js ---
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": ["#d4af37", "#ff7b00", "#00ffff"] },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.4, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#d4af37", "opacity": 0.15, "width": 1 },
            "move": { "enable": true, "speed": 1.2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "grab": { "distance": 180, "line_linked": { "opacity": 0.5 } },
                "push": { "particles_nb": 3 }
            }
        },
        "retina_detect": true
    });
}

// --- Micro-interacciones (Efecto 3D / Tilt) ---
const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Calcular rotación
        const tiltX = (y / rect.height) * -15; 
        const tiltY = (x / rect.width) * 15;
        
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.zIndex = 10;
        card.style.boxShadow = `0 15px 40px rgba(255, 123, 0, 0.2)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.5s ease-out, box-shadow 0.5s ease';
        card.style.boxShadow = 'none';
        card.style.zIndex = 1;
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});

// --- Prevención del submit del form ---
document.querySelector('.cta-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerHTML = "<i class='bx bx-check-circle'></i> ¡Aceptado!";
    btn.style.background = "var(--neon-cyan)";
    btn.style.color = "#000";
    btn.style.borderColor = "var(--neon-cyan)";
    btn.style.boxShadow = "0 0 20px var(--neon-cyan)";
});
