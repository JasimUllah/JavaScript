// for in is used for objects

let student = {
    name: "Jasim Ullah",
    age: 23,
    cgpa: 3,
    isPass: true
}

for (let key in student) {
    console.log("key =", key, "value =", student[key]);     // This will return the keys of an object
}