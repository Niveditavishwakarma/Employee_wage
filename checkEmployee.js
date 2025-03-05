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
let empDailyWageMap = new Map();
let empDailyHoursMap = new Map();

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

  empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
  empDailyHoursMap.set(totalWorkingDays, empHrs);
}

const totalWage = Array.from(empDailyWageMap.values()).reduce(
  (sum, wage) => sum + wage,
  0
);
const totalHours = Array.from(empDailyHoursMap.values()).reduce(
  (sum, hours) => sum + hours,
  0
);

console.log(
  `Emp Wage with Arrow:  Total hours: ${totalHours}  Total Wages: ${totalWage}`
);

let nonWorkingDays = [];
let partWorkingDays = [];
let fullWorkingDays = [];

empDailyHoursMap.forEach((hours, day) => {
  if (hours === FULL_TIME_HOURS) fullWorkingDays.push(day);
  else if (hours === PART_TIME_HOURS) partWorkingDays.push(day);
  else nonWorkingDays.push(day);
});

console.log("Full Working Days: " + fullWorkingDays.join(", "));
console.log("Part Working Days: " + partWorkingDays.join(", "));
console.log("Non Working Days: " + nonWorkingDays.join(", "));
