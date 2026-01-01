// Wait until HTML loads
window.addEventListener('DOMContentLoaded', () => {
    const welcome = document.getElementById('welcome');
    const sections = document.querySelectorAll('section');

    // Fade-in welcome + typing effect
    welcome.style.opacity = 0;
    welcome.style.transform = "translateY(-50px)";
    welcome.style.transition = "all 1s ease";

    setTimeout(() => {
        welcome.style.opacity = 1;
        welcome.style.transform = "translateY(0)";
        typeWriter(welcome, "Welcome to My Portfolio!", 100);
    }, 200);

    function typeWriter(element, text, delay) {
        element.textContent = "";
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, delay);
    }

    // Fade-in sections on scroll
    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < triggerBottom) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // initial check
});
