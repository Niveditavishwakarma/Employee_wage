class EmployeePayroll {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  getDetails = () =>
    `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;

  updateSalary = (newSalary) => {
    this.salary = newSalary;
    return `Salary updated for ${this.name} to $${this.salary}`;
  };
}

const employees = [
  new EmployeePayroll(101, "Alice", 5000),
  new EmployeePayroll(102, "Bob", 7000),
  new EmployeePayroll(103, "Charlie", 6000),
];

console.log("\n🔹 Employee Payroll Data:");
employees.forEach((emp) => console.log(emp.getDetails()));

console.log("\n🔹 Updating Salary:");
console.log(employees[1].updateSalary(7500));

console.log("\n🔹 Updated Employee Payroll Data:");
employees.forEach((emp) => console.log(emp.getDetails()));
