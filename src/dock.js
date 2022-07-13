const soundApp = document.querySelector("#wrapper .dock .sound-app");
const calculatorApp = document.querySelector("#wrapper .dock .calculator-app");
const miniGameApp = document.querySelector("#wrapper .dock .mini-game-app");
const toDoApp = document.querySelector("#wrapper .dock .to-do-app");

const handlerDockMouseEnter = {    
    sound: function () {
        //TransitionEvent() 알아볼 것
        soundApp.src = "https://github.com/lapuger/Chrome-App/blob/master/src/images/sound_icon_hover.svg"; 
        this.style.opacity = "1";           
    },
    calculator: function () {
        calculatorApp.src = "https://github.com/lapuger/Chrome-App/blob/master/src/images/calculator_icon_hover.png";
        this.style.opacity = "1";
    },
    miniGame: function () {
        miniGameApp.src = "https://github.com/lapuger/Chrome-App/blob/master/src/images/mini-game_icon_hover.svg";
        this.style.opacity = "1";
    },
    toDo: function () {
        toDoApp.src = "https://github.com/lapuger/Chrome-App/blob/master/src/images/to-do_icon_hover.svg";
        this.style.opacity = "1";
    }
};

const handlerDockMouseLeave = {
    sound: function () {
        soundApp.src = "https://github.com/lapuger/Chrome-App/blob/master/src/images/sound_icon.svg";
        this.style.opacity = "0.6";
    },
    calculator: function () {
        calculatorApp.src = "https://github.com/lapuger/Chrome-App/blob/master/src/images/calculator_icon.svg";
        this.style.opacity = "0.6";
    },
    miniGame: function () {
        miniGameApp.src = "https://github.com/lapuger/Chrome-App/blob/master/src/images/mini-game_icon.svg";
        this.style.opacity = "0.6";
    },
    toDo: function () {
        toDoApp.src = "https://github.com/lapuger/Chrome-App/blob/master/src/images/to-do_icon.svg";
        this.style.opacity = "0.6";
    }
};

soundApp.addEventListener("mouseenter", handlerDockMouseEnter.sound);
calculatorApp.addEventListener("mouseenter", handlerDockMouseEnter.calculator);
miniGameApp.addEventListener("mouseenter", handlerDockMouseEnter.miniGame);
toDoApp.addEventListener("mouseenter", handlerDockMouseEnter.toDo);

soundApp.addEventListener("mouseleave", handlerDockMouseLeave.sound);
calculatorApp.addEventListener("mouseleave", handlerDockMouseLeave.calculator);
miniGameApp.addEventListener("mouseleave", handlerDockMouseLeave.miniGame);
toDoApp.addEventListener("mouseleave", handlerDockMouseLeave.toDo);

