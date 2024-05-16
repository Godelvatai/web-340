/**
 * Author:      Dustin Craven
 * Date:        5/14/24
 * File Name:   pie.js
 * Description: Output whether a pie bakes successfully based on the core ingredients of flour, sugar, and butter.
 */
"use strict";

function bakePie(pieType, ingredients) {
  ingredients = ingredients.map(i => i.toLowerCase());

  if(ingredients.includes("flour") && ingredients.includes("sugar") && ingredients.includes("butter")) {
    console.log(`${pieType} successfully baked.`);
  } else {
    console.log(`${pieType} failed to bake.`);
    process.exit(1);
  }
}

module.exports = { bakePie };