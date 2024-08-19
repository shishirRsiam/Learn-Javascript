const print = console.log

// Define an object 'employee' with a method 'PrintTax'
const employee = {
    PrintTax() {
        print(this.salary * 0.02) // Prints 2% of the salary
    }
}

// Define an object 'SishirSiam' with properties and set its prototype to 'employee'
const SishirSiam = {
    name: 'Sishir Siam',
    salary: 5000,
    __proto__: employee // Inherit methods from 'employee'
}

// Print the 'SishirSiam' object itself
print(SishirSiam)
// Output: { name: 'Sishir Siam', salary: 5000 }

// Call the 'PrintTax' method from 'SishirSiam'
SishirSiam.PrintTax()
// Output: 100
