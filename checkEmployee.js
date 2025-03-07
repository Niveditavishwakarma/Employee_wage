const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalWorkingDays = 0;
let totalEmpHrs = 0;
let empDailyHrsAndWageArr = new Array();

function calcDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}

while (
  totalEmpHrs < MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  totalEmpHrs += empHrs;

  empDailyHrsAndWageArr.push({
    dayNum: totalWorkingDays,
    dailyHours: empHrs,
    dailyWage: calcDailyWage(empHrs),
    toString() {
      return (
        "\nDay" +
        this.dayNum +
        " => Working Hours is " +
        this.dailyHours +
        " And Wage Earned = " +
        this.dailyWage
      );
    },
  });
}

console.log(
  "UC10 Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr
);

// uc11 a) Calculate total wage and total hours worked using reduce
const total = empDailyHrsAndWageArr.reduce(
  (acc, emp) => {
    acc.totalHours += emp.dailyHours;
    acc.totalWage += emp.dailyWage;
    return acc;
  },
  { totalHours: 0, totalWage: 0 }
);
console.log(`\nTotal Hours Worked: ${total.totalHours}`);
console.log(`Total Wage Earned: ${total.totalWage}`);

// uc11 b) Show full working days using forEach
console.log("\nFull Working Days:");
empDailyHrsAndWageArr.forEach((emp) => {
  if (emp.dailyHours === FULL_TIME_HOURS) console.log(`Day ${emp.dayNum}`);
});

// uc11 c) Show part working days using map by reducing to a string array
const partWorkingDays = empDailyHrsAndWageArr
  .filter((emp) => emp.dailyHours === PART_TIME_HOURS)
  .map((emp) => `Day ${emp.dayNum}`);

console.log("\nPart Working Days:", partWorkingDays.join(", "));

// uc11 d) Show no working days using only map function
const noWorkingDays = empDailyHrsAndWageArr
  .map((emp) => (emp.dailyHours === 0 ? `Day ${emp.dayNum}` : null))
  .filter((day) => day !== null);

console.log("\nNo Working Days:", noWorkingDays.join(", "));
