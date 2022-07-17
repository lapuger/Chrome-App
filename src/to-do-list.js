/*
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

//todo shortcut mouse event
*/


const toDoForm = document.getElementById("to-do-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("to-do-list");
const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(e) {    
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span); //append는 항상 마지막에    
    toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}


let hover = document.querySelectorAll('li');

for (let elem of hover) {
  elem.addEventListener('mouseenter', () => {
    elem.style.opacity = '1' 
    elem.style.transition = '0.5s'   
    elem.querySelector("button").style.background = 'rgba(255,255,255,0.5)'
    elem.querySelector("button").style.transition = '0.5s'    
  })
  elem.addEventListener('mouseleave', () => {
    elem.style.opacity = '0.6'  
    elem.style.transition = '0.5s'  
    elem.querySelector("button").style.background = 'transparent'
    elem.querySelector("button").style.transition = '0.5s'    
  })
};

