/**DRUM KIT**/
document.body
.addEventListener('keyup', (event)=> {
    playSound(event.code.toLowerCase() );
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();        
    }

    if(keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 150);
    }
}

function clickBeat (id) {
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
    };
    changeBtnPlayPause ();
}

document
.querySelector('#myRange')
.addEventListener('change', 
function () {
    let player = document.querySelector('#player');
    let value = this.value;
    player.currentTime = (value / 100) * player.duration;
});
 
document
.querySelector("#player")
.addEventListener ('timeupdate', 
function (){
    let range = document.querySelector ('#myRange');
    range.value = (this.currentTime / player.duration) * range.max;
}
);

function changeBtnPlayPause () {
    if (playing) {
        document.querySelector('#st1img').setAttribute('src', 'assets/images/SVG/img1wpp2.svg');
            } else {
                document.querySelector('#st1img').setAttribute('src', 'assets/images/SVG/img1wpp.svg');
            }
        };