const time = document.querySelector("#wrapper .clock");

function handlerMouseEnter() {
    time.style.opacity = 1;
    time.style.transition = "0.2s"
    time.querySelector(".clock-setting").classList.remove("hidden");
};
function handlerMouseLeave() {
    time.style.opacity = 0.6;
    time.style.transition = "0.2s";
    time.querySelector(".clock-setting").classList.add("hidden");
};

time.addEventListener("mouseenter", handlerMouseEnter);
time.addEventListener("mouseleave", handlerMouseLeave);