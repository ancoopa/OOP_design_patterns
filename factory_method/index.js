const { RandomAnimalFactory, BalancedAnimalFactory, AnimalFactory } = require('./factories');

const animalRandomFactory = new AnimalFactory(new RandomAnimalFactory());
const random0 = animalRandomFactory.createAnimal('Wof!');
const random1 = animalRandomFactory.createAnimal('Meaw!');
const random2 = animalRandomFactory.createAnimal('Quack!');
console.log('Random factory:')
console.log(random0.name, random0.type);
console.log(random1.name, random1.type);
console.log(random2.name, random2.type);

const animalBalancedFactory = new AnimalFactory(new BalancedAnimalFactory());
const dog = animalBalancedFactory.createAnimal('Wof!');
const cat = animalBalancedFactory.createAnimal('Meaw!');
const duck = animalBalancedFactory.createAnimal('Quack!');
console.log('Balanced factory:')
console.log(dog.name, dog.type);
console.log(cat.name, cat.type);
console.log(duck.name, duck.type);
