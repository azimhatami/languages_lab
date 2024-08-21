// Challenge: 2
// weeks : 7 days
// birthYear = 1995

const birthYear = 1995;
const nowYear = 2023;

const days = 365; // Each year is 365 days.
const week = 7; // Each week is 7 days.


let resultYear = nowYear - birthYear; // Person Age.
let allDays = resultYear * days; 
let resultWeek = allDays / week;

console.log(`Of ${birthYear} to ${nowYear}, ${allDays} is days, ${resultWeek} is weeks.`);
