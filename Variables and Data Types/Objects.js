// Objects are stored in key pair values
// We cannot assign an equal operator we use instead colon (:)

const student = {
    fullName: "Jasim Ullah",
    age: 24,
    cgpa: 3,
    isPass: true
};

console.log(student)

console.log(student["age"])
console.log(student["fullName"])

student["age"] = student["age"] + 1
console.log(student["age"])