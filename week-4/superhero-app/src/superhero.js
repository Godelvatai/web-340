/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

const EventEmitter = require("events");

// TODO: Create a SuperheroEmitter class that extends EventEmitter and implements the following methods: performAction, encounterDanger, and helpSomeone
class SuperheroEmitter extends EventEmitter {
  constructor() {
    super();
  }

  performAction(action) {
    this.emit("action", action);
  }

  encounterDanger(danger) {
    this.emit("danger", danger);
  }

  helpSomeone(person) {
    this.emit("help", person);
  }
}

module.exports = SuperheroEmitter;