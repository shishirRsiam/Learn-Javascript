const print = console.log;

// Arithmetic operator
let a = 5, b = 2;

print("a =", a, "& b =", b)

print("a + b =", a + b);
print("a - b =", a - b);
print("a * b =", a * b);
print("a / b =", a / b);
print("a % b =", a % b);
print("b % a =", b % a);

print("a ** b =", a ** b) // this is a^b

let unaryOperator = 10;

unaryOperator += 1;
print(unaryOperator);

unaryOperator++;
print(unaryOperator)

unaryOperator--;
print(unaryOperator)

print("\nAssigment Operator:")

// assigment operator
let value = 10;
value += 5;
print(value)

value -= 3
print(value)

value /= 3;
print(value)

value %= 3
print(value)



print("\Comparison Operator:")

let num1 = 5
let num2 = "5"

print("num1 == num2", num1 == num2)
print("num1 === num2", num1 === num2)
print("num1 != num2", num1 != num2)
print("num1 !== num2", num1 !== num2)

let flag1 = true, flag2 = true

// print(flag1 && flag2)
if (flag1 && flag2) print("flag1 && flag2 is true");
else print("flag1 && flag2 is false");
