/**STORIE KIT**/
function viewstorie1() {
    let storie = document.querySelector('#slideDAW').classList;
    if (storie.contains('displayBlock')) {
        storie.remove('displayBlock');
        storie.add('displayNone');
    } else {
        storie.remove('displayNone');
        storie.add('displayBlock');
    }
}



/**DRUM KIT**/
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 150);
    }
}

function clicou(id) {
    playSound(id);
}


/**PLAY WHATSAPP**/
var playing = false;
function playWhatsapp() {
    playing = true;
    document.getElementById('player').play();
}

function pauseWhatsapp() {
    playing = false;
    document.getElementById('player').pause();
}

function togglePlayPause() {
    if (playing) {
        pauseWhatsapp();
    } else {
        playWhatsapp();
    }
}

// function rangeChanged(value) {
//     let player = document.getElementById('player')
//     player.currentTime = value / player.duration
//     console.log(value);
// }

document
    .getElementById('myRange')
    .addEventListener('change', (event) => {
        let player = document.getElementById('player')
        let value = event.target.value;
        player.currentTime = (value / 100) * player.duration
    });

document
    .getElementById('player')
    .addEventListener('timeupdate', (event) => {
        let range = document.getElementById('myRange')
        range.value = (event.target.currentTime / player.duration) * 100;
    });
