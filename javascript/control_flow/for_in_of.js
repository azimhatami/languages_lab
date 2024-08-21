// for - in: object
// for - of: array

const user = {
  name: 'Azim',
  email: 'user@test.com',
  phonNumber: '09150000000',
}

for (const key in user) {
  console.log(key);
//  console.log(user[key]);
};

const roles = ['ADMIN', 'TEACHER', 'MERCHANT'];

for (const _ of roles) {
  console.log(_);
}
