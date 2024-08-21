// Swithc Case statement

// const role = 'ADMIN'; // ADMIN | MERCHANT | TEACHER
// const role = 'MERCHANT'; // ADMIN | MERCHANT | TEACHER
// const role = 'TEACHER'; // ADMIN | MERCHANT | TEACHER
const role = 'Azim'; // ADMIN | MERCHANT | TEACHER

switch (role) {
  case 'ADMIN':
    console.log('The user role is admin');
    break;
  case 'MERCHANT':
    console.log('The user role is merchant');
    break;
  case 'TEACHER':
    console.log('The user role is teacher');
    break;
  default:
    console.log('Unknown user role');
    break;
};
