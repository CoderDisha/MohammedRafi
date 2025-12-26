// === SMOOTH TILT EFFECT ON HOVER ===
const cards = document.querySelectorAll('.photo-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const tiltX = (y - rect.height / 2) / 20;
        const tiltY = (rect.width / 2 - x) / 20;

        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.08)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// === OPTIONAL: SOFT FLOATING ANIMATION ===
setInterval(() => {
    cards.forEach(card => {
        const randX = (Math.random() * 4) - 2;
        const randY = (Math.random() * 4) - 2;

        card.style.transform = `translate(${randX}px, ${randY}px)`;

        setTimeout(() => {
            card.style.transform = '';
        }, 800);
    });
}, 3000);


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
