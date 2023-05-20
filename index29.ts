interface User1 {
    login: string;
    password:string;
    age:number;
    //addr?: string;
    addr?: string | undefined;
    parents: {
        mother?: string;
        father?: string;
    }
}

const user1: User1 = {
    login: "admin",
    password: "qwertz",
    age: 23,
    addr: 'ewff',
    parents: 
            {father: 'rtz',},
}
const dbName1 = '35345';
let dbName2:string;
sendUserData(user,'fewrferf');
console.log(dbName2!); 

function sendUserData(obj: User1, db?: string): void{
    console.log(obj.parents!.father?.toLowerCase, db!.toLowerCase())
}
