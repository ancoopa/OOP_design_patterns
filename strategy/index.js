class Cat {
  constructor(ISoundBehavior) {
    this.soundBehavior = ISoundBehavior;
  }
  makeSound() {
    return console.log(this.soundBehavior.makeSound());
  }
}
class ISoundBehavior {
  constructor() {
    this.type = 'Standard cat';
    this.voice = 'Meow';
  }
  makeSound() {}
}


class StandadCatSoundBehavior extends ISoundBehavior {
  makeSound() {
    return 'Standard cat says Meow!';
  }
}
class RoboCatSoundBehavior extends ISoundBehavior {
  makeSound() {
    return 'Rorobic cat says Wggggggg!';
  }
}


const standardCat = new Cat(new StandadCatSoundBehavior());
const roboCat = new Cat(new RoboCatSoundBehavior());

standardCat.makeSound();
roboCat.makeSound();
