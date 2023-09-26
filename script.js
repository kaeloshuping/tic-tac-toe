const gameBoard = (() => {
    const gameBoardArray = [];

    for (let i = 1; i < 10; i++) {
        let box = document.createElement("div");
        box.id = i;
        box.className = "option-box";
        gameBoardArray.push(box);
    };

    return { gameBoardArray };
})();

const displayController = (() => {
    let gameContainer = document.getElementById("game-container");
    
    for (let i = 0; i < gameBoard.gameBoardArray.length; i++) {
        gameBoard.gameBoardArray[i].innerHTML = "TEST"
        gameContainer.appendChild(gameBoard.gameBoardArray[i]);
    };
})();