let weather = 65;

if (weather < 70 ) {
    console.log('Wear a jacket!');

} else {
    console.log('No jacket needed!');

}

let x = 'Kellie';

if (x == 'Kellie') {
    console.log('Hello, my name is ' + x);

} else {
    console.log('Hello, is your name ' + x);
}


let name = 'AUTuMN';

if (name[0] === name[0].toUpperCase() ) {
    console.log('name[0]');

} else {
    console.log(name);
}

let name = 'aUTuMN';
if (name[0] === name[0].toUpperCase() ) {
    console.log(name[0]);

} else {
    console.log(name);
}

//charAT(0) -- method
//[0] squarebracket notation

let name = 'aUTuMN';

if(name.charAt(0) === name.charAt(0).toUpperCase()) {
    firstLetter = name.charAT(0) + name.slice(1).toLowerCase();
    console.log(firstLetter);


} else {
    console.log(name.slice(1).toLowerCase());
}


function foo () {
    return bar();
    function bar() {
      return "Poppin' bottles";
    }
  }
  console.log(foo());