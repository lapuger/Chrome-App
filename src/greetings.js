
const modal = document.getElementById("modal");
const login = document.getElementById("login");
const UNVISIBLE = "unvisible"
function greetings(e) {  
    e.preventDefault();
    
    const username = document.querySelector("#login input").value; 

    if(username === "") {
        alert("please write your name.");
    } else {    
    document.getElementById("wrapper").classList.remove("login");
    modal.classList.add(UNVISIBLE);
    login.classList.add(UNVISIBLE); 
    document.querySelector("#wrapper .greetings .username").innerText = `${username}.`;
    };
};
document.addEventListener("submit",greetings);

