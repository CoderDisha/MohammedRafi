// === SELECT ELEMENTS ===
const playButtons = document.querySelectorAll('.play-btn');
const popup = document.getElementById('player-popup');
const ytPlayer = document.getElementById('ytplayer');
const closeBtn = document.getElementById('closePlayer');

// === OPEN PLAYER POPUP ===
playButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const link = btn.getAttribute('data-link');

        // Set YouTube link
        ytPlayer.src = link + "?autoplay=1";

        // Show popup
        popup.style.display = 'flex';

        // Start vinyl spin ONLY for clicked card
        const vinyl = btn.parentElement.querySelector('.vinyl');
        vinyl.classList.add('spin');
    });
});

// === CLOSE PLAYER POPUP ===
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    ytPlayer.src = ""; // Stop video

    // Stop ALL vinyls from spinning
    document.querySelectorAll('.vinyl').forEach(v => v.classList.remove('spin'));
});

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
