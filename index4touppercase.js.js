//1 create a var that stores value of string
var text=prompt("enter your text");

//2 convert the first character of value into toUpperCase

//a isolate first charater 
var firstlatter= text.slice(0,1);
var uppercasefirstltr = firstlatter.toUpperCase();

//b isolate rest of character

var restlatters= text.slice(1,text.lenght);

//c concatinate the a nd b part to orignal var

var capitaltext = uppercasefirstltr + restlatters;

//3 greet with the updated var

alert("Hello ,"+ capitaltext);