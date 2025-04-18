const students = [
    { name: 'Melanya', absences: 0 },
    { name: 'Karen', absences: 5 },
    { name: 'Sos', absences: 2 },
    { name: 'Diana', absences: 5 }
  ];
  
function showMostAbsentStudents() {
    const maxAbsences = Math.max(...students.map(student => student.absences));
    const mostAbsentStudents = students.filter(student => student.absences === maxAbsences);
  
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = ''; 
    mostAbsentStudents.forEach(student => {
      const row = `<tr><td>${student.name}</td><td>${student.absences}</td></tr>`;
      tbody.innerHTML += row;
    });
}
  