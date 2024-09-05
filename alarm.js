document.getElementById('alarmForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const hours = parseInt(document.getElementById('hours').value, 10);
  const minutes = parseInt(document.getElementById('minutes').value, 10);
  const seconds = parseInt(document.getElementById('seconds').value, 10);

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      document.getElementById('message').textContent = "Please enter valid numbers.";
      return;
  }

  // Validate the time input
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
      document.getElementById('message').textContent = "Please enter valid time values.";
      return;
  }

  // Call the alarm function with the provided time
  alarm(hours, minutes, seconds);
  document.getElementById('message').textContent = `Alarm set for ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
});

const formatTime = (timeUnit) => {
  return timeUnit.toString().padStart(2, '0');
};

const alarmRingtone = () => {
  let ringtone = new Audio("horizon.mp3");
  ringtone.play();
};

const alarm = (hours, minutes, seconds) => {
  // Clear any previously set interval (in case the user sets a new alarm)
  if (window.alarmInterval) {
      clearInterval(window.alarmInterval);
  }

  window.alarmInterval = setInterval(() => {
      let myDate = new Date();
      let presenthours = myDate.getHours();
      let presentminutes = myDate.getMinutes();
      let presentseconds = myDate.getSeconds();

      if (
          hours === presenthours &&
          minutes === presentminutes &&
          seconds === presentseconds
      ) {
          alarmRingtone();
          clearInterval(window.alarmInterval);
          document.getElementById('message').textContent = "Alarm ringing!";
      }
  }, 1000);
};
