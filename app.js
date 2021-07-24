const clock = document.querySelector(".clock");

const tick = function () {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const displayClock = `
  <h1>Digital Clock</h1>
  <span>${hours}</span> :
  <span>${minutes}</span> :
  <span>${seconds}</span>
  `;

  clock.innerHTML = displayClock;
};

setInterval(tick, 1000);
