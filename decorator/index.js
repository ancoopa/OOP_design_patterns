class Beverage {
  constructor(cost, description) {
    this.cost = cost;
    this.description = description;
  }

  getCost() {
    return this.cost;
  }

  getDescription() {
    return this.description;
  }
}

class AddonDecorator extends Beverage {
  addedCost = 0;
  addedDescription = '';

  constructor( beverage = new Beverage()) {
    super();
    this.beverage = beverage;
  }

  getCost() {
    return this.beverage.getCost() + this.addedCost;
  }

  getDescription() {
    return this.beverage.getDescription() + this.addedDescription;
  }
}
class Caramel extends AddonDecorator {
  addedCost = 2;
  addedDescription = ' with caramel';
}
class Soy extends AddonDecorator {
  addedCost = 3;
  addedDescription = ' with soy';
}
class Chocolate extends AddonDecorator {
  addedCost = 1;
  addedDescription = ' with chocolate';
}

const coffee = new Beverage(1, 'Coffee');
const coffeeCaramel = new Caramel(coffee);
const coffeeCaramelSoy = new Soy(coffeeCaramel);
const coffeeCaramelSoyChocolate = new Chocolate(coffeeCaramelSoy);

console.log(`${coffee.getDescription()} cost is ${coffee.getCost()}.`);
console.log(`${coffeeCaramel.getDescription()} cost is ${coffeeCaramel.getCost()}.`);
console.log(`${coffeeCaramelSoy.getDescription()} cost is ${coffeeCaramelSoy.getCost()}.`);
console.log(`${coffeeCaramelSoyChocolate.getDescription()} cost is ${coffeeCaramelSoyChocolate.getCost()}.`);
