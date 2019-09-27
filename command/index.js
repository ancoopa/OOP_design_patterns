const { LightOnCommand, TVOnCommand } = require('./commands');

class Invoker {
  commands = {};

  addCommand(name, command) {
    this.commands[name] = command;
  }

  executeCommand(name) {
    console.log(`Executing ${name}...`);
    this.commands[name].execute();
  }

  unexecuteCommand(name) {
    console.log(`Unexecuting ${name}...`);
    this.commands[name].unexecute();

    // Also, unexecute command may be a classic "undo the last action".
  }
}

const invoker = new Invoker();
invoker.addCommand('lightOn', new LightOnCommand());
invoker.addCommand('tvOn', new TVOnCommand());

invoker.executeCommand('lightOn');
invoker.unexecuteCommand('lightOn');

invoker.executeCommand('tvOn');
invoker.unexecuteCommand('tvOn');
