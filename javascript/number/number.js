// number: 
// console.log(Number('34')); // type of number
// console.log(+'34');  // type of number

// console.log(Number.parseInt('34.5rem'));
// console.log(Number.parseFloat('34.5rem'));


// Rounding int:

// console.log(Math.floor(23.2));
// console.log(Math.floor(23.9));
// console.log(Math.floor(-23.9));

// console.log(Math.ceil(23.2));
// console.log(Math.ceil(23.9));

// console.log(Math.round(23.2));
// console.log(Math.round(23.9));

// console.log(Math.trunc(23.2));
// console.log(Math.trunc(23.9));

// console.log(Math.floor(Math.random() * 100));

const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(generateRandom(2, 5));

// Rounding decimal: 
// console.log(+(23).toFixed(2))
// console.log((23.678).toFixed(2))
// console.log((23.453).toFixed(2))



//* Date


// const now = new Date();
// console.log(now);

// const yr = now.getFullYear(); // year
// const month = now.getMonth(); // month 0 - 11
// const date = now.getDate();  // Date (of month) 1 - 31
// const day = now.getDay();  // Day (of week) sunday - Saturday : 0 - 6
// console.log(yr, month, date, day);
// console.log(date, day);
// console.log(now.toString());
// console.log(now.toDateString());
// console.log(now.toISOString()); // 2024-08-05T06:33:59.199Z
// console.log(now.toLocaleDateString('fa')); // ۱۴۰۳/۵/۱۵
// console.log(now.toLocaleString('fa')); // ۱۴۰۳/۵/۱۵, ۱۰:۰۷:۴۲
// console.log(now.toLocaleTimeString('fa')); // ۱۰:۱۰:۱۴
// console.log(now.getTime()); // 1 Jun 1970 -> timestamp
// console.log(Date.now());

// console.log(Number(now));
// console.log(+now);


// Challenge : end - start -> days

const daysDiff = (start, end) => {
  const milliSecs = new Date(end) - new Date(start);
  const days = Math.floor(milliSecs / (24 * 60 * 60 * 1000));

  return days
}

// What's data-fns ?
// console.log(daysDiff('7/1/2024', '8/5/2024')); // days


//* toLocaleDateString()

const now = new Date();

const options = {
  // year: '2-digit',
  year: 'numeric',
  // month: 'long',
  month: 'numeric',
  day: 'numeric',
  // weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

console.log(now.toLocaleDateString('en-CA'));
console.log(now.toLocaleDateString('en-US'));
console.log(now.toLocaleDateString('en-UK'));
// console.log(now.toLocaleDateString('fa-IR', options));
console.log(Intl.DateTimeFormat('fa-IR', options).format(now));


//* setTimeout() VS setInterval()

// function sayHi(name) {
//   console.log(`Say Hi ${name}`);
// }
// 
// const timerId = setTimeout(sayHi, 3000, 'Azim');
// 
// setTimeout(() => {
//   clearTimeout(timerId);
//   console.log('Clear timerId');
// }, 2000);


// setInterval(sayHi, 2000, 'Ali');

let count = 1;
const intervalId = setInterval(() => {
  console.log(count);
  count++;

  if (count === 4) {
    clearInterval(intervalId)
    console.log('Clear counter');
  }
}, 2000);












