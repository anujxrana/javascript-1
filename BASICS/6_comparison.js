console.log(2>1);
console.log("1">1);// allows you to compare 2 different datatypes unlike typescript
console.log(null>1);
// can confuse most of the time, thus we avoid this ofr clean code
console.log(null>0);//1
console.log(null==0);//2, works differently
console.log(null>=0);// 3 true; here value conversion problems comes
// the reson is that an equality  check== and comparisons ><>= <= work differently.
//comparisons convert null to a number, treating it as 0.
//that's why (3) null>=0 is true and (1)null>0 is false
console.log("for undefined");

console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined>0);

console.log("Strict check");// checks the value strictly along with its datatype
console.log("3"===3);// here data type is different
