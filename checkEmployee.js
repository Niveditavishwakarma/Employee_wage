const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

const Num_OF_WORKING_DAYS = 2;

let empHrs = 0;
for (let days = 0; days < Num_OF_WORKING_DAYS; days++) {
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs += getWorkingHours(empCheck);
}

function getWorkingHours(empCheck) {
  if (empCheck === IS_ABSENT) {
    console.log("Employee is absent");
  } else {
    console.log("Employee is present");
  }
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;

    case IS_FULL_TIME:
      return FULL_TIME_HOURS;

    default:
      return 0;
  }
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total hrs: " + empHrs + " " + "Emp total Wage: " + empWage);
