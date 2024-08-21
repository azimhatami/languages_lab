// Challenge : capitilize first letter


let userName = 'aZIM';
let text = 'my name is azim hatami!';

function capFirstLetter (str) {
  return str.toLowerCase().replace(str[0], str[0].toUpperCase());
}

// console.log(capFirstLetter(userName)); // 'Azim'


function capStatement (text, callback) {
  const txt = text.split(' ');
  const newtxt = []
  for (const item of txt) {
    newtxt.push(callback(item));
  }
  return newtxt.join(' ');
}

console.log(capStatement(text, capFirstLetter));
