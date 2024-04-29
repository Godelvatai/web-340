"use strict";
const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testMercuryToPluto() {
  // TODO: Implement this function
  try {
    assert.strictEqual(calculateDistance('Mercury','Pluto'), 39.1);
    return true;
  } catch(error) {
    console.error(`Failed testMercuryToPluto: ${error.message}`);
    return false;
  }
}

function testEarthToMars() {
  // TODO: Implement this function
  try {
    assert.strictEqual(calculateDistance('Earth','Mars'), .5);
    return true;
  } catch(error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testNeptuneToVenus() {
  // TODO: Implement this function
  try {
    assert.strictEqual(calculateDistance('Neptune','Venus'), 29.3);
    return true;
  } catch(error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Call your test functions here
testMercuryToPluto;
testEarthToMars;
testNeptuneToVenus;

console.log("All tests passed.")