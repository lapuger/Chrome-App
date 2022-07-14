const soundApp = document.querySelector("#wrapper .dock .sound-app");
const calculatorApp = document.querySelector("#wrapper .dock .calculator-app");
const miniGameApp = document.querySelector("#wrapper .dock .mini-game-app");
const toDoApp = document.querySelector("#wrapper .dock .to-do-app");

const handlerDockMouseEnter = {    
    sound: function () {
        soundApp.src = "file:///C:/Users/admin/Documents/STUDY/src/images/sound_icon_hover.svg"; 
        this.style.opacity = "1";           
    },
    calculator: function () {
        calculatorApp.src = "file:///C:/Users/admin/Documents/STUDY/src/images/calculator_icon_hover.svg";
        this.style.opacity = "1";
    },
    miniGame: function () {
        miniGameApp.src = "file:///C:/Users/admin/Documents/STUDY/src/images/mini-game_icon_hover.svg";
        this.style.opacity = "1";
    },
    toDo: function () {
        toDoApp.src = "file:///C:/Users/admin/Documents/STUDY/src/images/to-do_icon_hover.svg";
        this.style.opacity = "1";
    }
};

const handlerDockMouseLeave = {
    sound: function () {
        soundApp.src = "file:///C:/Users/admin/Documents/STUDY/src/images/sound_icon.svg";
        this.style.opacity = "0.6";
    },
    calculator: function () {
        calculatorApp.src = "file:///C:/Users/admin/Documents/STUDY/src/images/calculator_icon.svg";
        this.style.opacity = "0.6";
    },
    miniGame: function () {
        miniGameApp.src = "file:///C:/Users/admin/Documents/STUDY/src/images/mini-game_icon.svg";
        this.style.opacity = "0.6";
    },
    toDo: function () {
        toDoApp.src = "file:///C:/Users/admin/Documents/STUDY/src/images/to-do_icon.svg";
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

