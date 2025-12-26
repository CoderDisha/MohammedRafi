// ------------------------------
// FADE-IN ON SCROLL
// ------------------------------
const timelineItems = document.querySelectorAll('.timeline-item');

function checkTimeline() {
    const triggerBottom = window.innerHeight * 0.85;
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if(itemTop < triggerBottom){
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
        }
    });
}

window.addEventListener('scroll', checkTimeline);
window.addEventListener('load', checkTimeline);

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

// ------------------------------
// TYPEWRITER MINI-FACTS
// ------------------------------
const miniFacts = document.querySelectorAll('.mini-fact');

function typeWriter(element, text, index = 0) {
    if(index < text.length){
        element.textContent += text.charAt(index);
        setTimeout(()=>typeWriter(element, text, index+1),50);
    }
}

window.addEventListener('scroll', () => {
    miniFacts.forEach(fact => {
        const rect = fact.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50 && fact.textContent === ''){
            const text = fact.getAttribute('data-fact');
            typeWriter(fact,text);
        }
    });
});

// ------------------------------
// VINYL HOVER SOUND
// ------------------------------
const vinylSound = new Audio();
vinylSound.src = "data:audio/mp3;base64,//uQx..."; // embedded small click sound
vinylSound.volume = 0.3;

document.querySelectorAll('.vinyl-hover').forEach(vinyl => {
    vinyl.addEventListener('mouseenter', () => {
        vinylSound.currentTime = 0;
        vinylSound.play();
    });
});

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
