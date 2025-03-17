// Question 01
// You are creating a website for your college. Create a class "User" with 2 properties
// name and email. It also has a method claled viewData() that allow user to view
// webste data

let Data = "Information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data = ", myData);
  }
}

// Question 02
// Create a new class called Admin which inherits from User. Add a new method called
// editData to Admin that allows it to edit website data

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    Data = "Some new data";
  }
}

let std1 = new User("Jasim", "jasim@email.com");
let std2 = new User("test", "test@email.com");

let admin = new Admin("admin", "admin@gmail.com");
