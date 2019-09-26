class AbstractAnimal {
  name = 'DefaultName';
  type = 'DefaultType';
}

// Animals pair 1
class BlackDog extends AbstractAnimal {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'dog';
    this.subtype = 'black';
  }
}
class WhiteDog extends AbstractAnimal {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'dog';
    this.subtype = 'white';
  }
}

// Animals pair 2
class BlackCat extends AbstractAnimal {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'cat';
    this.subtype = 'black';
  }
}
class WhiteCat extends AbstractAnimal {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'cat';
    this.subtype = 'white';
  }
}

module.exports = { BlackDog, WhiteDog, BlackCat, WhiteCat };
