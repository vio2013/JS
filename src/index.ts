console.log('Hello TypeScript!')
let a = 1 + 2
let b: (number | string ) = a + '3'
let c =
{
apple: a,
banana: b
}
let d = c.apple * 4
console.log(b)

function squareOf(n: number) {
    return n * n
    }
    console.log(squareOf(88))
    
let a1: any = 666 // any
let b1: any = ['danger'] // any
let c1 = a + b // any
console.log(c1)

let a2: unknown = 30        // unknown
let b2 = a2 === 123         // boolean
let c2 = (a2: number) => 10   + 10     // Ошибка TS2571: объект имеет тип 'unknown'.
if (typeof a2 === 'number') {
//let d2 = c2 + 10        // number
}
console.log(c2)

let a3 = true           // boolean
var b3 = false          // boolean
const c3 = true         // true
let d3: boolean = true  // boolean
let e3: true = true     // true
//let f3: true = false  // Ошибка TS2322: тип 'false' не может быть
                        // присвоен типу 'true'.
let twoMillion: 2_000_000 = 2_000_000;
let a4 = 1234;

let a5 = 'hello' // string
var b5 = 'billy' // string
const c5 = '!' // '!'
let d5 = a + ' ' + b + c // string
let e5: string = 'zoom' // string let f: 'john' = 'john' // 'john'
//let g5: 'john' = 'zoe' // Ошибка TS2322: тип "zoe" не может быть
                        // присвоен типу "john".
console.log(a5)

let a6 = {
    b6: 'x'
    }
    console.log(a6.b6)

    let c7: {
        firstName: string
        lastName: string
        } = {
        firstName: 'john',
        lastName: 'barrowman'
        }
        class Person {
        constructor(
        public firstName: string, // public является сокращением
        // this.firstName = firstName
        public lastName: string
        ) {}
        }
        c7 = new Person('matt', 'smith')