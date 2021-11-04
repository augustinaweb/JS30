document.addEventListener("DOMContentLoaded", function(event) {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key#result

    let keyAudioPairs = {};
    const soundDivs = document.querySelectorAll("div.key[data-key]");
    // const soundKbd = soundDivs.querySelectorAll("kbd"); //veikia tik ant document
    const soundKbds = document.querySelectorAll(".key kbd");

    for (let i = 0; i < soundDivs.length; i++) {
        keyAudioPairs[soundKbds[i].innerHTML.toLowerCase()] = soundDivs[i].dataset.key;
    }

    console.log(keyAudioPairs);

    document.addEventListener('keydown', (e) => {    
        let key = e.key.toLowerCase();     // toLowerCase savaime konvertuoja i string'a
        if (key in keyAudioPairs) {  
            let keyValue = keyAudioPairs[key];
            let audio = document.querySelector(`audio[data-key = "${keyValue}"]`);
            let div = document.querySelector(`div[data-key = "${keyValue}"]`);                
            audio.currentTime = 0; // paemiau is sprendimo
            audio.play() ;
            div.classList.add("playing");
            if (e.repeat) {                     
                div.classList.add("repeating");
            }              
        }
    });

    document.addEventListener('keyup', (e) => {       
        let keyValue = keyAudioPairs[e.key.toLowerCase()];
        let div = document.querySelector(`div[data-key = "${keyValue}"]`);                
        if (div.classList.contains("playing") && !div.classList.contains("repeating")) {
            div.classList.remove("playing");
        }       
    });
}