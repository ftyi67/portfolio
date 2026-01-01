const welcome = document.getElementById('welcome');
const magicBtn = document.getElementById('magicBtn');

magicBtn.addEventListener('click', () => {
    welcome.style.color = "#00ffcc";
    welcome.style.transform = "scale(1.3)";
    
    setTimeout(() => {
        welcome.style.color = "white";
        welcome.style.transform = "scale(1)";
    }, 500);
});
