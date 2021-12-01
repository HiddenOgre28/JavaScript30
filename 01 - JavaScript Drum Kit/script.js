const playAudio = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Gets audio its by data-key attribute.
    const keys = document.querySelector(`div[data-key="${e.keyCode}"]`);  // Gets each key its by data-key attribute.

    switch(e.code) {
        case "KeyA":
        case "KeyS":
        case "KeyD":
        case "KeyF":
        case "KeyG":
        case "KeyH":
        case "KeyJ":
        case "KeyK":
        case "KeyL":
            keys.classList.add("playing");
            audio.play();
            audio.currentTime = 0;
            break;
    }
};

const removeClass = (e) => {
    const keys = document.querySelector(`div[data-key="${e.keyCode}"]`);
    keys.classList.remove("playing");
};

// Events
window.addEventListener("keydown", playAudio);
window.addEventListener("keyup", removeClass);



