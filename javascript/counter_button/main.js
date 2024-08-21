// const incrementBtn = document.querySelector('.increment');
// const decrementBtn = document.querySelector('.decrement');
// const resetBtn = document.querySelector('.reset');

// const counterValue = document.querySelector('.counter_value');

// let count = Number(counterValue.textContent); 

// function increment () {
//     count++;
//     counterValue.textContent = count;
// }

// function decrement () {
//     count--;
//     counterValue.textContent = count;
// }

// function reset () {
//     count = 0;
//     counterValue.textContent = count;
// }

// function counter (event) {
//     console.log(event)
//     const classList = event.target.classList;
// 
//     if (classList.contains('increment')) count++;
//     else if (classList.contains('decrement')) count--;
//     else count = 0;
// 
//     counterValue.textContent = count
// }
// 
// incrementBtn.addEventListener('click', counter);
// decrementBtn.addEventListener('click', counter);
// resetBtn.addEventListener('click', counter);

//* 2nd approach:

const counterValue = document.querySelector('.counter_value');
let count = Number(counterValue.textContent); 

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  btn.addEventListener('click',() => {
    const classList = btn.classList;

    if (classList.contains('increment')) count++;
    else if (classList.contains('decrement')) count--;
    else count = 0;

//     if (count > 0) counterValue.style.color = 'green';
//     else counterValue.style.color = 'red';

    if (count > 0) {
      counterValue.classList.add('green');
      counterValue.classList.remove('red');
    } else {
      counterValue.classList.add('red');
      counterValue.classList.remove('green');
    }

    counterValue.textContent = count;
  });
});


