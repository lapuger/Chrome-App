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
//clock 시간 표시



// clock setting
const setting = document.querySelector("#wrapper .clock .clock-setting");

function handlerMouseEnter() {
    setting.src = "https://raw.githubusercontent.com/lapuger/Chrome-App/213ff40399f525f2facf11c10e67b9cff0f77455/src/images/clock_setting_hover.svg";
};
function handlerMouseLeave() {
    setting.src = "https://raw.githubusercontent.com/lapuger/Chrome-App/213ff40399f525f2facf11c10e67b9cff0f77455/src/images/clock_setting.svg";
};
setting.addEventListener("mouseenter", handlerMouseEnter);
setting.addEventListener("mouseleave", handlerMouseLeave);


function handlerClicked() {
    setting.src = "https://raw.githubusercontent.com/lapuger/Chrome-App/213ff40399f525f2facf11c10e67b9cff0f77455/src/images/clock_setting_clicked.svg";
};
setting.addEventListener("click", handlerClicked);
// clock setting
