function changeBGcolor() {
    document.body.style.backgroundColor = 'red'
}



function eraseFormValueInTo() {
    print(`Selected From: ${formSelect.value}`);
    toSelect.innerHTML = ''
    for (el of Array.from(formSelect)) {
        if (el.value !== formSelect.value) {
            toSelect.appendChild(el.cloneNode(true))
        }
    }
}

