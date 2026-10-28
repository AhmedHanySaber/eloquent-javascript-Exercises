// //Minimum
// function min(a, b) {
//     if (a > b) {
//         return b
//     }
//     return a
// }



// console.log(min(0, 10));
// console.log(min(0, -10));

//Recursion

// function isEven(n) {
//     if (n < 0) {
//         n = -n
//     }
//     if (n === 0) {
//         return true
//     }
//     if (n === 1) {
//         return false
//     }
//     return isEven(n - 2)
// }

// console.log(isEven(50));

// console.log(isEven(75));
// console.log(isEven(-1));
//Bean counting
function countBs(s) {
    return countChar(s, "B");

}
function countChar(s, c) {
    let count = 0;
    for (let a of s) {
        if (a === c) {
            count++
        }
    }
    return count
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));