const print = console.log

function getPromises() {
    return new Promise((resolv, reject) => {
        print("I'm Promises!")
        // resolv("Sucsess!")
        reject("Network Error!")
    })
}

let promises1 = getPromises()

promises1.then((msg) => {
    print("Promise resolved", msg)
})
promises1.catch((msg) => {
    print("Promise rejected", msg)
})