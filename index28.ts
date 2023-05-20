interface User {
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

const user: User = {
    login: "admin",
    password: "qwertz",
    age: 23,
    addr: 'ewff',
    parents: 
            {father: 'rtz',},
}
const dbName = '35345';
function sendUserData(obj: User, db?: string): void{
    console.log(obj.parents.father?.toLowerCase, db?.toLowerCase())
}
