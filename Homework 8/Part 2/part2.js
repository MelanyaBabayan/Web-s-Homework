const students = [
    { name: "Melnya", grade: 92 },
    { name: "Ashot", grade: 55 },
    { name: "Karen", grade: 73 },
    { name: "Diana", grade: 87 },
];
  
// Ֆունկցիա՝ գերազանցիկների ցուցադրման համար
function showTopStudents() {
    const topStudents = students.filter(student => student.grade >= 85);
    const tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = ""; // Մաքրում է նախորդ արդյունքները
  
    topStudents.forEach(student => {
      const row = `<tr><td>${student.name}</td><td>${student.grade}</td></tr>`;
      tbody.innerHTML += row;
    });
}
  