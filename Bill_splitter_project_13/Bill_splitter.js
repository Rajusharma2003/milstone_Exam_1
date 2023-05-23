

// This is JavaScript code for (Bill splitter).

function BillSplitter (arrayCostPerDish , NumberOfPerson){

    let totalbill = 0;

    for( let  i = 0; i < arrayCostPerDish.length ; i++){
        totalbill += arrayCostPerDish[i];
    }

    // This is a Object.
    return{
        totalbill : totalbill,
        BillPerPerson : totalbill / NumberOfPerson
    };

}

console.log(BillSplitter([200 ,333] , 2));