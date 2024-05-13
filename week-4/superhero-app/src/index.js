/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

const readline = require("readline");
const SuperheroEmitter = require("./superhero");

const superhero = new SuperheroEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the superhero object
superhero.on("action", action => {
  console.log(`Superhero performed action: ${action}`);
});
superhero.on("danger", danger => {
  console.log(`Superhero encountered danger: ${danger}`);
});
superhero.on("help", help => {
  console.log(`Superhero helped: ${help}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  
  let commandInput = "";
  for(let i in args) {
    commandInput += args[i]+" ";
  }
  commandInput = commandInput.slice(0,-1);

  // TODO: Handle the commands
  if(command === "action") {
    superhero.performAction(commandInput);
  }
  if(command === "danger") {
    superhero.encounterDanger(commandInput);
  }
  if(command === "help") {
    superhero.helpSomeone(commandInput);
  }
  if(command === "exit") {
    rl.close();
  }
});

console.log(`Enter a command: "action", "danger", or "help", followed by a space and the argument.`);