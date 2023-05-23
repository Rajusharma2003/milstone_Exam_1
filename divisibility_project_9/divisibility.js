

       
       const form = document.getElementById('form');
       const input = document.getElementById('input');
       const massage = document.getElementById('massage');


       
       function fun(){   // When yor click (Button) Than run this function.

        form.addEventListener("submit", function (event) {
            event.preventDefault();  // for no reloade and submit .  

        });
        
        const  inputarr  = input.value.split(',');
        const  DivisibleNumber = []; //This is a Blankbox for store Array value.


        for( let i = 0 ; i<inputarr.length; i++){

            const currentNumber = parseInt(inputarr[i]);

            if(isNaN(currentNumber)){
                alert("Sorry You Write a Wrong Input ! Pls Try Again.")
            }
            
            if(currentNumber %2 === 0){
                continue;
            }

            if(currentNumber %3 ===0){
               DivisibleNumber.push(currentNumber);
            }
        }


       if(DivisibleNumber.length > 0){
 
        massage.innerHTML = "Numbers that satisfy the Condition : " + DivisibleNumber;
       }
       else{
        massage.innerHTML = "Numbers that not satisfy the Condition !";
       }
    }

    

