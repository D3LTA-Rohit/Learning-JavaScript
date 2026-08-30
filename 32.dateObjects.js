/*
    Date objects - Objects that contain values that represent dates and times.

    These date objects can be change and formatted.
*/

const date1 = new Date();
console.log(date1);

//Date(year, month(0 = JAN / 11 = DEC), day, hour, minute, second, ms)

const date2 = new Date(2026, 11, 6, 11, 30, 44, 5);
console.log(date2);

const date3 = new Date("2026-12-06T11:30:44");
console.log(date3);

const date4 = new Date(17000000000);
console.log(date4);

//------------------Using Getters-------------------------

const year = date2.getFullYear();
const month = date2.getMonth();
const dayOfTheWeek = date2.getDay(); //0 = SUN / 6 = SAT
const date = date2.getDate();
const hour = date2.getHours();
const minutes = date2.getMinutes();

console.log(year);
console.log(month);
console.log(dayOfTheWeek);
console.log(date);
console.log(hour);
console.log(minutes);

//------------------Using Setters-------------------------

const date5 = new Date();

date5.setFullYear(2025);
date5.setHours(12);

console.log(date5);

//------------------Comparing Dates-----------------------

if (date1 > date2) {
    console.log(true);
} else {
    console.log(false);
}