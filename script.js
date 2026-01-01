window.addEventListener('DOMContentLoaded', () => {
    const welcome = document.getElementById('welcome');
    const sections = document.querySelectorAll('section');

    // Fade-in + typing
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
document.addEventListener("DOMContentLoaded", () => {
    // كنقلبو على كاع الـ sections والـ li
    const elements = document.querySelectorAll('section, li');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // إلا بان العنصر فالفيديو (Viewport)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 }); // كيبدا ملي كيبان 10% من العنصر

    elements.forEach(el => observer.observe(el));
});
//JFBVJ
document.addEventListener("DOMContentLoaded", () => {
    // كنجبدو كاع الـ li اللي كاينين فالموقع
    const listItems = document.querySelectorAll("li");

    listItems.forEach(item => {
        // كنأكدو أن كل عنصر عندو transition باش الحركة تكون رطبة
        item.style.transition = "all 0.3s ease";
        
        // إلا بغيتي تزيد شي حاجة بالـ JS فاش يدوز الكيرسور
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateX(-15px)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateX(0)";
        });
    });
});
