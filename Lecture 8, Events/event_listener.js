document.body.style.background = 'rgb(107, 149, 186)';

let buttons = document.getElementsByClassName("button");

// Apply styles to each button
for (let button of buttons) {
    button.style.fontSize = '35px';
    button.style.background = 'red';
    button.style.color = 'white';
}

let allButtons = document.querySelectorAll(".button");
let bunttonCnt = 0;
// Add click event listener to each button
for (let button of allButtons) {
    button.addEventListener("click", (e) => {
        let clickedButton = e.target;
        clickedButton.style.background = 'blue';
    });
    button.addEventListener("mouseover", (e) => {
        console.log("In Button", ++bunttonCnt)
    })
}

let divCount = 0;
let div = document.querySelector("#divId")
const removeEvents = (e) => {
    console.log("In Div", ++divCount)
}

div.addEventListener("mouseover", removeEvents)

// div.removeEvents("mouseover", removeEvents)

div.removeEventListener("mouseover", removeEvents);

