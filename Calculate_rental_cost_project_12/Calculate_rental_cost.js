

// This is a JavaScript code for (Calculate rental cost).


function CalculateRentalCost ( numDays , CarTypes){

    let RentalCost = 0;
    switch(CarTypes){

        case "economy":
        RentalCost = 4000;
        break;

        case "midcar":
        RentalCost = 10000;
        break;

        case "luxury":
        RentalCost = 20000;
        break;

        default:
        console.log("invaild car types");
        
    }


    return  RentalCost * numDays;
}

// This is a input statement of (numDays and RentalCost).
console.log(CalculateRentalCost( 1 , "luxury"));