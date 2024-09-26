const name="anuj"
const repocount =50
console.log(name + repocount+" value");//outdated
console.log(`my name is ${name} and my repositary is ${repocount}`);//string interpolation
console.log(`my name is ${name} and i am ${repocount} years old`);//STRING INTERPOLATION
const gameName= new String('Anuj RANA')
const game2= new String('PLACEMENT-head')
console.log(gameName[0]);//ACCESSING THE 0th VALUE OF THE KEY VALUE PAIR
console.log(gameName.__proto__);// tells its is an object;accesing the proto type

// USING SOME OBJECTS//METHODS OF VARIABLE
console.log(gameName.length);
console.log(gameName.toLowerCase());//lower case
console.log(gameName.toUpperCase());//Here original value is not changed as heap memory is used
console.log(gameName.charAt(5));//tells us the character at this position
console.log(gameName.indexOf('n'));
//GAME2 VARIABLE
const newstring= game2.substring(0,4)//4 is not included here, here -ve values are ignored
console.log(newstring);

const anotherString= game2.slice(-13,4)// we can also give -ve values. 
console.log(anotherString);

const newString1='     ANUJ    '
console.log(newString1);// All spaces come up here, but we don't need these spaces in our form.**EXCEPT PASSWORD FIELD**  WORKS ONLY ON WHITHE SPACE CHARACTERS
console.log(newString1.trim());// ALL THE UNWANTED SPACE IS GONE HERE

const url='https://anujxrana.com/anuj%20rana'// Browser don't understand spaces but instead chages it to %20.
console.log(url.replace('%20','-'))// Replaces %20 with '-'
console.log(url.includes('anuj'))// Tells us if anuj is there in string or not, Returns 'TRUE' as it is there.
console.log(url.includes('bhupinder'))// Gives false


//********CONVERTING INTO ARRAY*********
console.log(game2.split('-'));//'-' is a seprator here. We can also give limit here.


//*************TRYING METHODS OF STRING************ */
const tryNew= new String("Chandigarh University")
console.log(tryNew.at(5));//Gives the element at that place
console.log(tryNew.slice(4));// terminates the characters till that no.







