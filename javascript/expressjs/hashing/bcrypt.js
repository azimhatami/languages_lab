const bcrypt = require('bcrypt');

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function verifyPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

const hash = hashPassword('12345');
console.log(verifyPassword('123a45', hash));
