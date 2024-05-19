/**
 * Author:      Dustin Craven
 * Date:        5/19/24
 * File Name:   game-characters-data.js
 * Description: File for game-characters.js to use with Node.js child processes.
 */
"use strict";

const characters = [
  {characterClass: "Mage", characterGender: "Male", characterFact: "I create random effects when I cast magic sometimes."},
  {characterClass: "Warrior", characterGender: "Female", characterFact: "I can lift an entire wagon with the horses still attached."},
  {characterClass: "Rouge", characterGender: "Other", characterFact: "I can pick a lock with one hand."}
];

console.log(JSON.stringify(characters));