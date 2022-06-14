/*
*Given an integer x, return true if x is palindrome integer.
*An integer is a palindrome when it reads the same backward as forward. 
*/

/**
 * @param {number} x
 * @return {boolean}
 */

//My Code1
// let isPalindrome = function(x) {
//     let string = x.toString();
//     let array = string.split('');
//     let reverseArray = array.reverse()
//     let y =  reverseArray.join('');
//     if(string === y) {
//          return true;
//      } else {
//          return false;
//      }
// }; 


//My Code2
 let isPalindrome = function(x) {
    const string = x.toString();
    const reverseString = string.split('').reverse().join('');
    if(string === reverseString) {
         return true;
     } 
}; 

//1등 답안지
// var isPalindrome = function(x) {
//     let reverseX = ""
//     for(let letter of String(x)){
//         reverseX = letter + reverseX
//         console.log(reverseX);
//     }
//     return String(x) === reverseX ? true : false
// };

//꼴등 답안지
// var isPalindrome = function(x) {
//     let stringify = x.toString().split('');
//     let pointer = 1;
//     for (let i = 0; i < stringify.length / 2; i++) {
//         if (stringify[i] !== stringify[stringify.length - pointer]) {
//             return false
//         }
//             pointer++;
//     }
//     return true
// };