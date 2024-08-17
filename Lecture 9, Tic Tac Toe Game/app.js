const print = console.dir

let boxes = document.querySelector(".box")
let reset = document.querySelector("#reset")
let winner = document.querySelector(".winner-content")
let newGame = document.querySelector("#new-game")

let turnX = true
let winPatterns =
    [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];

Array.from(boxes.children).forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.style.backgroundColor = "red"
            box.textContent = "X"
        }
        else {
            box.textContent = "O"
            box.style.backgroundColor = "green"
        }
        turnX = !turnX
        box.disabled = true
        checkWinner()
    })
});


const gameWinnerMsg = (WinnwrSymble) => {
    winner.classList.remove("hide")
    let winnerTxt = document.querySelector("#winner")
    winnerTxt.textContent = `Player ${WinnwrSymble} wins!`
    reset.classList.add("hide")
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let a = pattern[0], b = pattern[1], c = pattern[2]

        let box1 = boxes.children[a].textContent
        let box2 = boxes.children[b].textContent
        let box3 = boxes.children[c].textContent

        if (box1 && box1 === box2 && box1 === box3) {
            let winner = `Winner is ${box1}`
            print(winner)
            gameWinnerMsg(box1)
            Array.from(boxes.children).forEach((box) => {
                box.disabled = true
            })
            // break
        }
    }
}

const resetORnewGame = () => {
    Array.from(boxes.children).forEach((box) => {
        turnX = true
        box.textContent = ''
        box.disabled = false
        box.style.backgroundColor = "#c5b0b0"
    })
    winner.classList.add("hide")
    reset.classList.remove("hide")
}

reset.addEventListener("click", resetORnewGame)
newGame.addEventListener("click", () => {
    resetORnewGame()
})