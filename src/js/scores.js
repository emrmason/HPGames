import { getLocalStorage } from "./partials";

getLocalStorage();
let score = localStorage.getItem("score");
let moves = localStorage.getItem("moves");
let accuracy = Math.ceil((score/moves)*100);
let game = localStorage.getItem("game");

document.getElementById("score-keeping").innerText = `Congratulations! You finished the ${game} game with ${accuracy}% accuracy!` 
