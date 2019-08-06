// ternary is a shorthand version of an if else statement

let number = 6;
if(number > 0) {
    console.log(true);
} else {
console.log(false);
}


(number > 0) ? console.log(true) : console.log(false);

if (number == 0) {
    console.log('Number is 0');

} else if (number >= 5) {
    console.log('Number is bigger than 5');

} else if (number <= 0) {
    console.log('Number is smaller than 0');

} else {
    console.log('Nope');
}
    
(number == 0) ? console.log('Number is 0') : (number >= 5) ? 
console.log ('Number is bigger than 5') : (number > 0) ? console.log('Number is smaller than 0') : console.log('Nope');

let number = 20;
(number >= 25) ? console.log('You can rent a car') : (number >= 21) ? console.log('You can drink') : (number >= 18) ? console.log('You can vote') : console.log('You cannot do anything')