const Employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
};

const newEmployee = {
  salary: 50000,
};

newEmployee.__proto__ = Employee;