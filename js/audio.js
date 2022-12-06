
    var musicState = true;
    var btnPlay = document.getElementById('bx-play');

    btnPlay.addEventListener("click", onClickPlay);

    function onClickPlay(){
        // let play = document.querySelector(".bx-play")
        let audio = document.querySelector('audio')

        if (musicState === true) {
            audio.play();
        } else {
            audio.pause();
        }
        musicState = !musicState
    }
