const print = console.log
let userScore = 0, comScore = 0, drowScore = 0
/*
--> Basics of Rock-Paper-Scissors
    Rock crushes Scissors.
    Scissors cut Paper.
    Paper covers Rock.
*/

const GameWinnger = () => {
    if (userScore + comScore >= 5) {
        let msg = 'Sishir Won'
        if (userScore == comScore) return
        if (userScore > comScore) msg = 'You Win'

        Swal.fire({
            title: 'Game Over!',
            text: msg + ' The Game!\n' + `Your Score is ${userScore}, Sishir Score is ${comScore}.`,
            customClass: {
                popup: 'swal-popup',
                title: 'swal-title',
                confirmButton: 'swal-confirm-button',
                text: 'swal-text'
            }
        }).then(() => {
            window.location.reload()
        })
    }
}

const genRandomChoice = () => {
    const op = ['paper', 'scissors', 'rock', 'rock', 'paper', 'scissors', 'scissors', 'paper', 'rock']
    const idx = Math.floor(Math.random() * 9)
    return op[idx]
}


const winMsg = document.querySelector('#msg')
const comScoreSpan = document.querySelector('#com-score')
const userScoreSpan = document.querySelector('#user-score')
const drowScoreSpan = document.querySelector('#drow-score')
const palyGame = (userChoice) => {
    const comChoice = genRandomChoice()
    let msg;
    if (userChoice === comChoice) {
        drowScore += 1
        msg = "Drow"
        print("Drow")
        winMsg.style.backgroundColor = 'white'
        winMsg.style.color = 'rgb(5, 15, 11)'
    }

    else if (userChoice === 'rock') {
        if (comChoice === 'scissors') {
            userScore += 1
            msg = `Your Rock Crushes Scissors.`
            winMsg.style.backgroundColor = 'green'
        }
        else {
            comScore += 1
            msg = `Paper Covers Your Rock!`
            winMsg.style.backgroundColor = 'red'
        }
    }
    else if (userChoice === 'paper') {
        if (comChoice === 'scissors') {
            comScore += 1
            msg = `Scissors Cut Your Paper!`
            winMsg.style.backgroundColor = 'red'
        }
        else {
            userScore += 1
            msg = `Your Paper Covers Rock.`
            winMsg.style.backgroundColor = 'green'
        }
    }
    else {
        // user = Scissors
        if (comChoice === 'rock') {
            comScore += 1
            msg = `Rock Crushes Your Scissors!`
            winMsg.style.backgroundColor = 'red'
        }
        else {
            userScore += 1
            msg = `Your Scissors Cut Paper!`
            winMsg.style.backgroundColor = 'green'
        }
    }

    winMsg.textContent = msg
    userScoreSpan.textContent = userScore
    comScoreSpan.textContent = comScore
    drowScoreSpan.textContent = drowScore
    GameWinnger()
}


let images = document.querySelector(".images")

Array.from(images.children).forEach((el) => {
    el.addEventListener('click', () => {
        palyGame(el.className)
    })
})
