class Car {
  start() {
    console.log("start the car");
  }

  stop() {
    console.log("stop the car");
  }

  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new Car();
fortuner.setBrand("Fortuner");
