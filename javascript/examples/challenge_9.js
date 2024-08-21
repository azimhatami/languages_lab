// usage padding string


function timer1 (hour, minute, second) {
  return `${hour.padStart(2, 0)}:${minute.padStart(2, 0)}:${second.padStart(2, 0)}`;
}


function timer2 (time) {
  let [h, m, s] = time.split(':');
  h = h.padStart(2,0);
  m = m.padStart(2, 0);
  s = s.padStart(2, 0);

  const newTime = [h, m, s].join(':');
  return newTime;


}

// console.log(timer('3', '43', '11'));
const [] = 'azim';

console.log(timer2('2:43:44'))
console.log(timer1('3', '4', '11'));
