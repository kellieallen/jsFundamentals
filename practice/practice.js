for(let i = 0; i <= 10; i++) {
//    console.log(i);
    car(i);
}

function car(i){
   for (let i = 0; i <= 10; i++)
   if(i%2 == 0 ) {
       console.log(i);
   console.log('The number is even');
} else {
    console.log(i);
   console.log('The number is odd');
}
}



/* for(let i = 0; i <= 10; i++) {
    console.log(i);
}

function car(){
   for (let i = 0; i <= 10; i++)
   if(i%2 == 0 ) {
       console.log(i);
   console.log('The number is even');
} else {
    console.log(i);
   console.log('The number is odd');
}
}
car()
*/


let movie = {
    nameOfMovie: "Star Wars", 
    runTime: "2 hours, 5 minutes", 
    genre: "Sci-Fi",
    characters: [
    
    { name: "Luke", age: "19", items: ['lightsaber', 'C3P0']},
    { name: "Leia", age: "19", items: ['Diplomacy', 'pistol']},
    ]

  

    }


console.log(movie.nameOfMovie);
console.log(movie.runTime);
console.log(movie.characters);
console.log(movie.characters[0]['name']);
console.log(movie.characters[0]['items'][0]);








