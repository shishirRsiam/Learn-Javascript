const print = console.log

// Define the Person class
class Person {
    // Constructor to initialize name, age, and gender
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // Method to simulate eating
    eat() {
        print(`${this.name} is eating.`)
    }

    // Method to simulate sleeping
    sleep() {
        print(`${this.name} is sleeping.`)
    }

    // Method to display information about the person
    info() {
        print(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

// Define the Programmer class that extends Person
class Programmer extends Person {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.profession = 'Programmer'; // Set profession property
    }

    // Method to simulate work specific to a Programmer
    work() {
        print(`${this.name} solves problems and builds something!`);
    }

    // Override info() to include profession
    info() {
        print(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Profession: ${this.profession}`);
    }
}

// Define the Doctor class that extends Person
class Doctor extends Person {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.profession = 'Doctor'; // Set profession property
    }

    // Method to simulate work specific to a Doctor
    work() {
        print(`${this.name} saves lives.`);
    }

    // Override info() to include profession
    info() {
        print(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Profession: ${this.profession}`);
    }
}

// Create an instance of Programmer
let SishirSiam = new Programmer('Sishir Siam', 20, 'Male')
// Create an instance of Doctor
let JishaSabrin = new Doctor('Jisha Sabrin', 19, 'Female')

// Call methods on the Programmer instance
SishirSiam.eat()         // Output: Sishir Siam is eating.
SishirSiam.sleep()       // Output: Sishir Siam is sleeping.
SishirSiam.work()        // Output: Sishir Siam solves problems and builds something!
SishirSiam.info()        // Output: Name: Sishir Siam, Age: 20, Gender: Male, Profession: Programmer

// Call methods on the Doctor instance
JishaSabrin.eat()        // Output: Jisha Sabrin is eating.
JishaSabrin.sleep()      // Output: Jisha Sabrin is sleeping.
JishaSabrin.work()       // Output: Jisha Sabrin saves lives.
JishaSabrin.info()       // Output: Name: Jisha Sabrin, Age: 19, Gender: Female, Profession: Doctor
