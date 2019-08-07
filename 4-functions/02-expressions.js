// Below are 3 different ways of same thing. 

// declarations get hoisted, expressions do not

//below is declarations

function hi() {
    console.log('HI!');
}

// below is expression

let hey = function hi() {
    console.log('Hi!');
}

// Below is Anonymous Function

let hi = function () {
    console.log('Hey!');

}