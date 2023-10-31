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
    let playerChoices = {
        row1: [],
        row2: [],
        row3: [],
    };
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
                console.log(playerOneOption + div.id);
                checkBoard(playerChoices, div.id, playerOneOption);
                playerOneTurn = false;
            } else {
                div.innerHTML = playerTwoOption;
                console.log(playerTwoOption + div.id);
                checkBoard(playerChoices, div.id, playerTwoOption);
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

function checkBoard (playerChoices, boxId, userOption) {
    // playerChoices["row" + boxId].splice(boxId - 1, 0, userOption);
    if (boxId === "1" || boxId === "2" || boxId === "3") {
        playerChoices.row1.splice(boxId - 1, 0, userOption);
        console.log("Row 1 = " + playerChoices.row1.join(""));
    }
    else if (boxId === "4" || boxId === "5" || boxId === "6") {
        playerChoices.row2.splice(boxId - 4, 0, userOption);
        console.log("Row 2 = " + playerChoices.row2.join(""));
    } else {
        playerChoices.row3.splice(boxId - 7, 0, userOption);
        console.log("Row 3 = " + playerChoices.row3.join(""));
    };
};