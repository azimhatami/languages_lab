// if - else

// const paymentStatus = 'SUCCESS';
// const paymentStatus = 'PENDING';
const paymentStatus = 'REJECTED';

if (paymentStatus === 'SUCCESS') {
  console.log('This is verified payment');
} else if (paymentStatus === 'PENDING') { 
  console.log('This is pending payment');
} else {
  console.log('This is rejected payment');
}
