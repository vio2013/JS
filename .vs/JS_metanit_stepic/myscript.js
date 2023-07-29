let friend = 'Jack'
hiJack = (friend == "Jack") ? "Hi, Jack!" : "Hi";
console.log(hiJack);


var a = 3;   //объявляем переменную по которой будем делать выборку
var x = "";  //объявляем переменную в которую будем записывать результат

switch (a) {
  case 1:                               // если a равна единице то записываем 
    x = "Переменная a равна единице!";  // в переменную x фразу "Переменная a равна единице!"
    break;
  case 2:
    x = "Переменная a равна двум!";
    break;
  case 3:
    x = "Переменная a равна трем!";
    break;
  default:
    x = "Переменная a не равна 1, 2 или 3!";
}
console.log(x);

function testFactorial(a) {
    if (a === 0 || a === 1)
      return 1;
    for (var i = a - 1; i > 0; i--) {
      a *= i;
        console.log(a,"=", i, "*",a/i);
    }
    return a;
  };
  testFactorial(8);
  //----------------
  var x = 1;
  var y = 9;
  var s = y&2; 
//объявляем и инициализируем переменную, которую 
//мы будем использовать как условие цикла
while (x <= 5) {
  console.log(" x= " + x);
  x = x + 1;
}
console.log(s)
//--------------------------------------------
var a = 1;  
var b = 3;
while (a < 5) {
  if (a == b) {
      console.log("equal: a=" + a + ", b=" + b);
  } else {
      console.log("different: a=" + a + ", b=" + b);
  }  
 
  a++;
}