/**
 * Author:      Dustin Craven
 * Date:        5/18/24
 * File Name:   character-creation.js
 * Description: Character creation system utilizing Node.js's fs module.
 */
"use strict";

const { readFile, writeFile } = require('fs').promises;
const { join } = require('path');
const CHARACTERS_FILE = join(__dirname, "characters.txt");

async function createCharacter(characters) {
  //
  try {
    const data = characters.join("\n");

    await writeFile(CHARACTERS_FILE, data);
  } catch(err) {
    throw(err);
  }
}

async function getCharacters() {
  //
  try {
    const data = await readFile(CHARACTERS_FILE, "utf8");
    const characters = data.split("\n").filter(character => character);
    return characters;
  } catch(err) {
    throw(err);
  }
}

module.exports = { createCharacter, getCharacters };