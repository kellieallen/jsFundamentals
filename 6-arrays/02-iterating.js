// forEach() method executes a provided function once for each element array

// forEach() has three arguments: currentValue, the index, and the entire array
// currentValue = the current element being processed in the array
// index = the index of the current element being processed
// arrary = the array the forEach method was called upon

let food = ['Spaghetti', 'Linguine', 'Wings', 'Pizza', 'Popcorn']

food.forEach(f => {console.log(f)}); // f represents each food element

// food.forEach((f, number => {console.log(f, number)})); //not sure what I did wrong here


food.forEach((f, number, array) => {console.log(f, number, array)});

let movies = ['Terminator', 'Parent Trap', 'Aladdin']
movies.push('Lion King');
movies.splice(2, 2, 'Star Wars');
movies.forEach(f => {console.log(f)});
