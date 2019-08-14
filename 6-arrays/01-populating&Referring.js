// ARRAYS

// use square brackets, are a list of items, index starts at 0, 
// are an object (which contain multiple data tyepes

let list = [ 'item', 'item2', 'item 3'];

// for example above, name of the array is "list"
// for example above, array is inside square brackets
// for example above, each item regardless of data type, is separated by commas

console.log(list[1]) // this will return "item 2" because it's the second item in list

console.log(list) // this will return everything including brackets

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Josh', 'Eric', 'Sam']];

console.log(typeof students); // will return "object" because an array is an object

console.log(students instanceof Array); // returns true because it is an array.result is boolean so would be true or false

let name = students[6][2];
console.log(`Hello, ${name} how are you today?`) // need to use 6, 2 because there are two different arrays

// Populating

let food = ['Spaghetti', 'Linguine', 'Wings', 'Pizza', 'Popcorn']

food.push('Tacos');
food.splice(1, 1, 'Bananas') // 1,1 = remove something in position 1, then add something in position 1
food.splice(2, 0, 'Sweet Potato Pie'); //
food.pop(); // removes the last item (taco)
food.shift(); // opposite of pop, removes first item (spaghetti)
food.shift('Fruit Snacks') // adds something new to the beginning of the array

for (yum of food) {
    console.log(yum);
}

let kids = ["Sam", "Dan", "Eric", "Jon"];
// let name = kids[2][0];

// console.log(`Hi, ${name}`);

kids.push('Wayne');
for (boy of kids) {
    console.log(boy)
}

let family = ["mom", "dad", "sister"];
family.slice("mom")
 {
    console.log(member)
}

