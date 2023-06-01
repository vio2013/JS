var fetcData = function (url, method) {
    console.log(method);
};
var requestOption = {
    url: "https://ya.ru",
    method: "GET",
};
fetcData("qqq", "GET");
fetcData(requestOption.url, requestOption.method);
var box = document.querySelector(".box");
var input = document.querySelector("input");
var someNumber = input.value;
console.log(someNumber * 2);
