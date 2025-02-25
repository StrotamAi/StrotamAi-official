
// script.js - Simple JavaScript animations
document.addEventListener("DOMContentLoaded", () => {
    const cube = document.querySelector(".cube");
    let rotationX = 0;
    let rotationY = 0;

    const rotateCube = () => {
        rotationX += 1;
        rotationY += 1;
        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        requestAnimationFrame(rotateCube);
    };

    rotateCube();
});
