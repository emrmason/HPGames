import { getLocalStorage } from "./partials";
let btnId;

getLocalStorage();
let score = localStorage.getItem("score");
let moves = localStorage.getItem("moves");
let accuracy = Math.ceil((score/moves)*100);
let game = localStorage.getItem("game");

document.getElementById("score-keeping").innerText = `Congratulations! You finished the ${game} game with ${accuracy}% accuracy!` 

if(game === "matching") {
    document.getElementById("score").innerText = `Matches: ${score}`;
    document.getElementById("moves").innerText = `Moves: ${moves}`;
};
if(game === "trivia") {
    document.getElementById("score").innerText = `Questions Correct: ${score}`;
    document.getElementById("moves").innerText = `Questions Asked: ${moves}`;
}

const buttons = document.querySelectorAll(".btn");
const buttonPressed = e => {
    btnId = e.target.id;
    if(btnId === "play"){
        window.location.assign(`../${game}/index.html`);
    } else {
        window.location.assign('../index.html');
    }
}
for(let button of buttons){
    button.addEventListener("click", buttonPressed);
}