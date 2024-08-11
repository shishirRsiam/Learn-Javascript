const print = console.log


// practice_qs1 || count vowels
function countVowels(str) {
    let count = 0;
    for (let ch of str)
        if ('aeiou'.includes(ch.toLowerCase())) count++;
    return count
}

let count = countVowels("Sishir Siam")
print(count) // output: 4


// practice_qs2 || print array square
function printSquares(arr) {
    arr.forEach(element => {
        print(element * element);
    });
}

let arr = [1, 2, 3, 4, 5];
printSquares(arr);