const print = console.log

let dark_mode = 'on'
dark_mode = 'off'
if (dark_mode === 'on')
    console.log('Dark mode is enabled')
else
    console.log('Dark mode is disabled')


let number = 21;

if (number % 2)
    print(number, "is ODD")
else
    print(number, "is EVEN")


let age = 17
print(age >= 18 ? "Adult" : "Teen")