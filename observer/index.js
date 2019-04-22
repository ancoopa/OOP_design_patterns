class IObservable {
  add(observer) {}
  remove(observer) {}
  notify() {}
}

class IObserver {
  update() {}
}

class ChatRoom extends IObservable {
  constructor() {
    super();
    this.clients = [];
    this.messages = [];
  }
  add(client) {
    this.clients.push(client);
  }
  remove(client) {
    this.clients.splice(this.clients.indexOf(client), 1);
  }
  notify() {
    this.clients.forEach(client => client.update());
  }
  getMessages() {
    return this.messages;
  }
  addMessage(message) {
    this.messages.push(message);
    this.notify();
  }
}

class Client extends IObserver {
  constructor(room, name) {
    super();
    this.room = room;
    this.name = name;
    this.update();
  }
  update() {
    this.messages = this.room.getMessages();
  }
  writeMessage(message) {
    this.room.addMessage(`${this.name}: ${message}`);
  }
}


const room = new ChatRoom();
const client1 = new Client(room, 'client1');
const client2 = new Client(room, 'client2');

room.add(client1);
room.add(client2);

client1.writeMessage('hello!');
client2.writeMessage('hi!');

console.log('room.messages: ', room.messages);
console.log('client1.messages: ', client1.messages);
console.log('client2.messages: ', client2.messages);
