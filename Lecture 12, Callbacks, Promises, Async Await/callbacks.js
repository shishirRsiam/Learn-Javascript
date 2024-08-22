const print = console.log; // Create a shorthand for console.log to simplify logging messages

// Function to simulate data retrieval
function getData(dataId, nextData) {
    // Set a timeout to mimic an asynchronous data fetching operation
    setTimeout(() => {
        print(`Data ${dataId} is ready`); // Log a message indicating that the data for the given ID is ready

        // If a nextData callback is provided, call it to proceed to the next data retrieval
        if (nextData) nextData();
    }, 2000); // Delay of 2 seconds before executing the function
}

// Initial call to getData with dataId 1 and a callback to fetch dataId 2
getData(1, () => {
    // Callback for when dataId 1 is ready
    getData(2, () => {
        // Callback for when dataId 2 is ready
        getData(3, () => {
            // Callback for when dataId 3 is ready
            getData(4, () => {
                // Callback for when dataId 4 is ready
                getData(5); // Call getData with dataId 5 (no further callback)
            });
        });
    });
});
