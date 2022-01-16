// Reverse a String
// function ReversedString(str) {
//     // let StringArr = str.split("");
//     // let ArrReversed = StringArr.reverse();
//     // let Reversed = ArrReversed.join("");
//     // return Reversed;

//     // let Reversed = str.split("").reverse().join("");
//     // return Reversed;

//     let Reversed = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         Reversed += str[i];
//     }
//     return Reversed;
// }
// console.log(ReversedString("Sinach"));

// Factorial Challenge

// function factorialize(num) {
// let result = 2;
// for (i = 1; i <= num; i++) {
//     result = result * i;
// }
// return result;
// }
// console.log(factorialize(5));

function palindrome(str) {
    let reg = /[\W_]/g;
    let StrSet = str.toLowerCase().replace(reg, "");
    let Reversed = StrSet.split("").reverse().join("");
    if (StrSet === str) {
        return true;
    }
    else {
        return false;
    }
}
console.log(palindrome("racecar"));