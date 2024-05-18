/**
 * Author:      Dustin Craven
 * Date:        5/16/24
 * File Name:   server.js
 * Description: Server and routes for a character creation application.
 */
"use strict";

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  //Parse url and query and get the path
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Creates character object to store character data
  let character = {
    characterClass: '',
    characterGender: '',
    characterFunFact: ''
  };

  if(pathname === "/createcharacter" && req.method === "POST"){
    //Set HTTP code for successful response
    res.writeHead(201);

    character.characterClass = query.class;
    character.characterGender = query.gender;
    character.characterFunFact = query.fact;

    res.end(`Character created successfully.`);
  } else if(pathname === "/confirm" && req.method === "POST") {
    //Set HTTP code for successful response
    res.writeHead(200);
    res.end(`Character has been created.`);
  } else if(pathname === "/viewcharacter" && req.method === "GET") {
    //Set HTTP code for successful response
    res.writeHead(200);
    res.end(`Character Class: ${character.characterClass}\nCharacter Gender: ${character.characterGender}\nCharacter Fun Fact: ${character.characterFunFact}`);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;