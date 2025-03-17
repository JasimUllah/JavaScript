// class Parent {
//   helo() {
//     console.log("Hello!");
//   }
// }

// class Child extends Parent {}   // Inherited from Parent class

// let obj = new Child();  // object of child class

class Person {
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }
}

class Engineer extends Person {
  work() {
    console.log("solve problems");
  }
}

let engObj = new Engineer();
