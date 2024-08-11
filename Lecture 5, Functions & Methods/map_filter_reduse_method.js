const print = console.log



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = arr.map((val) => {
    return val * 2
})

print(newArr)

let evenArr = arr.filter((val) => {
    return val % 2 === 0
})
print(evenArr)

const maxElement = arr.reduce((prev, cur) => {
    return prev >= cur ? prev : cur
})
print(maxElement)


