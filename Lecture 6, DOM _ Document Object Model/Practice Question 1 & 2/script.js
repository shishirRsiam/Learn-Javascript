let h2 = document.querySelector("h2")
h2.innerText = h2.innerText + " How are you?"


let getBox = document.querySelectorAll(".box")
console.dir(getBox)

let idx = 1;
for (box of getBox) {
    box.innerText = `Hello ${idx++}`
    idx++
}

getBox[0].innerText = getBox[0].innerText + " | New Unique Value"
getBox[1].innerText = getBox[1].innerText + " | New Unique Value 2"
getBox[2].innerText = getBox[2].innerText + " | New Unique Value 3"

