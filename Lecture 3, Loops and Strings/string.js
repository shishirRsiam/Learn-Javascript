const print = console.log

let s = "Sishir Siam"

print(s, 'string lenth was', s.length)


const info = {
    name: 'Sishir',
    age: 20,
    occupation: 'Software Engineer'
}


// Template Literals

let output = `Name is ${info.name}. ${info.name} age ${info.age} years old. My position is a ${info.occupation}.`

print(output)

info['name'] = info.name.toUpperCase()

output = `Name is ${info.name}. ${info.name} age ${info.age} years old. My position is a ${info.occupation}.`
print(output)

let str = "  Sishir Siam   "
str = str.trim()
print(str)
str = str.slice(0, 6)

print(str)

let s1 = "Sishir", s2 = "Siam"

let names = s1 + s2
print(names)
s1 += s2
print(s1)
