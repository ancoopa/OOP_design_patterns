class AbstractAnimalFactory {
  // can create families of related or dependent objects
  
  constructor(dogClass, catClass) {
    this.dogClass = dogClass;
    this.catClass = catClass;
  }
  
  createCat(name) { // factory method itself
    return new this.catClass(name);
  }
  
  createDog(name) { // factory method itself
    return new this.dogClass(name);
  }
}

module.exports = { AbstractAnimalFactory };
