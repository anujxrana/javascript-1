 let score=33
let score2="25ab"// this is a string now
 console.log(typeof score);
 console.log(typeof score2);
 let score3= null
 
let valueInNumber= Number(score2)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);// not a number
 console.log(typeof score3);

 console.log(score3);
 let valueInNumber2=Number(score3)
 console.log(valueInNumber2);
 console.log(typeof valueInNumber2);

 let score4 = undefined
 console.log(typeof score4);
 let valueInNumber3= Number(score4)
 console.log(typeof valueInNumber3);
 console.log(valueInNumber3);
 //NAN: NOT A NUMBER
 
 let score5= true
console.log(typeof score5);
let valueInNumber4=Number(score5)
console.log(typeof valueInNumber4);
console.log(valueInNumber4)

let score6= false
console.log(score6);
let valueInNumber5=Number(score6)
console.log(typeof valueInNumber5);
console.log(valueInNumber5)
 
 /*A string can not be converted into number so if we does so the output will be an 'NaN' */
 
 /* "33"- 33
 "33abc"- if we print the number it will give us:NaN, but type here is number.
 ture-1, false-0;
*/ 
let isLoggedIn=1
console.log(isLoggedIn);
let isBooleanLogged=Boolean(isLoggedIn)
console.log(isBooleanLogged);
console.log(typeof isBooleanLogged);

// if let isloggedin="" => we will have false
//if in the boolean there is any name "anuj"=> then boolean will be true
let ifloggedin1=""
let booleanisloggedin= Boolean(ifloggedin1)
console.log(booleanisloggedin);
console.log(typeof booleanisloggedin);
//1=> true 0=>false

let somenumber=22 // number is converted into string
let stringnumber= String(somenumber)
console.log(typeof stringnumber);
console.log(stringnumber);

//OPERATION:
//let value=3
//let negvalue= -value
//console.log(negvalue);

