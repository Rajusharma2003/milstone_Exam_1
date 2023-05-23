


// This is a JavaScript code for (Calculate final order price).



let cart =  [
    { 

    cost : 5000,
    quantity : 2,

},
];


function FinalOrderPrice(cart){

    let totalCost = 0;
    for( let item of cart){

        totalCost += item.cost * item.quantity;
    }
    return totalCost;
}

console.log(FinalOrderPrice(cart));