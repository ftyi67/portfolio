window.addEventListener('DOMContentLoaded', () => {
    // Select the element
    const welcome = document.getElementById('welcome');

    // Fade-in + slide from top
    welcome.style.opacity = 0;
    welcome.style.transform = "translateY(-50px)";
    welcome.style.transition = "all 1.5s ease";

    // Animate entrance
    setTimeout(() => {
        welcome.style.opacity = 1;
        welcome.style.transform = "translateY(0)";
    }, 200);

    // Typing effect
    const text = "Welcome to My Portfolio!";
    welcome.textContent = ""; // clear initial text
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            welcome.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // 100ms delay per letter
        }
    }

    setTimeout(typeWriter, 1700); // start typing after fade-in
});

