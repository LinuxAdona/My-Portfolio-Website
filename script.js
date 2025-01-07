window.addEventListener("load", () => {
    document.body.style.overflow = "visible";
    const aboutSection = document.querySelector('.about');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible'); // Add the visible class
                observer.unobserve(aboutSection); // Stop observing after it becomes visible
            }
        });
    });

    observer.observe(aboutSection);
});
