// 5. You are given a JavaScript object representing a student's information. Your task is to use the 'for...in' loop
// to iterate over the properties of the object and perform various operations.

// a. Create a function displayStudentInfo that takes the student object as a parameter. Inside this function, use a
// 'for...in' loop to iterate over the properties of the student object and print each property and its corresponding
// value to the console.


function displayStudentInfo(student) {
  for (let property in student) {
    if (student.hasOwnProperty(property)) {
      console.log(`${property}: ${student[property]}`);
    }
  }
}

// Example student object
const student = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
  grade: 'A'
};

// Call the function
displayStudentInfo(student);
