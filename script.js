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
    optionBox.forEach((div) => {
        div.addEventListener("click", () => {
            if (div.innerHTML === "X") {
                console.log("Error, this box has already been clicked");
            } else {
                div.innerHTML = "X";
            };            
        });
    });
})();

// const personFactory = (playerNumber, playerOption) {

// }