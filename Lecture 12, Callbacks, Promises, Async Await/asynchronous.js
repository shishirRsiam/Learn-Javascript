const print = console.log

print('one')
print('two')

setTimeout(() => {
    print('Hello Sishir Siam!')
}, 5000)

print('three')
print('four')

/*
Output ->
one
two
three
four
Hello Sishir Siam!  // This will appear after a 5-second delay
*/