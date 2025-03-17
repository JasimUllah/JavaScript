class Car {
  constructor(brand) {
    console.log("creating new object");
    this.brand = brand;
  }

  start() {
    console.log("start the car");
  }

  stop() {
    console.log("stop the car");
  }

  //   setBrand(brand) {
  //     this.brand = brand;
  //   }
}

let fortuner = new Car(); // object of class Car
// fortuner.setBrand("Fortuner");
let lexus = new Car();
