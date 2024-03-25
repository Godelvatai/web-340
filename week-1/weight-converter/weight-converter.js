/**
 * Author:      Dustin Craven
 * Date:        3/24/24
 * File Name:   weight-converter.js
 * Description: Node.js script that converts pounds to kilograms
*/

"use strict";
const { argv } = require("node:process");

// TODO: Implement the weight conversion logic here
function main() {
  if(process.argv[2]){
    let regex = /^[0-9]/;
    if(process.argv[2].match(regex)) {
      let pounds = process.argv[2];
      let kilograms =  (pounds/2.205).toFixed(2);
      console.log(pounds+" pounds is "+kilograms+" kilograms.");
    } else {
      console.error("Input must be a number");
      process.exit(1);
    }
  } else {
    console.error("Usage: node weight-converter.js <pounds>");
    process.exit(1);
  }
}

//call main function
main();