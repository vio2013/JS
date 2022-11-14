'use strict';

let cars = ["Saab", "Volvo", "BMW", "Mercedes" , 1];
cars.pop();
cars.push("Moskvich", 1);
console.log(cars);
for (let i = 0 ; i < cars.length; i++)
{
    console.log(cars[i]);
}
console.log(cars);
console.log(cars.length);

cars.forEach(function(item,i,mass)
{
    console.log(i + ' : ' + item + "( massive " + mass + ")");
})
;
let options = 
{
    wight: 1024,
    innerHeight: 1034,
    name: "test"
};
console.log(options.wight*options.innerHeight, options.name);
options.bool = false;
options.farbe = 
{
    border: "red",
    bg: "schwarz"
};

for (let key in options)
{
    console.log("Feature" + key + 'hat Wert' + options{key});
}

console.log(options);