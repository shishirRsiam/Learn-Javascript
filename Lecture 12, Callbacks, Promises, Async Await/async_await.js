// Alias for console.log to simplify code
const print = console.log

// Function that simulates fetching data from a server
function getData(dataId) {
    // Returns a new Promise which will either resolve or reject after 3 seconds
    return new Promise((resolve, reject) => {
        // Simulate a delay using setTimeout to mimic data fetching
        setTimeout(() => {
            // Log a message indicating which data was fetched
            print(`Data ${dataId} fetched from server.`);
            // Resolve the promise with a status code of 200 (indicating success)
            resolve(200)
            // If you uncomment the next line and comment out resolve, the promise will reject with a 404 status code
            // reject(404)
        }, 3000) // Delay of 3 seconds
    })
}

// Asynchronous function that fetches all data sequentially
async function getAllData() {
    // Each call to getData waits for the previous one to complete due to the 'await' keyword
    await getData(1) // Wait for data with ID 1 to be fetched
    await getData(2) // Wait for data with ID 2 to be fetched
    await getData(3) // Wait for data with ID 3 to be fetched
    await getData(4) // Wait for data with ID 4 to be fetched
    await getData(5) // Wait for data with ID 5 to be fetched
}

// Call the function to start the data fetching process
getAllData()
