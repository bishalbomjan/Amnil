const students = [
  { name: "Ram Parsad", class: 9, roll: 6, age: 15 },
  { name: "Hari Parsad", class: 5, roll: 43, age: 16 },
  { name: "Sita Parsad", class: 8, roll: 34, age: 1 },
  { name: "Gita Parsad", class: 10, roll: 6, age: 15 },
];
// q1) age less than 10
const age10 = students.filter((student) => student.age < 10);
console.log(age10);
// q2) averageAge
const averageAge =
  students.reduce((acc, item) => {
    return acc + item.age;
  }, 0) / students.length;
console.log(averageAge);
// q3) Every child is gen-z or not
function checkGenZ(students) {
  return students.every((student) => student.age < 28 && student.age > 13)
    ? "Gen-z"
    : "No";
}
console.log(checkGenZ(students));

// Q4) List only GenZ student
function GenZOnly(students) {
  return students.filter((student) => student.age < 28 && student.age > 13);
}
console.log(GenZOnly(students));

// using birth of date
let students1 = [
  { name: "Ram Parsad", class: 9, roll: 6, birth_date: new Date("2008-4-15") },
  {
    name: "Hari Parsad",
    class: 5,
    roll: 43,
    birth_date: new Date("1987-2-16"),
  },
  {
    name: "Sita Parsad",
    class: 8,
    roll: 34,
    birth_date: new Date("2010-3-1"),
  },
  {
    name: "Gita Parsad",
    class: 10,
    roll: 6,
    birth_date: new Date("2008-6-15"),
  },
];
const d = Date.now();
console.log(d); // d is in millisecond
const newmap = students1.map((student) => {
  //getTime return time in millisecond
  const age = Math.floor(
    (d - student.birth_date.getTime()) / (1000 * 60 * 60 * 24 * 365) // to millisecond in year
  );
  console.log(age);
  return { ...student, age }; //adding age property
});
console.log(newmap);
console.log(newmap.filter((student) => student.age < 28 && student.age > 13));
