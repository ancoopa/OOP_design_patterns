class AbstractAnimal {
  name = 'DefaultName';
  type = 'DefaultType';
}
class Dog extends AbstractAnimal {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'dog';
  }
}
class Cat extends AbstractAnimal {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'cat';
  }
}
class Duck extends AbstractAnimal {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'duck';
  }
}

module.exports = { Dog, Cat, Duck };
