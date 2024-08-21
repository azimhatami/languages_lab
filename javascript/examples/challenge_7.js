// Challenge : check if user email exist:

const registerEmail = 'user.test@gmail.com';

function checkEmailExist (email) {
  if (email.toLowerCase().trim() === registerEmail) {
    return 'Email already exists !';
  }

  return 'Please try again !!!';
}

console.log(checkEmailExist('azim.test@gmail.com'));
console.log(checkEmailExist('USer.test@gmail.com   '));
