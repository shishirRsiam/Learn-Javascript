
let btn = document.querySelector("#mode")
let color = "white"
btn.addEventListener("click", () => {
    btn.innerText = color
    if (color === "black") {
        color = "white"
    }
    else
        color = "black"
    console.log("Cliked Button!", color)

    document.body.style.backgroundColor = color
})