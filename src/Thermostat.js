class Thermostat {

  constructor() {
    this.temp = 20
    this.max = 32
    this.min = 10
    this.powermode = false
  }

  up(n) {
    if ((this.temp + n) > this.max) throw Error("max tempreture reached");
    this.temp += n
  }

  down(n) {
    if ((this.temp - n) < this.min) throw Error("10 is the minimum temp");
    this.temp -= n
  }

  powerSwitch() {
   if (this.powermode == false) {
     this.powermode = true;
     this.max = 25;
   }
    else {
    this.powermode = false;
    this.max = 32;
  }


    }

  }
