window.addEventListener("load", () => {
    document.body.style.overflow = "visible";
    const sections = document.querySelectorAll('.section');
    
    // Intersection Observer for initial animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll with animations
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            document.querySelectorAll('.navbar ul li a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            target.classList.remove('visible');
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => target.classList.add('visible'), 500);
        });
    });
});
