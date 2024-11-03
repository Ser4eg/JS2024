/*
Задача 7.
Дано масив студентів (ПІБ, курс, факультет). Підрахувати кількість різних факультетів та кількість студентів кожного курсу.
*/

let students = [
  { name: "Учень1", course: 1, faculty: "Економіки" },
  { name: "Учень2", course: 2, faculty: "Науковий" },
  { name: "Учень3", course: 1, faculty: "Економіки" },
  { name: "Учень4", course: 3, faculty: "Право" },
  { name: "Учень5", course: 2, faculty: "Науковий" },
];

// Підрахунок кількості факультетів
let faculties = new Set(students.map((student) => student.faculty));
let uniqueFacultiesCount = faculties.size;

// Підрахунок кількості студентів на кожному курсі
let courseCounts = new Map();

for (let student of students) {
  courseCounts.set(student.course, (courseCounts.get(student.course) || 0) + 1);
}

console.log("Кількість різних факультетів:", uniqueFacultiesCount);
console.log("Кількість студентів для кожного курсу:", courseCounts);
