const nowPlaying = document.querySelector("#wrapper .now-playing");

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