function print(...args) {
    console.log(...args)
}

const Student = {
    name: "Sishir Siam",
    age: 20,
    bloodGroup: "A+",
    isSingle: true
};

console.log(Student.name)
console.log(Student.age)
console.log(Student.bloodGroup)
console.log(Student.isSingle)

Student['age'] += 1

// console.log('new age -> ', Student.age)
print('new age -> ', Student.age)

