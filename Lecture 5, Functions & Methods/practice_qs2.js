const print = console.log;

// practice_qs1
let arr = [100, 99, 89, 87, 95, 76, 94];
let newArr = arr.filter(val => val >= 90);

// Sort in ascending order
newArr.sort((a, b) => a - b);

print(newArr);

// practice_qs2
let number = parseInt(prompt("Enter a number:"))
let array = []
for (let i = 0; i < number; i++)
    array[i] = i + 1
print(array);
let sum = array.reduce((res, cur) => res + cur);
let product = array.reduce((res, cur) => res * cur);
print(sum);
print(product);