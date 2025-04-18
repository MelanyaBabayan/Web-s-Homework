const employees = [
    { name: 'Melanya', salary: 4000 },
    { name: 'Gayane', salary: 5000 },
    { name: 'Mark', salary: 3000 },
    { name: 'Ashot', salary: 7000 }
];
  
function showHighEarners() {
    const averageSalary = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
    const highEarners = employees.filter(emp => emp.salary > averageSalary);
  
    const tbody = document.querySelector('#employeeTable tbody');
    tbody.innerHTML = ''; 
    highEarners.forEach(emp => {
        const row = `<tr><td>${emp.name}</td><td>${emp.salary}</td></tr>`;
        tbody.innerHTML += row;
});
}
  