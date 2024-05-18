/**
 * Author:      Dustin Craven
 * Date:        5/16/24
 * File Name:   server.spec.js
 * Description: Test for server.js
 */
"use strict";

const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here
describe('server', () => {
  //Close server after each test
  afterAll(() => {
    server.close();
  });

  //Test case for /createcharacter POST
  test("Test /createcharacter POST", done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/createcharacter?class=Mage&gender=Male&fact=I+only+invested+in+lightning+magic',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe('Character created successfully.');
        done();
      });
    });
    req.end();
  });

  //Test /viewcharacter GET to view created character
  test("Test /viewcharacter GET if character has been created", done => {
    http.get('http://localhost:3000/viewcharacter', res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character Class: \nCharacter Gender: \nCharacter Fun Fact: ');
        done();
      });
    });
  });

  //Test /confirm POST to confirm if character was created
  test("Test /confirm POST if character has been created", done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character has been created.');
        done();
      });
    });
    req.end();
  });
});