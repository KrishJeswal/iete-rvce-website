// IETE-RVCE Website - Minimal, purposeful interactions
// Professional academic website with clean UX

document.addEventListener('DOMContentLoaded', function () {

    // === Mobile Navigation Toggle ===
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');

        // Animate hamburger icon
        const hamburgers = navToggle.querySelectorAll('.hamburger');
        hamburgers[0].style.transform = navMenu.classList.contains('active')
            ? 'rotate(45deg) translateY(7px)'
            : 'none';
        hamburgers[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        hamburgers[2].style.transform = navMenu.classList.contains('active')
            ? 'rotate(-45deg) translateY(-7px)'
            : 'none';
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');

            // Reset hamburger icon
            const hamburgers = navToggle.querySelectorAll('.hamburger');
            hamburgers[0].style.transform = 'none';
            hamburgers[1].style.opacity = '1';
            hamburgers[2].style.transform = 'none';
        });
    });

    // === Navbar Scroll Effect ===
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // === Active Navigation Link ===
    // Update active link based on scroll position
    const sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // === Smooth Scroll for Anchor Links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === Subtle Scroll Animations ===
    // Only for cards - minimal, purposeful animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe highlight cards for subtle entrance
    const cards = document.querySelectorAll('.highlight-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // === Stats Counter Animation ===
    // Animate numbers when stats section comes into view
    const statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');

        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + '+';
                }
            };

            updateCounter();
        });
    }

    // === Interactive 3D Map Effect ===
    // Now handled by globe.js using Three.js for proper 3D wireframe rendering
});
