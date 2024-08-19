const print = console.log

// Define a class 'Car'
class Car {
    // Constructor to initialize properties
    constructor(name, model, year) {
        this.name = name;  // Car's name
        this.model = model; // Car's model
        this.year = year; // Car's manufacturing year
    }

    // Method to start the car
    start() {
        print(this.name, 'Car Started!')
    }

    // Method to stop the car
    stop() {
        print(this.name, 'Car Stopped!')
    }
}

// Create instances of the 'Car' class
let oldCar = new Car('Old', 'Siam01', 2021)
let newCar = new Car('New', 'Sishir49', 2024)

// Call methods on the instances
oldCar.start() // Start the 'oldCar'
newCar.start() // Start the 'newCar'
oldCar.stop()  // Stop the 'oldCar'
