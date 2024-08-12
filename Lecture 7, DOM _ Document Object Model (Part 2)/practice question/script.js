document.body.style.backgroundColor = "black"

let newbtn = document.createElement("button")
newbtn.innerText = "Click Me!"

document.body.prepend(newbtn)

newbtn.style.color = 'white'
newbtn.style.fontSize = "40px"
newbtn.style.backgroundColor = 'red'

let pera = document.querySelector("p")
console.dir(pera)
pera.classList.add("newclass")

