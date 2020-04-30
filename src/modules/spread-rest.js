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