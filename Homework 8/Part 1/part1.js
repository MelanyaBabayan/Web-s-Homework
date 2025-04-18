const employees = [
    { firstName: "Melanya", lastName: "Babayan", salary: 4000 },
    { firstName: "Gayane", lastName: "Hovhannisyan", salary: 5000 },
    { firstName: "Karen", lastName: "Petrosyan", salary: 3000 },
    { firstName: "Serob", lastName: "Bakunc", salary: 7000 },
];
  
// Ֆունկցիա, որը կցուցադրի աշխատակիցների տվյալները
function filterEmployees() {
    const output = document.getElementById("employeeOutput");
    const names = employees.map(emp => `${emp.firstName} ${emp.lastName}`).join(", ");
    output.value = names; // Գրում է Input-ում
}
  
