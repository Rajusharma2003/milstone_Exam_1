
// This is a unit converter (change fahrenheti to celcius).

let celcius = 30;

function CelciusToFahrenheti (celcius){

   let fahrenheti =  (celcius * 9) /5 + 32;
   let massage  = "clecius is : " + celcius + " Changed celcius to Fahrenheti Value is : " + fahrenheti ;
   return fahrenheti , massage; 
}
 
console.log(CelciusToFahrenheti(celcius));
