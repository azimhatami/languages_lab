// Credit Card

function maskCreditCard (cardNumber) {
  // 1234567890456789
  // 1234-5678-9045-6789
  // 1234 5678 9045 6789
  const str = String(cardNumber).replaceAll(' ', '').replaceAll('-','');
  const last = str.slice(-4);

  return last.padStart(16, '*');
}

console.log(maskCreditCard(1234567890456789));
