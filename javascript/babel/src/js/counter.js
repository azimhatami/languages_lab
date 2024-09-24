export const incBtn = document.querySelector('.inc');
export const decBtn = document.querySelector('.dec');
export const resetBtn = document.querySelector('.reset');
const number = document.querySelector('.number');

let count = 0;

export const inc = (event) => {
  const btnValue = event.target.classList.value;
  if (btnValue == 'inc') {
    count++;
    number.innerHTML = count;
  }
};

export const dec = (event) => {
  const btnValue = event.target.classList.value;
  if (btnValue == 'dec') {
    count--;
    number.innerHTML = count;
  }
};

export const reset = () => {
  const btnValue = event.target.classList.value;
  if (btnValue == 'reset') {
    count = 0
    number.innerHTML = count;
  }
};

