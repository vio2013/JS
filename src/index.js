console.log('Hello TypeScript!');
var a = 1 + 2;
var b = a + '3';
var c = {
    apple: a,
    banana: b
};
var d = c.apple * 4;
console.log(b);
function squareOf(n) {
    return n * n;
}
console.log(squareOf(88));
var a1 = 666; // any
var b1 = ['danger']; // any
var c1 = a + b; // any
console.log(c1);
var a2 = 30; // unknown
var b2 = a2 === 123; // boolean
var c2 = function (a2) { return 10 + 10; }; // Ошибка TS2571: объект имеет тип 'unknown'.
if (typeof a2 === 'number') {
    //let d2 = c2 + 10        // number
}
console.log(c2);
var a3 = true; // boolean
var b3 = false; // boolean
var c3 = true; // true
var d3 = true; // boolean
var e3 = true; // true
//let f3: true = false  // Ошибка TS2322: тип 'false' не может быть
// присвоен типу 'true'.
var twoMillion = 2000000;
var a4 = 1234;
var a5 = 'hello'; // string
var b5 = 'billy'; // string
var c5 = '!'; // '!'
var d5 = a + ' ' + b + c; // string
var e5 = 'zoom'; // string let f: 'john' = 'john' // 'john'
//let g5: 'john' = 'zoe' // Ошибка TS2322: тип "zoe" не может быть
// присвоен типу "john".
console.log(a5);
