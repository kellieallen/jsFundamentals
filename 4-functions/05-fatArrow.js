let hi = () => {
    console.log('hello!')
}

hi();

// equals sign assigns the fat arrow function to a variable
// fat arrow (=>)  signifies its function
// example above is called Block Body


// Consise Body is below

let hi = () => console.log('hi');

let apples = x => console.log(`There are ${x} apples in the basket.`);
apples(10);

// only need parenthesis if you have more than one paramteter
// Return (if one-line fat arrow function) is implied

let apples = (x) => {
    console.log(`There are ${x} apples in the basket.`);

}
apples(7);

// line breaks matter in fat arrow functions

let func = () => console.log('hi'); // this works

let func = ()
 => console.log('hi'); // doesnt work