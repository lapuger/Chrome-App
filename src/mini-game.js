const generate = document.querySelector(".generate");
const MAX_NUMBER = "max-number";
const GUESS_NUMBER = "guess-number";

function handlerMaxNumberSubmit(e) {
    e.preventDefault();

    const maxNumberValue = document.getElementById(MAX_NUMBER).value;
    localStorage.setItem(MAX_NUMBER, maxNumberValue);
}

function handlerGuessNumberSubmit(e) {
    e.preventDefault();

    const maxNumberSet = localStorage.getItem(MAX_NUMBER);
    const guessNumberValue = document.getElementById(GUESS_NUMBER).value;
    const result = document.querySelector("#result");

    if (parseInt(guessNumberValue) > parseInt(maxNumberSet)) {
        alert("The number is too high.");
    } else if (guessNumberValue === "") {
        alert("Please choose your number.");
    } else {
        localStorage.setItem(GUESS_NUMBER, guessNumberValue);

        const guessNumberSet = localStorage.getItem(GUESS_NUMBER);
        const chosenNumber = document.querySelector("#chosen");

        chosenNumber.classList.remove("hidden");
        chosenNumber.querySelector(
            "#user"
        ).innerText = `you chose: ${guessNumberSet},`;

        Math.floor(Math.random() * maxNumberSet);
        const machineChoseNumber = Math.floor(Math.random() * maxNumberSet) + 1;

        chosenNumber.querySelector(
            "#machine"
        ).innerText = `the machine chose: ${machineChoseNumber}`;

        if (parseInt(guessNumberSet) === machineChoseNumber) {
            result.innerText = `You Won!`;
            result.style.color = "#FF1744";
            document.getElementById("finish").classList.remove("hidden");
        } else {
            result.innerText = `You Lost`;
            result.style.color = "#000";            
        }
    }
}

generate.addEventListener("submit", handlerMaxNumberSubmit);
generate.addEventListener("submit", handlerGuessNumberSubmit);

function close(e) {
    e.preventDefault();
    document.getElementById("mini-game").classList.add("hidden");
    document.getElementById("finish").classList.add("hidden");
}

document.querySelector(".close button").addEventListener("click",close);
document.querySelector("#finish").addEventListener("click",close);