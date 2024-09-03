const alarmRingtone = () => {
  let ringtone = new Audio("horizon.mp3");
  ringtone.play();
};

const alarm = (hours, minutes, seconds) => {
  const intervalValue = setInterval(() => {
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

      clearInterval(intervalValue);
    }
  }, 1000);

};

