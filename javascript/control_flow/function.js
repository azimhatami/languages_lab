// function

function sayHello(name) {
  console.log(`Welcome ${name}`);
}

// sayHello('azim')

function getUserRole(role) {
  if (role === 'ADMIN') return 'The user role is ADMIN';
  if (role === 'MERCHANT') return 'The user role is MERCHANT';
  if (role === 'TEACHER') return 'The user role is TEACHER';

  return 'Unknown user role';
}

// console.log(getUserRole('Azim'))


function userRole(role) {
  switch (role) {
    case 'ADMIN':
      return 'The user role is ADMIN';
    case 'MERCHANT':
      return 'The user role is MERCHANT';
    case 'TEACHER':
      return 'The user role is MERCHANT';
    default:
      return 'Unknown user role';
  }
}

console.log(userRole('ADMIN'))
