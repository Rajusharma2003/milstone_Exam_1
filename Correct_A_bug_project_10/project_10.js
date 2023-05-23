

// This is a project 10  (Correct A bug).

const number = [1,2,3,4,5,6];
let numbersdouble  = [];


// This is a function to change the single vaule to double value.
function doublenumber (num){
    return num*2;
}


// This is a (for loop) 

for(let i = 0; i<number.length ; i++){
    numbersdouble.push(doublenumber(number[i]));
}

console.log(numbersdouble);

