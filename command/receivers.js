class TV {
  isOn = false;
  
  turnOn() {
    console.log('Turning on the TV...');
    this.isOn = true;
    console.log('TV isOn: ', this.isOn);
  }

  turnOff() {
    console.log('Turning off the TV...');
    this.isOn = false;
    console.log('TV isOn: ', this.isOn);
  }

}

class Light {
  isOn = false;
  
  turnOn() {
    console.log('Turning on the light...');
    this.isOn = true;
    console.log('Light isOn: ', this.isOn);
  }

  turnOff() {
    console.log('Turning off the light...');
    this.isOn = false;
    console.log('Light isOn: ', this.isOn);
  }
  
}

module.exports = { TV, Light };
