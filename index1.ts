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

import { type } from "os";

//import { type } from "os";

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
/*
const isBirthdayData: boolean = true;
let ageData:  number = 40;
const userNameData: string = "John";*/
//---------------*****************************************************************
/*const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: {
    error: "Error",
  },
};

const userDataTuple: [boolean, number, ...string[], boolean] = [true, 40, "John", 'Alex','Inna', true];
//userDataTuple.push(50);
const res = userDataTuple.map((t) => `${t} - data`)

const [bthd, age, userName] = userDataTuple;

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1} `;
  } else {
    return createError(error);
  }
}

console.log(logBrtMsg(userData));

const departmens: string[] = ["dev", "design", "marketing"];
const department = departmens[0];
//departmens.push(5);
const report = departmens
                        .filter((d: string) => d == "dev")
                        .map((d: string) => `${d} - done`);

const nums: number[][] = [
  [3, 5, 2, 8, 9],
  [44, 66, 55, 77, 55],
];
const [first] = report;
console.log(first);*/
//****************************************************************
/*
const electricityUserData = {
  readings: 95,
  units: "kWt",
  mode: "double",
};

const waterUserData = {
  readings: 3,
  units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
  { readings, mode }: { readings: number; mode: string },
  wData: { readings: number },
  elRate: number,
  wRate: number
): void => {
  if (mode === "double" && readings < 50) {
    monthPayments[0] = readings * elRate * 0.7;
  } else {
    monthPayments[0] = readings * elRate;
  }

  monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
  [el, water]: number [],
  //monthPayments: number,
  electricityUserData: { readings: number; units: string },
  waterUserData: { readings: number; units: string }
): string => {
  const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

  return text;
};
const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);*/
/*
const message: string | number | boolean = "g";
const messages: string[] | number[] | boolean[] = ["a", "h"];

function printMsg(msg: string | number | boolean): void {
  if (typeof msg === "string" || typeof msg === 'number') {
    console.log(msg.toString);
  } else {
    console.log(msg.valueOf);
  }
}
//*************************************** */
/*
function printMsg(msg: string | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (typeof msg === "number") {
    console.log(msg.toFixed());
  } else {
    console.log(msg);
  }
}

const printReadings = (a: number | string, b: number | boolean) => {
  if (a === b) {
    console.log(a, b);
  }
};
const printReadings2 = (a: number[] | string) => {
 {
    console.log(a.slice(0, 3));
  }
};

function checkReadings (readings: {system: number} | {user: number}): void {
    if ('system' in readings){
      console.log(readings.system)
    }else {
      console.log(readings.user)
    }
}*/
/*let msg: "Hello" = "Hello";

msg = "Hello";

//type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
interface Config {
  protocol: "http" | "https";
  port: 3000 | 3001;
  log: (msg: string) => void
}
/*type Role = {
  role: string;
};
type ConfigWithRole = Config&Role;*/

/*
interface Role {
  role:string
}
interface ConfigWithRole extends Config, Role {
        //test: string
}

const serverConfig: ConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: 'admin',
  log: (msg: string): void => console.log(msg)
};

const port3000: number = 3000;
const port3001: number = 3001;

/*const backupConfig: Config&Role = {
  protocol: "http",
  port: 3000,
  role: 'sysadmin'
}; */
/*
type StartFunction = (protocol: "http" | "https", port: 3000 | 3001, log: (msg: string)=> void) => string;

const startServer: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string)=> void
): "Server started" => {
  if (port === port3000 || port === port3001) {
    log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.error("Invalid port");
  }

  return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
type AnimationId = string | number;

function createAnimation(
  id: AnimationId,
  animName: string,
  timingFunc: AnimationTimingFunc = "ease",
  duration: number,
  iterCount: number | "infinite"
): void {
  // const elem = document.querySelector(`#${id}`) as HTMLElement;

  // if (elem) {
  console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
  // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
  // }
}

createAnimation("id", "fade", "ease-in", 5, "infinite");*/
let a = 1 + 2
let b = a + 3
let c =
{
apple: a,
banana: b
}
let d: number = c.apple * 4