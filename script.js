// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navButtons = document.querySelector('.nav-buttons');

if (navToggle && navButtons) {
    navToggle.addEventListener('click', () => {
        navButtons.classList.toggle('active');
        
        // Animation for hamburger icon
        navToggle.classList.toggle('active');
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.toggle('change');
        });
    });
}

// Close mobile menu when clicking on a button
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (navButtons && navButtons.classList.contains('active')) {
            navButtons.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.classList.remove('change');
            });
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.info-card, .work-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add hover effect to work cards
document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});

// CTA Button click
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Role slide animation
const roles = ['Full Stack Developer', 'Flutter Developer'];
let currentRoleIndex = 0;
const roleChanger = document.getElementById('role-changer');

if (roleChanger) {
    setInterval(() => {
        roleChanger.style.transform = 'translateY(20px)';
        roleChanger.style.opacity = '0';
        
        setTimeout(() => {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            roleChanger.textContent = roles[currentRoleIndex];
            roleChanger.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                roleChanger.style.transform = 'translateY(0)';
                roleChanger.style.opacity = '1';
            }, 50);
        }, 500);
    }, 4000);
}

console.log('GridX Portfolio loaded successfully! 🚀');
