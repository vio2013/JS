console.log("ffffffffffffffffffff");    

let selectedColor = ['red','yellow'];
selectedColor[3] = 1;
console.log(selectedColor[3]);

function greet(name) {
    console.log('Hello ' + name);
}
greet('andreas');

console.log(2**3);
let points = 110;
let type = points > 100 ? 'gold':'silber';
console.log(type);

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);