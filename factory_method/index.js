const { RandomAnimalFactory, BalancedAnimalFactory } = require('./factories');

const randomAnimalFactory = new RandomAnimalFactory();
const random0 = randomAnimalFactory.createAnimal('Wof!');
const random1 = randomAnimalFactory.createAnimal('Meaw!');
const random2 = randomAnimalFactory.createAnimal('Quack!');
console.log('Random factory:')
console.log(random0.name, random0.type);
console.log(random1.name, random1.type);
console.log(random2.name, random2.type);

const balancedAnimalFactory = new BalancedAnimalFactory();
const dog = balancedAnimalFactory.createAnimal('Wof!');
const cat = balancedAnimalFactory.createAnimal('Meaw!');
const duck = balancedAnimalFactory.createAnimal('Quack!');
console.log('Balanced factory:')
console.log(dog.name, dog.type);
console.log(cat.name, cat.type);
console.log(duck.name, duck.type);
