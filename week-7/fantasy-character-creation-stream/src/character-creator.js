/**
 * Author:      Dustin Craven
 * Date:        5/18/24
 * File Name:   character-creator.js
 * Description: Character creation system utilizing Node.js's stream module.
 */
"use strict";

const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    //Convert character data to a string
    const characterInput = chunk.toString();

    if(!characterInput) {
      //Error for invalid input for character data
      callback(new Error('Invalid character data'));

      //Return method to stop code from continuing
      return;
    }

    //Take string input of object and convert it back to an object for the formatted output
    let characterObj = JSON.parse(characterInput);

    //Formatted description of character data
    this.queue.push(`--Character Data--\nClass: ${characterObj.characterClass}\nGender: ${characterObj.characterGender}\nFun Fact: ${characterObj.characterFact}`);
    callback();
  }

  _read(size) {
    // TODO: Implement your _read method here
    if(this.queue.length) {
      this.push(this.queue.shift() + "\n");
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;