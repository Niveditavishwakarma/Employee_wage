class EmployeePayroll {
  constructor(id, name, salary, gender, startDate) {
    this.setId(id);
    this.setName(name);
    this.setSalary(salary);
    this.setGender(gender);
    this.setStartDate(startDate);
  }

  setId(id) {
    try {
      if (id <= 0 || isNaN(id)) {
        throw new Error(
          "❌ Invalid Employee ID! It must be a positive non-zero number."
        );
      }
      this.id = id;
    } catch (error) {
      console.error(error.message);
      this.id = "Invalid";
    }
  }

  setName(name) {
    try {
      const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
      if (!namePattern.test(name)) {
        throw new Error(
          "❌ Invalid Name! Must start with a capital letter and have at least 3 characters."
        );
      }
      this.name = name;
    } catch (error) {
      console.error(error.message);
      this.name = "Invalid";
    }
  }

  setSalary(salary) {
    try {
      if (salary <= 0 || isNaN(salary)) {
        throw new Error(
          "❌ Invalid Salary! It must be a positive non-zero number."
        );
      }
      this.salary = salary;
    } catch (error) {
      console.error(error.message);
      this.salary = "Invalid";
    }
  }

  setGender(gender) {
    try {
      const genderPattern = /^[MF]$/;
      if (!genderPattern.test(gender)) {
        throw new Error("❌ Invalid Gender! It must be 'M' or 'F'.");
      }
      this.gender = gender;
    } catch (error) {
      console.error(error.message);
      this.gender = "Invalid";
    }
  }

  setStartDate(startDate) {
    try {
      const date = new Date(startDate);
      const today = new Date();
      if (date > today || isNaN(date.getTime())) {
        throw new Error("❌ Invalid Start Date! It must not be a future date.");
      }
      this.startDate = date;
    } catch (error) {
      console.error(error.message);
      this.startDate = "Invalid";
    }
  }

  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Gender: ${
      this.gender
    }, Salary: $${this.salary}, Start Date: ${
      this.startDate instanceof Date
        ? this.startDate.toDateString()
        : this.startDate
    }`;
  }
}

const emp1 = new EmployeePayroll(101, "Alice", 5000, "F", "2023-01-15");
console.log("\n✅ Employee Created: " + emp1.getDetails());

const emp2 = new EmployeePayroll(-5, "bob", 7000, "Male", "2026-08-10");
console.log("\n❌ Employee with Invalid Data: " + emp2.getDetails());

const emp3 = new EmployeePayroll(103, "Al", -6000, "X", "2021-05-25");
console.log("\n❌ Employee with Multiple Invalid Fields: " + emp3.getDetails());
