import { languages } from "monaco-editor"

let f = ['red']
f.push('d','ff','3243')
console.log(f)

function buildArray() {
    let a = [] // any[]
    a.push(1) // number[]
    a.push('x') // (string | number)[]
    a.push(true)
    return a
    }
    let myArray = buildArray() // (string | number)[]
myArray.push(true)
console.log(myArray)

let friends: [string,boolean ,...string[]] = ['Sara',true, 'Tali', 'Chloe', 'Claire']
type A = readonly string[]
let fr: A  = ['q,w,e,'] 
console.log(fr)

enum Language {
    English = 0,
    Spanish = 134,
    Russian
    }
    console.log(Language)

    let myFirstLanguage = Language.Russian // Language
let mySecondLanguage = Language['English']

const enum Flippable {
    Burger,
    Chair,
    Cup,
    Skateboard,
    Table
    }
    function flip(f: Flippable) {
        return 'flipped it'
}
flip(Flippable.Chair) // 'flipped it'
flip(Flippable.Cup) // 'flipped it'
console.log(flip(3))
const c = 'pineapples'
let e = {type: 'ficus'}
console.log(typeof(e))