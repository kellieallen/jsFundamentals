let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    "water": true,
    sun: true,
    size: 10
  };

  // Square bracket notation can help us be able to find a value in an object. This way can be handy if we need to set a key to a variable and then use that variable to parse through an object

// It works because of the fact that all property keys( before the colon) are strings

console.log(garden.vegetable);
let x = 'vegetable';
console.log(garden[x]); // this works with square brackets because the bracket tell the computer to look for a key

let baking = {};
baking['zucchini'] = 'better make some bread'; // we can also set a key/value pair w/square brackets
console.log(baking);

// console.log(baking.garden.vegetable); // won't work because garden doesn't exist

console.log(baking[garden['vegetable']]);

let key = 'water';

Object.keys(garden).forEach(g => {
if(key === g) {
    console.log(garden[key]);
}
}
)