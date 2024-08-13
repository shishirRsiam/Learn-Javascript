document.body.style.background = 'rgb(107, 149, 186)'

let buttons = document.getElementsByClassName("button")

for (let button of buttons) {
    button.style.fontSize = '35px'
    button.style.background = 'red'
    button.style.color = 'white'
}

let count = 1;
let div = document.querySelector("#divId")
div.onmouseover = () => {
    console.log('you are inside div in times', count++)
}

// onmouseover = "console.log('you are inside div');"

