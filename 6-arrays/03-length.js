let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length); // this returns 10 

let colors = ['blue', 'green', 'yellow', 'black', 'fuschia pink']
console.log(colors.length); // this retursn 5
console.log(colors.toString()); // this returns the list of items
console.log(typeof colors.toString());


let arr = [1, 2, 3, 4, 5]
if(arr instanceof Array === true); {
 let revNumbers = arr.reverse();
revNumbers.forEach(arr => console.log(arr));
}