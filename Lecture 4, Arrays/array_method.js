const print = console.log

let numbers = [10, 20, 30, 40, 50]
let food = ['Sishir', 'Siam', 'Bou']
print(numbers)

numbers.push(20, 30, "Siam", "Sishir")

print(numbers)

numbers.pop()
print(numbers)
print(numbers.toString())

let newArray = numbers.concat(food)
print(newArray)

newArray.unshift("First")
print(newArray)
newArray.shift()
print(newArray)

let SliceArray = newArray.slice(2, 5)
print(SliceArray)


// spilice array needs (addIndex, removeCount, replace)
newArray.splice(0, 0, 'Siam', 'by')
print(newArray) 