// Question 01
// You are creating a website for your college. Create a class "User" with 2 properties
// name and email. It also has a method claled viewData() that allow user to view
// webste data

let myData = "Information"

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    viewData() {
        console.log("data = ", myData)
    }
}

let std1 = new User("Jasim", "jasim@email.com")
let std2 = new User("test", "test@email.com")