//clock 시간 표시

const clock = document.querySelector("#wrapper .clock h2");
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    };
    getClock();
    setInterval(getClock, 1000);


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
