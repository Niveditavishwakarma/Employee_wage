class EmployeePayroll {
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = new Date(startDate);
  }

  getDetails = () =>
    `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${
      this.salary
    }, Start Date: ${this.startDate.toDateString()}`;

  updateSalary = (newSalary) => {
    this.salary = newSalary;
    return `Salary updated for ${this.name} to $${this.salary}`;
  };
}

const employees = [
  new EmployeePayroll(101, "Alice", 5000, "Female", "2023-01-15"),
  new EmployeePayroll(102, "Bob", 7000, "Male", "2022-08-10"),
  new EmployeePayroll(103, "Charlie", 6000, "Male", "2021-05-25"),
];

console.log("\n🔹 Employee Payroll Data:");
employees.forEach((emp) => console.log(emp.getDetails()));

console.log("\n🔹 Updating Salary:");
console.log(employees[1].updateSalary(7500));

console.log("\n🔹 Updated Employee Payroll Data:");
employees.forEach((emp) => console.log(emp.getDetails()));
