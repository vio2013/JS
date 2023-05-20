interface User2 {
    readonly login: string;
    password:string;
    age:number;
    //addr?: string;
    addr?: string | undefined;
    parents: {
        mother?: string;
        father?: string;
    }
}

const user2: User2 = {
    login: "admin",
    password: "qwertz",
    age: 23,
    addr: 'ewff',
    parents: 
            {father: 'rtz',},
}

const userFreeze: Readonly<User2> = {
    login: "admin1",
    password: "qwertz",
    age: 231,
    addr: 'ewff1',
    parents: 
            {father: 'rtz1',},
}

//user2.login = 'fdwfw';
const dbName3 = '35345';
let dbName4:string;
sendUserData(user,'fewrferf');
console.log(dbName4!); 

function sendUserData(obj: user2, db?: string): void{
    console.log(obj.parents!.father?.toLowerCase, db!.toLowerCase())
}

//const basicPorts: readonly number[] = [3000,3001,555]
//basicPorts[0] = 5;

const basicPorts: ReadonlyArray<number>  = [3000, 3001];
basicPorts[0] = 5;
basicPorts.push(566);