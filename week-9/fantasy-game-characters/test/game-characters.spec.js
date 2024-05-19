/**
 * Author:      Dustin Craven
 * Date:        5/19/24
 * File Name:   game-characters.spec.js
 * Description: Test for game-characters.js.
 */
"use strict";

const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    //Implement successful run of using game-characters-data,js as child process
    gameCharacters.getCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        {characterClass: "Mage", characterGender: "Male", characterFact: "I create random effects when I cast magic sometimes."},
        {characterClass: "Warrior", characterGender: "Female", characterFact: "I can lift an entire wagon with the horses still attached."},
        {characterClass: "Rouge", characterGender: "Other", characterFact: "I can pick a lock with one hand."}
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    //Implement test for data script file not found
    const gameCharacters = new GameCharacters("nonexistent-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    })
  });

  test("should handle an error when the game characters data script fails", (done) => {
    //Implement test for failing-script.js file as child process
    const gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});