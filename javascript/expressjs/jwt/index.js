const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('privateKey.key');
const secret = '0e5f203f2029e8c956df0523f9ec188f';
const token = jwt.sign(
  {
    id: 'some_hash_id', 
    email: 'test@test.com'
  },
  privateKey,
  {
    expiresIn: 1000 * 60 * 60 * 24 * 30, // 20s, 3d, 1y
    // algorithm: 'HS512',
    algorithm: 'RS512',
  }
);

const token1 = jwt.sign(
  {
    id: 'some_hash_id', 
    email: 'test@test.com'
  },
  secret,
  {
    expiresIn: 1000 * 60 * 60 * 24 * 30, // 20s, 3d, 1y
    algorithm: 'HS512',
  }
);

console.log(token);
