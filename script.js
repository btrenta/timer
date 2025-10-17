function getMinutes() {
  const path = window.location.pathname.replace('/', '');
  const mins = parseInt(path, 10);
  return isNaN(mins) ? 25 : mins; // default 25 min
}

let total = getMinutes() * 60;
const el = document.getElementById('timer');

function tick() {
  const m = Math.floor(total / 60).toString().padStart(2,'0');
  const s = (total % 60).toString().padStart(2,'0');
  el.textContent = `${m}:${s}`;
  if (total > 0) total--;
  else new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg').play();
}

tick();
setInterval(tick, 1000);
