const student = {
  fullName: "Jasim Ullah",
  marks: 90,
  printMarks: function () {
    // If we try to access the marks through the printMarks function
    // we cannot directly access it so we use this instead
    console.log("marks = ", this.marks); // student.marks
  },
};
