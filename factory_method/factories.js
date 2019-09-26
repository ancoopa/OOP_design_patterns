const { Dog, Cat, Duck } = require('./animals');

class AbstractAnimalFactory {
  createAnimal() {
    return { name: 'DefaultName', type: 'DefaultType' };
  }
}
class RandomAnimalFactory extends AbstractAnimalFactory {
  animals = [Dog, Cat, Duck];

  createAnimal(name) {
    const animalClass = this.animals[this.getIndex()];
    return new animalClass(name);
  }

  getIndex() {
    return this.randomInt(3) - 1;
  }

  randomInt(max) {
    return Math.ceil(Math.random() * max);
  }
}

class BalancedAnimalFactory extends AbstractAnimalFactory {
  animals = [Dog, Cat, Duck];
  lastAnimalIndex = null;

  createAnimal(name) {
    const nextIndex = this.getIndex();
    const animalClass = this.animals[nextIndex];
    this.lastAnimalIndex = nextIndex;
    return new animalClass(name);
  }

  getIndex() {
    const isLastAnimal = this.lastAnimalIndex === this.animals.length - 1;
    if (this.lastAnimalIndex === null || isLastAnimal) {
      return 0;
    }
    return this.lastAnimalIndex + 1;
  }
}

class AnimalFactory {

  constructor(factory) {
    this.factory = factory;
  }

  createAnimal(name) {
    return this.factory.createAnimal(name);
  }
}

module.exports = { RandomAnimalFactory, BalancedAnimalFactory, AnimalFactory };
