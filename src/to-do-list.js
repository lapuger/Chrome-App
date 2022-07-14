const toDoShortCut = document.querySelector("#wrapper .to-do-shortcut");

function handlerMouseEnter() {
    toDoShortCut.style.opacity = 1;
    toDoShortCut.style.transition = "0.2s"
};
function handlerMouseLeave() {
    toDoShortCut.style.opacity = 0.6;
    toDoShortCut.style.transition = "0.2s";
};

toDoShortCut.addEventListener("mouseenter", handlerMouseEnter);
toDoShortCut.addEventListener("mouseleave", handlerMouseLeave);