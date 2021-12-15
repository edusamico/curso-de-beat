/**STORIE KIT**/
function viewstorie1() {
        if (document.querySelector('#slideDAW').classList.contains('displayBlock')) {
        document.querySelector('#slideDAW').classList.remove('displayBlock');
        document.querySelector('#slideDAW').classList.add('displayNone');
    } else {
        document.querySelector('#slideDAW').classList.remove('displayNone');
        document.querySelector('#slideDAW').classList.add('displayBlock');   
    }
}
/**DRUM KIT**/
document.body.addEventListener('keyup', (event)=> {
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

function clicou (id) {
        playSound(id);
}