
const modal = document.getElementById("modal");
const login = document.getElementById("login");
const UNVISIBLE = "unvisible";
const HIDDEN = "hidden"






const usernameKey = localStorage.getItem("username");

if (usernameKey === null) {
    function greetings(e) {    
        e.preventDefault();
        const username = document.querySelector("#login input").value;
    
        if (username === "") {
            alert("please write your name.");
        } else {
            document.getElementById("wrapper").classList.remove("login");
            modal.classList.add(UNVISIBLE);
            login.classList.add(UNVISIBLE);
            document.querySelector("#wrapper .greetings .username").innerText = `${username}.`;
            localStorage.setItem("username", username); 
            function hidden() {
                modal.classList.add(HIDDEN);
            login.classList.add(HIDDEN);
                modal.classList.remove(UNVISIBLE);
            login.classList.remove(UNVISIBLE);
            }
            setTimeout(hidden,200);
        };
    
    };
}else{
    document.getElementById("wrapper").classList.remove("login");
    modal.classList.add(HIDDEN);
    login.classList.add(HIDDEN);
    document.querySelector("#wrapper .greetings .username").innerText = `${usernameKey}.`;   
};

login.addEventListener("submit", greetings);
