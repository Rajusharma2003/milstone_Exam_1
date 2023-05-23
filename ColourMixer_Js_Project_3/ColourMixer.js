
// JavaScript 

let form = document.querySelector("#form");

let FirstColourInput = document.querySelector("#colour1");
let SecondColourInput = document.querySelector("#colour2");

let ColourMixerbtn = document.querySelector("#ColourMixer");  // This is for button.

let ColourBox = document.querySelector("#displayColour");
let ColourName = document.querySelector("#displayColourName");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const Firstcolour = FirstColourInput.value.toLowerCase();       //This is a input tag so that's way ((.innerText) is not working in this function so we can use the (.Value) property).
  const Secondcolour = SecondColourInput.value.toLowerCase();     // In case (Any person input value in a upercase) then   (.toLowerCase())Function convert into a => toLowerCase.


  // Using  switch Case //

  let colourMixed;  // Creating variable for (Store all The colours.)
// This is a First Statement.
  switch (Firstcolour) {
    case "red":
      switch (Secondcolour) {
        case "blue":
          colourMixed = "purple";//Mixed Colour.
          break;

        case "yellow":  //red or yellow (red is comman)
          colourMixed = "orange";//Mixed Colour.
          break;

        default:
          colourMixed = "This is a invailed colour combination";
      }
      break;

// This is a Second Statement.
    case "blue":  
      switch (Secondcolour) {
        case "red":
          colourMixed = "purple";  //Mixed Colour.
          break;

        case "yellow":  // blue is comman.
          colourMixed = "green";//Mixed Colour.
          break;

        default:
          colourMixed = "This is a invailed colour combination";
      }
      break;

    case "yellow":
      switch (Secondcolour) {
        case "red":
          colourMixed = "orange";//Mixed Colour.
          break;

        case "blue":
          colourMixed = "green";//Mixed Colour.

        default:
          colourMixed = "This is a invailed colour combination";
      }
      break;

      default:
        colourMixed = "This is a invailed colour combination";

  }

    if (colourMixed == "This is a invailed colour combination"){
      // CSS apply inside the (ColourBox)
        ColourBox.style.backgroundColor = "white";   // ColourBox is a container of all the colour .

        
    }

    else{
        ColourBox.style.backgroundColor = colourMixed;
    }

// Value Store inside the ColourName Variable box.
    ColourName.textContent = colourMixed;
   
});








