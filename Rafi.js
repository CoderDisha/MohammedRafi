// === LOADER + STATIC SOUND ===
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const main = document.getElementById("main");
    const staticSound = document.getElementById("staticSound");

    // Play static SFX
    staticSound.play().catch(() => {});

    // Fade out loader
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = "none";
            main.style.display = "block";
        }, 500);
    }, 1500);
});

// === FLOATING GOLD PARTICLES MOVEMENT ===
const particles = document.getElementById("particles");
let moveX = 0;
let moveY = 0;

document.addEventListener("mousemove", (e) => {
    moveX = (e.clientX / window.innerWidth) * 20;
    moveY = (e.clientY / window.innerHeight) * 20;
    particles.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// === RADIO WOBBLE ON HOVER ===
const radio = document.querySelector('.radio-img');

radio.addEventListener('mouseenter', () => {
    radio.style.animation = 'float 1s infinite ease-in-out, wobble 0.3s infinite';
});

radio.addEventListener('mouseleave', () => {
    radio.style.animation = 'float 3s infinite ease-in-out';
});

// Extra wobble animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes wobble {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(2deg); }
    100% { transform: rotate(-2deg); }
}`;
document.head.appendChild(style);

// ------------------------------
// GOLD PARTICLES BACKGROUND (1000 particles for richer effect)
// ------------------------------
const body = document.body;
const particleCount = 1000;
for(let i=0;i<particleCount;i++){
    const p = document.createElement('div');
    p.classList.add('gold-particle');
    p.style.left = Math.random()*100+'%';
    p.style.top = Math.random()*100+'%';
    p.style.width = p.style.height = (Math.random()*4+2)+'px';
    p.style.opacity = Math.random()*0.6;
    p.style.animationDuration = (Math.random()*5+3)+'s';
    body.appendChild(p);
}
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

// Restore music state from localStorage
if(localStorage.getItem('musicTime')){
    bgMusic.currentTime = parseFloat(localStorage.getItem('musicTime'));
}
if(localStorage.getItem('musicPlaying') === 'true'){
    bgMusic.play();
    musicBtn.textContent = "🎵 Pause Music";
}

// Play/pause toggle
musicBtn.addEventListener('click', () => {
    if(bgMusic.paused){
        bgMusic.play();
        musicBtn.textContent = "🎵 Pause Music";
        localStorage.setItem('musicPlaying', 'true');
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🎵 Play Music";
        localStorage.setItem('musicPlaying', 'false');
    }
});

// Save current time every second
setInterval(() => {
    localStorage.setItem('musicTime', bgMusic.currentTime);
}, 1000);
