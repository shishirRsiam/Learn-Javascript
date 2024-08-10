const print = console.log

// practice_qs1

let numbers = [10, 30, 40, 34, 43, 23, 54]

let sum = 0, n = numbers.length
for (let num of numbers)
    sum += num
let avg = sum / n
print(avg) // Output: 33.57142857142857


// practice_qs2

let prices = [250, 645, 300, 900, 50]

for (let price of prices) {
    print(`old price is ${price} and 10% discount price is ${price / 100 * 90}`)
}