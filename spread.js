
let arr = [4,8, 18, 17, 1, 0];


// console.log(...arr);


function addition (a, b, c, d, e, f) {

    return a + b + c + d + e + f;
}


console.log(addition(...arr));


let tab = [...arr, 5, 9];

console.log(tab);