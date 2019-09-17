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
  constructor(addedCost, addedDescription, beverage = new Beverage()) {
    super();
    this.addedCost = addedCost;
    this.addedDescription = addedDescription;
    this.beverage = beverage;
  }

  getCost() {
    return this.beverage.getCost() + this.addedCost;
  }

  getDescription() {
    return this.beverage.getDescription() + this.addedDescription;
  }
}

const coffee = new Beverage(1, 'Coffee');
const coffeeCaramel = new AddonDecorator(2, ' with caramel', coffee);
const coffeeCaramelSoy = new AddonDecorator(3, ', with soy', coffeeCaramel);
const coffeeCaramelSoyChocolate = new AddonDecorator(1, ', with chocolate', coffeeCaramelSoy);

console.log(`${coffee.getDescription()} cost is ${coffee.getCost()}.`);
console.log(`${coffeeCaramel.getDescription()} cost is ${coffeeCaramel.getCost()}.`);
console.log(`${coffeeCaramelSoy.getDescription()} cost is ${coffeeCaramelSoy.getCost()}.`);
console.log(`${coffeeCaramelSoyChocolate.getDescription()} cost is ${coffeeCaramelSoyChocolate.getCost()}.`);
