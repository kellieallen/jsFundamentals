// * Types

//* Booleans

// Boolean can represent: true/false, yes/no, on/off

let i = true;

let j = false;

let on = true;

let off = false;

console.log(on, off);

// * Null
// * Null = empty value; -- not 0, not undefined

let empty = null;
console.log(empty);


// * Undefined 
// Undefined = no value assinged (not even an empty container)

let undef = undefined;
console.log(undef);

// * Numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999;
console.log(precise);

let rounded = 99999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10  + 0.1 * 10) / 10;
console.log(numbersAreHard);

// * Strings

let stringOne = "double quotes";
let stringTwo = 'single quoets';

console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

//  * Objects 

let car = {

    color: 'red',
    tires: 4,
    extras: 'A/C and radio',
    cool: true
};

 console.log(car);

 // * Array

 let list = [ 'item1', 'item2', 'item3'];

 // list = name of array
 // square brackets denote arrays
 // items in list separated by commas


 let burritos = ['large', 4, true];
 console.log(burritos);

 console.log(typeof burritos);

 //* Addition vs Concatenation

/* When JS sees combining two or more numbers, it adds the values together using 
the built-in math functionality; when it sees adding together one or more strings, 
it changes and the plus sign becomes an assignment operator--it smashes the values 
together without trying to synthesize the values
*/

let third = 1050 + '100';
console.log(third);
console.log(typeof third);


let firstName = 'Kellie';
let lastName = 'Allen';
let houseNumber = 4223;
let street = 'Carrollton Avenue';
let city = 'Indianapolis';
let state = 'IN';
let zipcode = 46205;

console.log(firstName ,lastName ,'\n',houseNumber, street ,'\n',city + "," + state ,  + zipcode);

/*
Strings - Properties
********************
Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */ 

 let myName = 'Ingeorg';
 console.log(myName.length);

 /*Methods
************
Methods are like tool that can help us manipulate our data. 
.Property and .Methods() *no parenthesis for properties*
*/

let myNameIs = 'Ingeborg';
console.log(myNameIs.toUpperCase());

let home = 'My home is indianapolis';
console.log(home.includes('indianapolis'));

let sent = 'This sentence will be split into individual parts ';
console.log(sent.split(' '));


