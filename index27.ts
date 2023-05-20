interface UserData {
    isBirthdayData: boolean,
    ageData: number,
    userNameData: string,
}
const userData = 
'{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

const userObj: UserData = JSON.parse(userData);
console.log(userObj);
let isOk = true;
let movement: boolean | string = false;
if (isOk)
{
    movement = "moving";
}