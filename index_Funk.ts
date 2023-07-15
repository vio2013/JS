// Именованная функция
function greet(name: string) {
  return "hello " + name;
}
// Функциональное выражение
let greet2 = function (name: string) {
  return "hello " + name;
};
// Выражение стрелочной функции
let greet3 = (name: string) => {
  return "hello " + name;
};
// Сокращенное выражение стрелочной функции
let greet4 = (name: string) => "hello " + name;
// Конструктор функции
let greet5 = new Function("name", 'return "hello " + name');

type Context = {
  appId?: string;
  userId?: string;
};
function log(message: string, context: Context = {}) {
  let time = new Date().toISOString();
  console.log(time, message, context.userId);
}
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([53, 25, 73])); // вычисляется как 151

function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumVariadicSafe(1, 2, 3, 7)); // вычисляется как 6.
function add(a: number, b: number): number {
  return a + b;
}
    console.log(add(10, 20)); // вычисляется как 30
    console.log(add.apply(5, [10, 20])); // вычисляется как 30
    console.log(add.call(null, 10, 20)); // вычисляется как 30
    console.log(add.bind(null, 10, 20)()); // вычисляется как 30

    function fancyDate(this: Date) {
        return `${this.getDate()}/${this.getMonth}/${this.getFullYear()}`
        }