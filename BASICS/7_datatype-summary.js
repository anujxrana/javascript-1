//2 type: PRIMITIVE AND NON PRIMITIVE(REFERENCE TYPE)
// ON THE BASIS OF HOW THE DATA IS STORED IN THE MEMORY AND HOW WE CAN ACCESS THEM.
//PRIMITIVE:CALL BY VALUE MEANS THE ORIGINAL REFERENCE OF THE MEMORYIS NOT GIVEN INSTEAD THE VALUE IS COPIED AND THEN GIVEN,CHNAGES DONE HERE ARE IN THE CHANGES IN THE COPIES
// 7 CATEGORIES: STRING, BOOLEAN,NUMBER,NULL,UNDEFINED(variable is declared the space is declared but the value whih will come is not declared),symbol(to make value unique),BIGINT(for very big values)
/* IN JS WE NEVER DEFINE THE LANGUAGE.

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare
 the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. 
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/
/* 
NON- PRIMITIVE OR REFERENCE TYPE: Reference of the memory of the value is given
TYPES: ARRAY,OBJECTS,FUNCTIONS
ARRAY:
 */
const outsideTemp=null
console.log(outsideTemp);//gives null
// SYMBOL: IN SYBOL IF VALUE IS SAME UNDER DIFFERENT VARIABLE THEN THEY ARE ALSO DIFEERENT LIKE HERE:
// THE MAIN PURPOSE OF SYMBOL IS TO GIVE UNIQUE IDENTIFIATION.
const id= Symbol('123')
const anotherid= Symbol('123')
console.log(id===anotherid);// not equal(false)
//BIGINT
const bigNumber=556489624869178621n// n :automatically represent number as BIGINT
// ARRAY, OBJECTS, FUNCTIONS: 
//typeof all non-primitive dataypes comes out as object always, and the type of function is called object function.
const heros=["shaktiman","naagraj","doga"]//array

//OBJECT CAN BE WITH ANY DATATYPE
let myObj={
    name:"anuj",
    age: 22,
}
//FUNCTION
const myFunction=function(){
    console.log("Helo world");
    
}
console.log(typeof outsideTemp);

console.log(typeof myFunction);

//************************************MEMORY***********************************
// STACK MEMORY USED IN PRIMITIVE TYPE: HERE THE COPY OF VARIABLE DECLARED IS GIVEN, HERE CHANGES ARE DONE IN THE COPY
//HEAP MEMORY IS USED IN NON-PRIMITIVE TYPE(REFERENCE MEMORY): HERE THE REFERNCE OF THE VARIABLE IS GIVEN. HERE CHANGES ARE DONE IN ORIGINAL VALUES
console.log("For Memory");

let myYoutubename="Anujxrana"//goes in stack
let anothername= myYoutubename
anothername="anujjj"//here change is doen in the copy so the original value will remain the same.
console.log(myYoutubename);
console.log(anothername);
//stack: one on one
//heap:here refence of user 1 is given to user 2 not a copy. 
let user1={ 
    email: "anujrana@mail.com",
    upi:"user@hdfc"
}
let user2=user1
//accessing in user2
user2.email="anuj@google.com"// here the changes have been done in user 1 and its reference is given upon here. so changesa are applied over here.
console.log(user2.email);
console.log(user1.email);


