
// script.js - Interactive 3D Logo and Scroll Effects
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    const cube = document.querySelector(".cube");
    const elements = document.querySelectorAll(".fade-in");

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(el => observer.observe(el));

    // Interactive 3D logo rotation
    cube.addEventListener("mousemove", (e) => {
        const rotationX = (e.clientY / window.innerHeight - 0.5) * 360;
        const rotationY = (e.clientX / window.innerWidth - 0.5) * 360;
        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });

    cube.addEventListener("mouseleave", () => {
        cube.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});
