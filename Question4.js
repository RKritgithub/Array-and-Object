// 4. Assignment: Building a Student Management System
// Description:
// You are tasked with building a student management system using JavaScript. The system should allow you to
// perform various operations on a list of students, including adding, updating, deleting, and displaying student
// information.
// Requirements:
// Here is an initial array of students. Each student is represented as an object with the following properties: id,
// firstName, lastName, age, and grade.

let students = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 18, grade: 'A' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 19, grade: 'B' },
  { id: 3, firstName: 'Mark', lastName: 'Johnson', age: 17, grade: 'A' }
];

// a) Add a Student
function addStudent(student) {
  students.push(student);
}

function updateStudent(id, updatedInfo) {
  const student = students.find(s => s.id === id);
  if (student) {
    Object.assign(student, updatedInfo);
  }
}

// c) Delete a Student
function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
}

// d) List All Students
function listAllStudents() {
  console.log(students);
}

// e) Find Students by Grade
function findStudentsByGrade(grade) {
  return students.filter(s => s.grade === grade);
}

// f) Calculate Average Age
function calculateAverageAge() {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

// Example 
addStudent({ id: 4, firstName: 'Sarah', lastName: 'Lee', age: 20, grade: 'B' });
updateStudent(2, { age: 20 });
deleteStudent(1);
listAllStudents();
console.log(findStudentsByGrade('A'));
console.log('Average Age:', calculateAverageAge());


