/*let smth: unknown;
smth = 'str';
let data: string[] = smth;
data.find(e => e);*/

//const someValue: any = 10;
//someValue.method();
/*
function fetchData(data: unknown): void {
  if (typeof data === "string") {
    console.log(data.toLowerCase());
  }
  data;
}*/

const userData1 =
  '{"isBirthdayData": true, "ageData": 40,"userNameData": "John"}';
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
const data1 = safeParse(userData1); 
function transferData(d: unknown): void {
    if (typeof d === 'string')
    {
        console.log(d.toLowerCase())
    } else if (typeof d === 'object' && d)
    {
        console.log(data1)
    }else{
        console.error("Some error")
    }
}
