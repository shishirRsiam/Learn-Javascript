
let div = document.querySelector("div")

console.dir(div)
console.dir(div.innerText)

let cls = div.getAttribute('class')
console.dir(cls)
div.setAttribute("class", "newClass")
div.setAttribute("name", "newName")
console.log(div.getAttribute('class'))
console.log(div.getAttribute('name'))


div.style.backgroundColor = "black"
div.style.fontSize = "30px"
div.style.width = '400px'
div.style.height = '400px'
// div.innerText = "This is Sishir Siam Div."
console.dir(div.style)


let newBtn = document.createElement("button")
let newBtn2 = document.createElement("button")
newBtn.textContent = "Click Me"
newBtn2.textContent = "Click Me2"
console.dir(newBtn.innerText)
document.querySelector("ul").append(newBtn)
div.after(newBtn2)
document.querySelector('p').remove()





