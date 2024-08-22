// Alias for console.log to simplify code
const print = console.log

// Function that returns a promise, simulating an asynchronous operation
function getPromises() {
    return new Promise((resolve, reject) => {
        // Simulate a delay of 2 seconds using setTimeout
        setTimeout(() => {
            // Resolve the promise with the string 'resolved' after the delay
            resolve('resolved');
        }, 2000);
    })
}

// Print message indicating that the first promise is loading
print("Promise1 Data Loading...")

// Call getPromises() and handle the resolved value with .then()
getPromises().then((msg) => {
    // Print the resolved value of the first promise
    print('Promise1', msg)

    // Print message indicating that the second promise is loading
    print("Promise2 Data Loading...")

    // Call getPromises() again for the second promise and handle the resolved value
    getPromises().then((msg) => {
        // Print the resolved value of the second promise
        print("Promise2", msg)
    })
})
