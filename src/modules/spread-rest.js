console.info('spread-rest.js');

/* Spreading */
const oldArray = [1,2,3];
const newArray = [...oldArray,4,5];

console.log( newArray );

const oldObject = { 
    name: 'Dhananjaya'
}; 

const newObject = {
    ...oldObject,
    twitter: 'dkarandana'
};

console.log( newObject );

console.info('/****** Rest Parameter ***********/')
/* Rest Parameter */

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
}
  
myFun("one", "two", "three", "four", "five", "six")

