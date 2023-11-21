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
        column1: [],
        column2: [],
        column3: [],
        diagonalMain: [],
        diagonalSec: [],
    };
    
    let player1Div = document.getElementById("player-1-name");
    let player2Div = document.getElementById("player-2-name");
    let headerSubContainer = document.getElementById("game-header-sub-container");
    playBtn.addEventListener("click", () => {  
        let playersNodeList = document.querySelectorAll(".players");
        players = players(playersNodeList);
        playerOneOption = players.playersOptions[0];
        playerTwoOption = players.playersOptions[1];
        playerOneTurn = true;
        console.log(players.player1);
        console.log(players.player2);
        if (players.player1 !== "" && players.player2 !== "") {
            player1Div.innerHTML = players.player1;
            player2Div.innerHTML = players.player2;
            playerOneOption = players.playersOptions[0];
            playerTwoOption = players.playersOptions[1];
            playerOneTurn = true;
            headerSubContainer.style.display = "flex";
            form.style.display = "none";       
        };
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
    let player1 = playersArray[0].value.toUpperCase();
    let player2 = playersArray[1].value.toUpperCase();
    let playersOptions = ["X", "O"];
    return { player1, player2, playersOptions };
};

function checkBoard (playerChoices, boxId, userOption) {
    let winnerText = document.getElementById("winner-text");
    if (boxId === "1" || boxId === "2" || boxId === "3") {
        if (boxId === "1") {
            playerChoices.column1.splice(boxId - 1, 0, userOption);
            playerChoices.row1.splice(boxId - 1, 0, userOption);
            playerChoices.diagonalMain.splice(boxId - 1, 0, userOption);
            console.log("Row 1 = " + playerChoices.row1.join(""));
            console.log("Column 1 = " + playerChoices.column1.join(""));
            console.log("Diagonal Main = " + playerChoices.diagonalMain.join(""));
        }
        else if (boxId === "2") {
            playerChoices.column2.splice(boxId - 2, 0, userOption);
            playerChoices.row1.splice(boxId - 1, 0, userOption);
            console.log("Row 1 = " + playerChoices.row1.join(""));
            console.log("Column 2 = " + playerChoices.column2.join(""));
        }
        else {
            playerChoices.row1.splice(boxId - 1, 0, userOption);
            playerChoices.column3.splice(boxId - 3, 0, userOption);
            playerChoices.diagonalSec.splice(boxId - 3, 0, userOption);
            console.log("Row 1 = " + playerChoices.row1.join(""));
            console.log("Column 3 = " + playerChoices.column3.join(""));
            console.log("Diagonal Sec = " + playerChoices.diagonalSec.join(""));
        };
    }
    else if (boxId === "4" || boxId === "5" || boxId === "6") {
        if (boxId === "4") {
            playerChoices.column1.splice(boxId - 3, 0, userOption);
            playerChoices.row2.splice(boxId - 4, 0, userOption);
            console.log("Column 1 = " + playerChoices.column1.join(""));
            console.log("Row 2 = " + playerChoices.row2.join(""));
        } else if (boxId === "5") {
            playerChoices.column2.splice(boxId - 4, 0, userOption);
            playerChoices.row2.splice(boxId - 4, 0, userOption);
            if (playerChoices.diagonalMain.length < 3 || playerChoices.diagonalSec.length < 3) {
                console.log("changing order");
                playerChoices.diagonalMain.splice(boxId - 5, 0, userOption);
                playerChoices.diagonalSec.splice(boxId - 5, 0, userOption);
            } else {
                playerChoices.diagonalMain.splice(boxId - 4, 0, userOption);
                playerChoices.diagonalSec.splice(boxId - 4, 0, userOption);
            }
            console.log("Row 2 = " + playerChoices.row2.join(""));
            console.log("Column 2 = " + playerChoices.column2.join(""));
            console.log("Diagonal Sec = " + playerChoices.diagonalSec.join(""));
            console.log("Diagonal Main = " + playerChoices.diagonalMain.join(""));
        } else {
            playerChoices.column3.splice(boxId - 5, 0, userOption);
            playerChoices.row2.splice(boxId - 4, 0, userOption);
            console.log("Column 3 = " + playerChoices.column3.join(""));
            console.log("Row 2 = " + playerChoices.row2.join(""));
        };
    } else {
        if (boxId === "7") {
            playerChoices.column1.splice(boxId - 6, 0, userOption);
            playerChoices.row3.splice(boxId - 7, 0, userOption);
            playerChoices.diagonalSec.splice(boxId - 5, 0, userOption);
            console.log("Row 3 = " + playerChoices.row3.join(""));
            console.log("Column 1 = " + playerChoices.column1.join(""));
            console.log("Diagonal Sec = " + playerChoices.diagonalSec.join(""));
        } else if (boxId === "8") {
            playerChoices.column2.splice(boxId - 6, 0, userOption);
            playerChoices.row3.splice(boxId - 7, 0, userOption);
            console.log("Row 3 = " + playerChoices.row3.join(""));
            console.log("Column 2 = " + playerChoices.column2.join(""));
        } else {
            playerChoices.column3.splice(boxId - 7, 0, userOption);
            playerChoices.row3.splice(boxId - 7, 0, userOption);
            playerChoices.diagonalMain.splice(boxId - 7, 0, userOption);
            console.log("Row 3 = " + playerChoices.row3.join(""));
            console.log("Column 3 = " + playerChoices.column3.join(""));
            console.log("Diagonal Main = " + playerChoices.diagonalMain.join(""));
        };
    };

    if (playerChoices.row1.join("") === "XXX" || playerChoices.row2.join("") === "XXX" 
        || playerChoices.row3.join("") === "XXX") {
        winnerText.innerHTML = players.player1 + " wins!!!";
    } else if (playerChoices.row1.join("") === "OOO" || playerChoices.row2.join("") === "OOO" 
        || playerChoices.row3.join("") === "OOO") {
        winnerText.innerHTML = players.player2 + " wins!!!";
    } else if (playerChoices.column1.join("") === "XXX" || playerChoices.column2.join("") === "XXX" 
        || playerChoices.column3.join("") === "XXX") {
        winnerText.innerHTML = players.player1 + " wins!!!";
    } else if (playerChoices.column1.join("") === "OOO" || playerChoices.column2.join("") === "OOO" 
        || playerChoices.column3.join("") === "OOO") {
        winnerText.innerHTML = players.player2 + " wins!!!";
    } else if (playerChoices.diagonalMain.join("") === "XXX" 
        || playerChoices.diagonalSec.join("") === "XXX") {
        winnerText.innerHTML = players.player1 + " wins!!!";
    } else if (playerChoices.diagonalMain.join("") === "OOO" 
        || playerChoices.diagonalSec.join("") === "OOO") {
        winnerText.innerHTML = players.player2 + " wins!!!";
    };
};