const fetcData = (url: string, method: "GET" | "POST"): void => {
  console.log(method);
};
const requestOption = {
  url: "https://ya.ru",
  method: "GET" as "GET",
} as const;

fetcData("qqq", "GET");
fetcData(requestOption.url, requestOption.method);

const box = document.querySelector(".box") as HTMLElement;
const input = <HTMLInputElement>document.querySelector("input");

const someNumber: number = +input.value;
console.log(someNumber.toFixed());
