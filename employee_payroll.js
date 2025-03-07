class EmployeePayroll {
  constructor(id, name, salary, gender, startDate) {
    this.id = id;
    this.setName(name);
    this.salary = salary;
    this.gender = gender;
    this.startDate = new Date(startDate);
  }

  setName(name) {
    try {
      const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
      if (!namePattern.test(name)) {
        throw new Error(
          "❌ Invalid Name! Name must start with a capital letter and have at least 3 characters."
        );
      }
      this.name = name;
    } catch (error) {
      console.error(error.message);
      this.name = "Invalid";
    }
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Gender: ${
      this.gender
    }, Salary: $${this.salary}, Start Date: ${this.startDate.toDateString()}`;
  }
}

const emp1 = new EmployeePayroll(101, "Alice", 5000, "Female", "2023-01-15");
console.log("\n✅ Employee Created: " + emp1.getDetails());

const emp2 = new EmployeePayroll(102, "bob", 7000, "Male", "2022-08-10");
console.log("\n❌ Employee with Invalid Name: " + emp2.getDetails());

const emp3 = new EmployeePayroll(103, "Al", 6000, "Male", "2021-05-25");
console.log("\n❌ Employee with Short Name: " + emp3.getDetails());
