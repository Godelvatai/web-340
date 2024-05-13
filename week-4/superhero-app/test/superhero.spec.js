/**
 * Author:      Dustin Craven
 * Date:        4/28/24
 * File Name:   superhero.spec.js
 * Description: Testing File for superhero emitter class
 */
"use strict";

const assert = require("assert");
const SuperheroEmitter = require("../src/superhero");

const superhero = new SuperheroEmitter();

// TODO: Write tests for the SuperheroEmitter using TDD principles

function testPerformAction() {
  try {
    //Event listener for 'action' event
    superhero.on("action", action => {
      console.log(`Superhero performed action: ${action}`);
    })
    superhero.performAction("fly");
    console.log("Passed testPerformAction");
    return true;
  } catch(error) {
    console.error(`Failed testPerformAction: ${error}`);
    return false;
  }
}


function testEncounterDanger() {
  try {
    //Event listener for 'danger' event
    superhero.on("danger", danger => {
      console.log(`Superhero encountered danger: ${danger}`);
    })
    superhero.encounterDanger("fire");
    console.log("Passed testEncounterDanger");
    return true;
  } catch(error) {
    console.error(`Failed testEncounterDanger: ${error}`);
    return false;
  }
}


function testGiveHelp() {
  try {
    //Event listener for 'help' event
    superhero.on("help", help => {
      console.log(`Superhero helped: ${help}`);
    })
    superhero.performAction("Mary Jane");
    console.log("Passed testGiveHelp");
    return true;
  } catch(error) {
    console.error(`Failed testGiveHelp: ${error}`);
    return false;
  }
}

testPerformAction();
testEncounterDanger();
testGiveHelp();