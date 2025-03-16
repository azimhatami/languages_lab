const jwt = require('jsonwebtoken');

const secret = '0e5f203f2029e8c956df0523f9ec188f';
const token = jwt.sign(
  {
    id: 'some_hash_id', 
    email: 'test@test.com'
  },
  secret,
  {
    expiresIn: '2s'
  }
);

//setTimeout(() => {
//  try {
//    const verifiedData = jwt.verify(token, secret);
//    console.log(verifiedData);
//  } catch (error) {
//    console.log(error.message);
//  }
//}, 1500)

setTimeout(() => {
  try {
    const decodedData = jwt.decode(token);
    console.log(decodedData);
  } catch (error) {
    console.log(error.message);
  }
}, 3500)
