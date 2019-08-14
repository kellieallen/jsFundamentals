let hi = () => {
    return 'hi';

};

let newName = hi();

console.log(newName);

// in above example
// return is the keyword that brings our data out of our function
// newName is we need a new variable to hold the value of the return
// hi() when called, the function becomes the value of the norm

let capitalizedName = (name) => {
    let capName = ' '; // the empty quotes mean we will fill it in later but are initializing now
    for (let letter in name) {
        if(letter == 0){
            capName += name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();

        }
        }
        return capName;
    }

    const myName = capitalizedName('ingEboRg');
    console.log(myName + ' how are you doing?')

    let tip = (x) => {
        console.log(`Your total is $${x*.2+x} with tip.`);
        
        return tip;
    }
    tip(5)
   