

// This is a JavaScript code for (Banking Application).


let users  = [ 

    {id : "01" , balance : 5000},
    {id : "02" , balance : 5000},
    {id : "03" , balance : 5000},
    {id : "04" , balance : 5000},
    {id : "05" , balance : 5000},
    
];


function deposit (id , ammount){
    for( let i = 0; i < users.length; i++){

        if(users[i].id === id){
            users[i].balance += ammount;
        }
    }
    return users;
}


function withdraw(id , ammount){
    for( let i = 0; i < users.length; i++){

        if(users[i].id === id){
            users[i].balance -= ammount;
        }
    }
    return users;
}


console.log(deposit("01" , 2000));
console.log(withdraw("03" , 2000));