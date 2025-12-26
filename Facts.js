// ------------------------------
// RADIO CLICK SOUND (HOVER FX)
// ------------------------------
const hoverSound = new Audio();
hoverSound.src = "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAA..."; 
// (Tiny click sound, base64 embedded — NO external link)

hoverSound.volume = 0.3;

// ------------------------------
// SELECT ALL FACT CARDS
// ------------------------------
const cards = document.querySelectorAll(".fact-card");

// ------------------------------
// HOVER SOUND + SCALE-UP EFFECT
// ------------------------------
cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});

// ------------------------------
// POP-IN ANIMATION ON PAGE LOAD
// ------------------------------
window.addEventListener("load", () => {

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150); // stagger effect
    });

});

// --------------------------------------
// RADIO CLICK SOUND FOR SWITCHER
// --------------------------------------
const modeClick = new Audio();
modeClick.src = "data:audio/mp3;base64,//uQxAAAAAAAAAAA..."; // tiny click sound
modeClick.volume = 0.4;

// --------------------------------------
// CATEGORY SWITCH TOGGLE
// --------------------------------------
const buttons = document.querySelectorAll(".mode-btn");
// cards already defined above


buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // sound
        modeClick.currentTime = 0;
        modeClick.play();

        // button highlight
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // category filtering
        let category = btn.getAttribute("data-category");

        cards.forEach(card => {
            if (card.getAttribute("data-category") === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// --------------------------------------
// EXPANDABLE CARD ON CLICK
// --------------------------------------
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("expanded");
    });
});

// --------------------------------------
// POP-IN LOAD ANIMATION
// --------------------------------------
window.addEventListener("load", () => {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 130);
    });
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
