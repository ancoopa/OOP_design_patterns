const { AbstractAnimalFactory } = require('./factories');
const { BlackDog, WhiteDog, BlackCat, WhiteCat } = require('./animals');

const blackFactory = new AbstractAnimalFactory(BlackDog, BlackCat);
const blackCat = blackFactory.createCat('Meow');
const blackDog = blackFactory.createDog('Wof');
console.log(`${blackCat.subtype} ${blackCat.type} ${blackCat.name}`);
console.log(`${blackDog.subtype} ${blackDog.type} ${blackDog.name}`);

const whiteFactory = new AbstractAnimalFactory(WhiteDog, WhiteCat);
const whiteCat = whiteFactory.createCat('Meow');
const whiteDog = whiteFactory.createDog('Wof');
console.log(`${whiteCat.subtype} ${whiteCat.type} ${whiteCat.name}`);
console.log(`${whiteDog.subtype} ${whiteDog.type} ${whiteDog.name}`);
