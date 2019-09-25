const { RandomAnimalFactory, BalancedAnimalFactory } = require('./factories');

console.log('Random factory:')
const randomAnimalFactory = new RandomAnimalFactory();
const random0 = randomAnimalFactory.createAnimal('Wof!');
console.log(random0.name, random0.type);
const random1 = randomAnimalFactory.createAnimal('Meaw!');
console.log(random1.name, random1.type);
const random2 = randomAnimalFactory.createAnimal('Quack!');
console.log(random2.name, random2.type);

console.log('Balanced factory:')
const balancedAnimalFactory = new BalancedAnimalFactory();
const dog = balancedAnimalFactory.createAnimal('Wof!');
console.log(dog.name, dog.type);
const cat = balancedAnimalFactory.createAnimal('Meaw!');
console.log(cat.name, cat.type);
const duck = balancedAnimalFactory.createAnimal('Quack!');
console.log(duck.name, duck.type);
