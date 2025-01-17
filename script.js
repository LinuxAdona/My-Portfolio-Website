window.addEventListener("load", () => {
    document.body.style.overflow = "visible";
    const aboutSection = document.querySelector('.about');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
                observer.unobserve(aboutSection);
            }
        });
    });

    observer.observe(aboutSection);
});
