/**
 * Author:      Dustin Craven
 * Date:        4/7/24
 * File Name:   index.js
 * Description: 
*/

// TODO: Import your module using require
const recipes = require("./recipes");

// TODO: Implement your CLI program here
const createdRecipe = recipes.createRecipe(["ingredient1", "ingredient2"]);
console.log(createdRecipe);

const timerOutput = recipes.setTimer(55);
console.log(createdRecipe);

const quitOutput = recipes.quit;
console.log(quitOutput);