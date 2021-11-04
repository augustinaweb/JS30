// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

document.addEventListener("DOMContentLoaded", function(e) {
    const media = document.querySelector(".player__video");

    const controls = document.querySelector(".player__controls");
    const progress = document.querySelector(".progress");
    const progressBar = document.querySelector(".progress__filled");
    const playPauseButton = document.querySelector(".player__button");
    const volumeSlider = document.querySelector("input[name='volume']");
    const playbackRateSlider = document.querySelector("input[name='playbackRate']");
    const rwdButton = document.querySelector("button[data-skip='-10']");
    const fwdButton = document.querySelector("button[data-skip='25']");
   
    media.removeAttribute("controls");
    controls.style.visibility = "visible"; 
    
    playPauseButton.addEventListener("click", playPauseMedia);
    function playPauseMedia() {
        if(media.paused) {
            // could have used instead icon with font awesome or HeydingsControlsRegular font
            playPauseButton.innerHTML = "&#9612 &#9612";
            playPauseButton.style.fontSize = "10px";
            media.play();           
        } else {
            playPauseButton.innerHTML = "►";
            playPauseButton.style.fontSize = "14px";
            media.pause();            
        }
    }

    let progressPercentage = 0;
    progressBar.setAttribute("style", `flex-basis: ${progressPercentage}%`);
    
    media.addEventListener("timeupdate", handleProgressBar);
    function handleProgressBar() {
        progressPercentage = media.currentTime / media.duration * 100;
        progressBar.setAttribute("style", `flex-basis: ${progressPercentage}%`);
    }    
   
    progress.addEventListener("click", handleMediaProgress);
    function handleMediaProgress(e) {
        let mediaLocation = media.duration * (e.offsetX / progress.clientWidth);
        media.currentTime = mediaLocation;       
    }

    media.addEventListener("ended", stopMedia);
    function stopMedia() {
        playPauseButton.innerHTML = "►";
        playPauseButton.style.fontSize = "14px";
        media.pause();  
        media.currentTime = 0;      
    }

    volumeSlider.addEventListener("input", handleVolume);
    function handleVolume() {
        media.volume = volumeSlider.value;
    }

    playbackRateSlider.addEventListener("input", handlePlaybackRate);
    function handlePlaybackRate() {
        media.playbackRate = playbackRateSlider.value;
    }

    rwdButton.addEventListener("click", mediaJumpBackward);
    function mediaJumpBackward() {
        let currentTime = media.currentTime;
        media.currentTime = currentTime - 10;
    }

    fwdButton.addEventListener("click", mediaJumpForward);
    function mediaJumpForward() {
        let currentTime = media.currentTime;
        media.currentTime = currentTime + 25;
    }

    document.addEventListener("keypress", handleFullScreen, false);
    function handleFullScreen(e) {
        if (e.key === " ") {
            toggleFullScreen();
        }        
    }

    function toggleFullScreen() {
        if (!document.fullscreenElement && media.requestFullscreen) {
            media.requestFullscreen();
        } else {
            // jei egzistuoja ta funkcija
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

});