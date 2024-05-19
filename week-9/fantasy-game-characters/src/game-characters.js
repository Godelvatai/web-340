/**
 * Author:      Dustin Craven
 * Date:        5/19/24
 * File Name:   game-characters.js
 * Description: GameCharacters class that retrieves and processes data from a separate .js file using Node.js child processes.
 */
"use strict";

const { spawn } = require("child_process");
const { join } = require("path");
const dataFile = join(__dirname, "game-characters-data.js");

class GameCharacters {
  constructor(scriptPath = dataFile) {
    //Set the script file path
    this.scriptPath = scriptPath;
  }

  getCharacters(callback) {
    // TODO: Implement this method
    const child = spawn("node",[this.scriptPath]);

    //Event handling for successful retrieval of data from the path
    child.stdout.on("data", (data) => {
      const characterData = JSON.parse(data.toString());
      callback(characterData, null);
    });

    //Event handling for error caused by the output of the given path being an error
    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    //Event handling for errors caused by the creation of the child variable during the spawn function
    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(null,error);
    })
  }
}

module.exports = { GameCharacters };