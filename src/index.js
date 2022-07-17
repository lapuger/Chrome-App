
function handlerBgChange() {

    const now = new Date().getHours();    
    if ( 6 <= now && now <= 17 ) {
        document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/lapuger/Chrome-App/28866903ba377b7f7b391beccd80a0ef52ec4b8a/src/images/0.svg)";
        document.body.style.color = "#000";        
        document.querySelector("#wrapper .clock h2").style.color = "#000";
        document.querySelector(".quotes").style.fontWeight = "400";
        document.querySelector("#login input#asking-name").style.color = "#000";
        document.querySelector("#login hr").style.borderBottom = "1px solid #000";
        document.querySelector("#wrapper .clock").classList.add("dark");
        document.querySelector("#wrapper .clock").classList.remove("light");
        document.querySelector("#wrapper #to-do-form input").style.backgroundColor = "rgba(0,0,0,0.8)";
        document.querySelector("#to-do-form hr").style.borderBottom = "1px solid #000";

    } else {
        document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/lapuger/Chrome-App/28866903ba377b7f7b391beccd80a0ef52ec4b8a/src/images/1.svg)";
        document.body.style.color = "#fff";
        document.querySelector("#login h1").style.color = "#fff";
        document.querySelector("#wrapper .clock").classList.add("light");
        document.querySelector("#wrapper .clock").classList.remove("dark");
        document.querySelector("#wrapper .greetings h1").style.color = "#fff";
    }

}
window.addEventListener("load", handlerBgChange);



const soundApp = document.querySelector("#wrapper .dock .sound-app");
const miniGameApp = document.querySelector("#wrapper .dock .mini-game-app");

const handlerDockMouseEnter = {    
    sound: function () {
        soundApp.src = "https://raw.githubusercontent.com/lapuger/Chrome-App/66c28c476d50fd211b72e8c0ec92644dbf1c13e7/src/images/sound_icon_hover.svg"; 
        this.style.opacity = "1";           
    },

    miniGame: function () {
        miniGameApp.src = "https://raw.githubusercontent.com/lapuger/Chrome-App/66c28c476d50fd211b72e8c0ec92644dbf1c13e7/src/images/mini-game_icon_hover.svg";
        this.style.opacity = "1";
    },
};

const handlerDockMouseLeave = {
    sound: function () {
        soundApp.src = "https://raw.githubusercontent.com/lapuger/Chrome-App/66c28c476d50fd211b72e8c0ec92644dbf1c13e7/src/images/sound_icon.svg";
        this.style.opacity = "0.6";
    },
    miniGame: function () {
        miniGameApp.src = "https://raw.githubusercontent.com/lapuger/Chrome-App/66c28c476d50fd211b72e8c0ec92644dbf1c13e7/src/images/mini-game_icon.svg";
        this.style.opacity = "0.6";
    },
};

const handlerDockClick = {
    miniGame: function() {       
        document.getElementById("mini-game").classList.remove("hidden");
    }
}

soundApp.addEventListener("mouseenter", handlerDockMouseEnter.sound);
miniGameApp.addEventListener("mouseenter", handlerDockMouseEnter.miniGame);

soundApp.addEventListener("mouseleave", handlerDockMouseLeave.sound);
miniGameApp.addEventListener("mouseleave", handlerDockMouseLeave.miniGame);

miniGameApp.addEventListener("click", handlerDockClick.miniGame);


