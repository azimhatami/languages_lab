// challenge : 

// 1. calculate the average of marks.
// 2. calculate the average of passed students.
// 3. shift marks based +3 and recalculate the average.
// 4. shift marks based +3 and recalculate the average for passed.

const userMarks = [9, 10, 13, 18, 20, 15, 5, 4];

const marksAverage = userMarks.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue / array.length;
}, 0);

console.log(marksAverage.toFixed(2));

const marksPassedAverage = userMarks.filter(
  (mark) => mark >= 10).reduce(
    (
      accumulator, 
      currentValue, 
      index, 
      array
    ) => accumulator + currentValue / array.length, 0);

console.log(marksPassedAverage);

const marksShiftAverage = userMarks.map(
  (mark) => mark + 3).reduce(
    (
      accumulator, 
      currentValue, 
      index, array
    ) => accumulator + currentValue / array.length, 0);

console.log(marksShiftAverage.toFixed(2));

const marksShiftPassedAverage = userMarks
  .map((m) => m + 3)
  .filter((m) => m >= 10)
  .reduce((
    accumulator, 
    currentValue, 
    index, 
    array) => accumulator + currentValue / array.length, 0);

console.log(marksShiftPassedAverage.toFixed(2));
