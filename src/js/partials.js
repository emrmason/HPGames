
export function getLocalStorage() {
    if(localStorage) {
        let score = localStorage.getItem("score");
        let moves = localStorage.getItem("moves");
        let game = localStorage.getItem("game");
    }
}

export function setLocalStorage(score, moves, game) {
    if(localStorage) {
        localStorage.setItem("score", score);
        localStorage.setItem("moves", moves);
        localStorage.setItem("game", game);
    }
}