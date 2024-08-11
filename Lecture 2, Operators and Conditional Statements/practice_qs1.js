const print = console.log


let name = prompt("Enter Your Name:")
let age = prompt("Enter Your Age:")

print(name)
print(age)


let number = prompt("Enter The Number:")

if (number % 5)
    print("Number is not divisible by 5")
else
    print("Number is divisible by 5")