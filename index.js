/*
const str = "str";
console.log(str + "123");
console.log(str);    */
/*
const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = "John";



const createError = (msg: string) => {
  throw new Error(msg);
}*/
//const usrData = '{"isBirthdayData: true", "ageData: 40","userNameData: "John""}';
/*
const userObj: {
  isBirthday: boolean;
  userName: string;
  age: number;
} = JSON.parse(usrData);

console.log(userObj.smt);*/
/*if (isBirthday) {
  console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1} `);
}*/
/*
function logBirthday(isBirthday: boolean, userName: string, age: number):string {
if (isBirthday === true)
{
  return`Congrats ${userName.toUpperCase()}, age: ${age + 1} `;
}
else if ((isBirthday === false)){
  return "too bad"
}
return createError("Error")
}
logBirthday(isBirthdayData, userNameData, 40);*/
/*
const logBirthday = (
  isBirthday: boolean,
  userName: string,
  age: number
): string => {
  if (isBirthday) return `Congrats ${userName.toUpperCase()}, age: ${age + 1} `;
  else return "Error";
};
logBirthday(isBirthdayData, userNameData, ageData);*/
//-------------------------------------------------------------------------
/*
const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
    const data = JSON.parse(response);
    return data;
};

function transferEurToUsd(
        available: boolean,
        amount: number,
        commission: number):void {
    if (available) {
        let res: number = fetchCurr(currRate) * amount * commission;
        console.log(res);
        // Или запись в элемент на странице вместо консоли
    } else {
        console.log("Сейчас обмен недоступен");
    }
}

transferEurToUsd(true, 500, 1.05);*/
//--------------------------------------------------------------
/*let id : symbol = Symbol("id");

const data = {
  [id]:"sadgverfgderg"
};
const num1 : bigint = 1n;
const num2 : bigint = 2n;

console.log(num1 + num2 + 5n);

console.log(data[id]);*/
//--------------
