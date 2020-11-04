//Defining a list variable containing the student objects
let students = [
  {
    id: 1,
    name: "Faizan Mustafa",
    rollNo: "ag-1",
    age: 24,
    class: 15
  },
  {
    id: 2,
    name: "Sohaib Majeed",
    rollNo: "ag-2",
    age: 23,
    class: 15
  },
  {
    id: 3,
    name: "Abu Bakkar",
    rollNo: "ag-3",
    age: 24,
    class: 15
  },
  {
    id: 4,
    name: "Turanam Shehzad",
    rollNo: "ag-4",
    age: 25,
    class: 15
  },
  {
    id: 5,
    name: "Muhammad Ahmad",
    rollNo: "ag-5",
    age: 23,
    class: 15
  },
  {
    id: 6,
    name: "Sajawal Nadeem",
    rollNo: "ag-6",
    age: 22,
    class: 15
  },
  {
    id: 7,
    name: "Hamza Khursheed",
    rollNo: "ag-7",
    age: 23,
    class: 15
  },
  {
    id: 8,
    name: "Muhammad Sufyan",
    rollNo: "ag-8",
    age: 24,
    class: 15
  },
  {
    id: 9,
    name: "Muhammad Ahsan",
    rollNo: "ag-9",
    age: 22,
    class: 15
  }
];
//Printing students list to browser's console
console.log(students);



//Simple function
function sayHelloToWorldOldWay() {
  console.log("Hello world... old way")
}
sayHelloToWorldOldWay();



//ES6 function
const sayHelloToWorldES6Way = () => {
  console.log("Hello world... ES6 way")
}
sayHelloToWorldES6Way();



//ES6 functions the radical way
(() => {
  console.log("Hello world... ES6 with radical way")
})();



//Use of map function to get the list of names of students
//(1st way)
const studentNames = students.map((student)=>(student.name));
console.log(studentNames);



//Use of map function to get the list of names of students
//(2nd way)
const extractStudentsRollNumbers = (student) => {
  return student.rollNo;
}
const studentRollNumbers = students.map(extractStudentsRollNumbers);
console.log(studentRollNumbers);



//Use of filter function to extract the students under the age of 24
const studentsUnderTheAgeOf24 = students.filter((student)=>student.age<24);
console.log(studentsUnderTheAgeOf24);



//Use of filter and map function to extract the student roll numbers that are under the age of 24
const studentRollsUnderTheAgeOf24 = students.filter((student)=>student.age<24).map((student)=>(student.rollNo));
console.log(studentRollsUnderTheAgeOf24);



//Sort the students array in ascending order of their names
const ascendingSortByName = (student1, student2) => {
  let student1Name = student1.name.toLowerCase();
  let student2Name = student2.name.toLowerCase();
  if (student1Name < student2Name) {
    return -1;
  }
  if (student1Name > student2Name) {
    return 1;
  }
  return 0;
}
students.sort(ascendingSortByName);
console.log(students);



//Calculate the sum of ages of all the students
let result = students.reduce((student1, student2)=>({age: student1.age+student2.age}));
console.log("Sum of Ages: ", result.age);



//Updating some specific(student who's roll number is 'ag-6') student's information(age and class)
//(1st way i.e Out-of-place update)
let updatedStudentsInfo = [];
students.forEach((student) => {
  if(student.rollNo === "ag-6") {
    student.age = 23;
    student.class += 1;
  }
  updatedStudentsInfo.push(student)
});
console.log(updatedStudentsInfo);



//Updating some specific(student who's roll number is 'ag-6') student's information(age and class)
//(2nd way i.e In-place update)
students.forEach((student) => {
  if(student.rollNo === "ag-6") {
    student.age = 23;
    student.class += 1;
  }
});
console.log(students);