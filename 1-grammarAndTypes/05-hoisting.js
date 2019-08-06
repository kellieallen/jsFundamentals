// Hoisitng

// Hoisting does not exist. It is an illusion. Code doesn't actually get moved.
// JS reads throught code twice remembering left hadn side variables and functions.



console.log(scissors)

scissors = 'blue';
console.log(scissors);

b();
console.log(a);

function b(){
    console.log('this is all hoisted!');

}

var a = 'This is not hoisted';
