const gameBoard = (() => {
    const gameBoardArray = [];
    let gameContainer = document.getElementById("game-container");

    for (let i = 1; i < 10; i++) {
        let box = document.createElement("div");
        box.id = i;
        box.className = "option-box";
        gameBoardArray.push(box);
    };

    for (let i = 0; i < gameBoardArray.length; i++) {
        gameContainer.appendChild(gameBoardArray[i]);
    };

    return { gameBoardArray };
})();

const displayController = (() => {
    let optionBox = document.querySelectorAll(".option-box");
    let playBtn = document.getElementById("play-btn");
    let form = document.querySelector("form");
    let playerOneOption = "";
    let playerTwoOption = "";
    let playerOneTurn = "";
    playBtn.addEventListener("click", () => {
        let playersNodeList = document.querySelectorAll(".players");
        players = players(playersNodeList);
        playerOneOption = players.playersOptions[0];
        playerTwoOption = players.playersOptions[1];
        playerOneTurn = true;
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        });
    })
    optionBox.forEach((div) => {
        div.addEventListener("click", () => {
            if (div.innerHTML === playerOneOption || div.innerHTML === playerTwoOption) {
                console.log("Error, this box has already been clicked");
            } 
            else if (playerOneTurn === true) {
                div.innerHTML = playerOneOption;
                playerOneTurn = false;
            } else {
                div.innerHTML = playerTwoOption;
                playerOneTurn = true;
            };            
        });
    });
})();

function players (playersArray) {
    let player1 = playersArray[0].value;
    let player2 = playersArray[1].value;
    let playersOptions = ["X", "O"];
    return { player1, player2, playersOptions };
};