/**
 * Author:       Dustin Craven
 * Date:         3/31/24
 * File Name:    recipes.js
 * Description:  Simple recipe application
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  let outputString = "Recipe created with ingredients: ";
  for(let item in ingredients) {
    outputString += ingredients[item] + ", ";
  }
  outputString = outputString.slice(0, -2);
  return(outputString);
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  return("Timer set for "+minutes+" minutes")
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  return("Program exited")
}

// TODO: Export the functions
module.exports = {createRecipe, setTimer, quit};