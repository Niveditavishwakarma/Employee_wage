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
let empDailyWageArr = new Array();

while (
  totalEmpHrs < MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);

  if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) {
    empHrs = MAX_HRS_IN_MONTH - totalEmpHrs;
  }
  totalEmpHrs += empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
}

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
//Array helper function
//UC 7A - calc total wage using Array froEach traversal or reduce method

let totalWageForEach = 0;
function sum(dailyWage) {
  totalWageForEach += dailyWage;
}
empDailyWageArr.forEach(sum);

console.log(
  "UC7A - Total days: " +
    totalWorkingDays +
    "   " +
    "Total hrs: " +
    totalEmpHrs +
    "   " +
    "Emp total Wage: " +
    totalWageForEach
);

let totalWageReduce = 0;
totalWageReduce = empDailyWageArr.reduce(function (total, wage) {
  return total + wage;
}, 0);
console.log("UC7A - Emp Wage with reduce: " + totalWageReduce);

//UC 7B - Show the Day slong eith daily wage using array map helper function
let dayWithDailyWageArr = empDailyWageArr.map(function (wage, index) {
  return "Day " + (index + 1) + " => Wage: " + wage;
});
console.log("UC 7B - Daily Wages");
console.log("Daily Wages with Days:");
console.log(dayWithDailyWageArr);

//UC 7C - Show Dyas when full time wage of 160 were earned
function fulltimeWage(dailyWage) {
  return dailyWage.includes("160");
}
let fullDayWgeArr = dayWithDailyWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage filter when Fulltime wage earned");
console.log(fullDayWgeArr);

//UC 7D - Find the first occurence when Full Time wage was earned using find function
console.log(
  "UC 7D - First time Fulltime wage was earned on Day: " +
    dayWithDailyWageArr.find(fulltimeWage)
);

//UC 7E - Check if every element of Full time Wageis truely holding Full time wage
console.log(
  "UC 7E - Check all element have Full time wage: " +
    dayWithDailyWageArr.every(fulltimeWage)
);

//UC 7F - Check if there is any Part Time wage
function isAnyPartTimeWage(dailyWage) {
  return dailyWage.includes("80");
}
console.log(
  "UC 7F - Check if any Part timw wage: " +
    dayWithDailyWageArr.some(isAnyPartTimeWage)
);

//UC 7G - Find the number of days the employee worked
let numOfDaysWorked = empDailyWageArr.filter(function (wage) {
  return wage > 0;
}).length;

console.log("Number of days the employee worked: " + numOfDaysWorked);
