const nowPlaying = document.querySelector("#wrapper .now-playing");
const dockPlayingIcon = document.querySelector(".sound-app");


function handlerMouseEnter() {
    nowPlaying.style.opacity = 1;
    nowPlaying.style.transition = "0.2s"
};
function handlerMouseLeave() {
    nowPlaying.style.opacity = 0.6;
    nowPlaying.style.transition = "0.2s";
};

nowPlaying.addEventListener("mouseenter", handlerMouseEnter);
nowPlaying.addEventListener("mouseleave", handlerMouseLeave);


const myAudio = document.getElementById("player");
const isPlaying = false;

function togglePlay() {
    const UNVISIBLE = "unvisible";
    const HIDDEN = "hidden"
    if (myAudio.paused) {
        myAudio.play();
        myAudio.loop = true;
        nowPlaying.classList.remove(HIDDEN);
    }
    else {
        myAudio.load();
        nowPlaying.classList.add(UNVISIBLE);

        function hidden() {
            nowPlaying.classList.add(HIDDEN);
            nowPlaying.classList.remove(UNVISIBLE);
        }
        setTimeout(hidden,200);
    }
};

dockPlayingIcon.addEventListener("click",togglePlay);
nowPlaying.addEventListener("click",togglePlay);

