const score= 400// js automatically defines score as no here.


const balance= new Number(100)// here we have specifically casted it. 
console.log(balance);
console.log(score);
console.log(balance.toString().length);//typeof is string
console.log(typeof(balance));
console.log(balance.toFixed(3));// used in ecommerce here(precesion value)


const otherNumber=123.8666
console.log(otherNumber.toPrecision(3));// contains a no return a string, focuses on the no of precision values
const pre=45.85654
console.log(pre.toPrecision(3));
const hundreds=10000000
console.log(hundreds.toLocaleString());//gives ","in 10000000(US STANDARD)
console.log(hundreds.toLocaleString('en-IN'));// Indian standard



console.log("MATHS");

//++++++++++++++ MATHS +++++++++++++

console.log(Math);
console.log(Math.abs(-4));//absolute:changes the - to + only; + remaisn in +.
console.log(Math.round(5.23));//roundoff(Most used)
console.log(Math.ceil(2.86));//ceil: No at top will be chosen
console.log(Math.floor(5.4));//floor: only take lowest value
console.log(Math.sqrt(36));//Gives squareroot
console.log(Math.max(4,5,96,79,75));//gives max
console.log(Math.min(8,6,4,5,76,2));//gives minimum
//MATH LIBRARY IS MOST USED IN Math.random

console.log(Math.random());//always between 0 and 1.
//example: in case of a game using a die(1 to 6)
console.log(Math.random()*10);
// but value can also come 0 as in case of 0.025...; so to avoid this we add 1.
console.log((Math.floor(Math.random()*10)+1)); // gives us the guarantee the minimum value will be 1 not 0; Math.floor wraps it up in smallest value.

//DEFINING MIN AND MAX
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+ min);// By adding min at the end we will get the suring the value is gretaer than 10 ie the min.














