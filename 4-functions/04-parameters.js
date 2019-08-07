function hi(name) {
    console.log(`Hi ${name}`)
}

hi('Danielle');
hi('Zach');

// 1 - The parameters we need to take into the function. Ex: function hi(name)

// 2 - Unsing string interpolation, we can refer to the paramter we passed. Ex: ${name}`

// 3 - This si where we define what the paramter's value will be. Ex: hi('Zach');

function pet(animal) {
    console.log(`My puppy name is ${animal}`);

}

pet('Mo');
pet('Georgie');
pet('Nug');

function person(fName, lName) {

let wName = fName + lName;
    console.log(`Hi, my name is ${wName}`)
}
person('kellie', 'lName');
