const print = console.dir


let colorChange = ""
document.body.style.background = colorChange

let dom_into = document.getElementById("dom-introduction")

print(dom_into)

let div = document.querySelector("div")
print(div.innerText)
print(div.innerHTML)

div.innerText = "Hello Sishir"
div.innerHTML = "<h1>Hello Sishir</h1>"

