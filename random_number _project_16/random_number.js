

// This is a javaScript code for ( Generate a random number).


const randomNumber = () => {
    const max = 100;
    return Math.floor(Math.random() * (max));
    
    };
    console.log(randomNumber());





// This is a (Second approch of this question). Using Immediately invoke.
// const randomNumber  = ( () => {

//     const min  = 1; // you can also initialisation value (0).
//     const max = 100;

//     return Math.floor(Math.random() * (max - min +1) + min)
// })();

// console.log(randomNumber);
