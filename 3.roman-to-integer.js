/**
 * @param {string} s
 * @return {number}
 */

let str = "IV";

var romanToInt = function(str) {
    const object = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    };
    let total = 0;

    for(let i = 0; i < str.length; i++) {
        if(object[str[i]] < object[str[i+1]]) {
            total += object[str[i+1]] - object[str[i]];
            i++;
        } else {
            total += object[str[i]];
        }
    }
    console.log(total);
    return total;
};

romanToInt(str);

//1등 코드
// var romanToInt = function(s) {
      
//     const digitLib = {
//         "I": 1,
//         "V": 5,
//         "X": 10,
//         "L": 50,
//         "C": 100,
//         "D": 500,
//         "M": 1000
//     } 
        
//     let n = 0
//     let x = []

//     for (let l of s) {
//         x.push(digitLib[l]);
//     }

//     for (let i = 0; i < x.length; i++) {
//         if (x[i] < x[i+1]) {
//             n += (x[i+1] - x[i])
//             i++
//         } else {
//             n += x[i]
//         }
//     }

//     return n
//  }

