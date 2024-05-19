/**
 * Author:      Dustin Craven
 * Date:        5/18/24
 * File Name:   character-creator.spec.js
 * Description: Test file for character-creator.js.
 */
"use strict";

const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

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

  //The expected output for each test charcter
  let expectedOutputTest1 = "--Character Data--\nClass: Mage\nGender: Male\nFun Fact: I create random effects when I cast magic sometimes.";
  let expectedOutputTest2 = "--Character Data--\nClass: Warrior\nGender: Female\nFun Fact: I can lift an entire wagon with the horses still attached.";
  let expectedOutputTest3 = "--Character Data--\nClass: Rouge\nGender: Other\nFun Fact: I can pick a lock with one hand.";

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    //Create array of test characters
    const characters = [characterTest1, characterTest2, characterTest3];

    //Convert object to string for input with JSON.stringify for each character of array
    characters.forEach(character => characterCreator.write(JSON.stringify(character)));

    characterCreator.on('data', (data) => {
      const character = characters.shift();
      expect(data.toString().trim()).toBe(`--Character Data--\nClass: ${character.characterClass}\nGender: ${character.characterGender}\nFun Fact: ${character.characterFact}`);
      if(characters.length === 0) done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    //Check for error message for invalid data
    characterCreator.on('error', (err) => {
      expect(err.message).toBe("Invalid character data");
      done();
    });

    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    //Convert object to string for input with JSON.stringify
    characterCreator.write(JSON.stringify(characterTest1), 'utf8', () => {
      characterCreator.on('data', (data) => {
        expect(data.toString().trim()).toBe(expectedOutputTest1);
        done();
      });
    });
  });
});