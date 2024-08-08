const print = console.log

let grade
let number = prompt("Enter Your Number:")

if (number >= 80)
    grade = "A"
else if (number >= 70)
    grade = "B"
else if (number >= 60)
    grade = "C"
else if (number >= 50)
    grade = "D"
else
    grade = "F"

print('your grade is', grade)

