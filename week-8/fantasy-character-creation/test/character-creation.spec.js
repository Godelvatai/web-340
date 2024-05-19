/**
 * Author:      Dustin Craven
 * Date:        5/18/24
 * File Name:   character-creation.spec.js
 * Description: Test for character-creation.js file.
 */
"use strict";

const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  //Objects for test characters
  let characterTest1 = {
    characterClass: "Mage",
    characterGender: "Male",
    characterFact: "I create random effects when I cast magic sometimes."
  };
  let characterTest2 = {
    characterClass: "Warrior",
    characterGender: "Female",
    characterFact: "I can lift an entire wagon with the horses still attached."
  };
  let characterTest3 = {
    characterClass: "Rouge",
    characterGender: "Other",
    characterFact: "I can pick a lock with one hand."
  };

  //Create the strings for what the promise should resolve to
  let testCharacters = [JSON.stringify(characterTest1),JSON.stringify(characterTest2),JSON.stringify(characterTest3)];
  let resolvesTo = testCharacters[0]+"\n"+testCharacters[1]+"\n"+testCharacters[2]+"\n";

  beforeEach(() => {
    jest.resetModules();
    jest.spyOn(fs, 'readFile').mockImplementation(() => Promise.resolve(resolvesTo));
    jest.spyOn(fs, 'writeFile').mockImplementation(() => Promise.resolve());
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  test("writes test characters to file", async() => {
    await expect(createCharacter(testCharacters)).resolves.toBeUndefined;
  });

  test("reads characters from file", async() => {
    const characters = await getCharacters();
    expect(characters).toEqual(testCharacters);
  });

  test("handles errors when reading from file", async() => {
    fs.readFile.mockImplementationOnce(() => Promise.reject(new Error("File not found")));

    await expect(getCharacters()).rejects.toThrow("File not found");
  })
});