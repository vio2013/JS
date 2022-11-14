/*
let calc = (a,b) => a+b;
console.log(calc(3,4));

console.log(calc(31,4));
/*
let calc = function(a,b)
{
    return(a+b);
}
let str = "testn ghdf hgcmgfhztujrzjturz";
console.log(str.length);


let arr [1, 2, 3, 4, 5];
console.log(arr);*/
function first ()
{
    setTimeout(
        function()
        {
            console.log(1);
        },1500
    );

}
function second ()
{
    console.log(2);
}
first();
second();

function LearnJS (lang, callback)
{
    console.log("Ich lerne " + lang);
    callback();
}
LearnJS("Java Scrpot", function()
{
    console.log("ich nabe dritte unterricht geschaft");
});
