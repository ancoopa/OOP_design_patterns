const { TV, Light } = require('./receivers');

// Commands are the key part of the pattern. All the rest may vary depends on the sutuation.
class ICommand {
  execute() {}
  unexecute() {}
}

class LightOnCommand extends ICommand {
  light = null;

  constructor(light = new Light()) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }

  unexecute() {
    this.light.turnOff();
  }
}

class TVOnCommand extends ICommand {
  tv = null;

  constructor(tv = new TV()) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.turnOn();
  }

  unexecute() {
    this.tv.turnOff();
  }
}

module.exports = { LightOnCommand, TVOnCommand };
