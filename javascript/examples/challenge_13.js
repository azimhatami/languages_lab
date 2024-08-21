// Count Down Timer

// 120 secend => 0 secend : 02:00, 01:40 -> 00:00

function countDown(time) {
  const intervalId = setInterval(() => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    console.log(`${min}:${sec}`);

    if (time === 0) {
      clearInterval(intervalId);
      console.log('Click to re-send otp');
    }

    time--;
  }, 1000);
}


countDown(120);
