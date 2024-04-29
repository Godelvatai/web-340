/**
 * Author:      Dustin Craven
 * Date:        4/28/24
 * File Name:   distance-calculator.js
 * Description: Calculate distance between planets
*/

"use strict";
let distancesFromSun = {
  Mercury: .4,
  Venus: .7,
  Earth: 1.0,
  Mars: 1.5,
  Jupiter: 2.8,
  Saturn: 9.6,
  Uranus: 19.2,
  Neptune: 30.0,
  Pluto: 39.5
}

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  if(distancesFromSun[planet1] && distancesFromSun[planet2]){
    let distance = Math.abs(distancesFromSun[planet1]-distancesFromSun[planet2]);
    return(distance);
  } else {
    console.log("Inputs must both be planets and be spelt correctly.");
    process.exit(1);
  }
}

module.exports = calculateDistance;