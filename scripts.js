var seconds_input = document.getElementById("seconds");
var minutes_input = document.getElementById("minutes");
var hours_input = document.getElementById("hours");

var start_button = document.getElementById("start-btn");

var audio = new Audio("alarm.mp3");

let seconds = 0;
let minutes = 0;
let hours = 0;

let newSeconds = 0;
let newMinutes = 0;
let newHours = 0;

let counting = false;

document.getElementById("seconds").addEventListener("keyup", updateSeconds);
document.getElementById("minutes").addEventListener("keyup", updateMinutes);
document.getElementById("hours").addEventListener("keyup", updateHours);

function checkButtonAvailability() {
  if (seconds == 0 && minutes == 0 && hours == 0) {
    start_button.disabled = true;
  } else {
    start_button.disabled = false;
  }
}

function stop_alarm() {
  audio.pause();
  audio.currentTime = 0;
}

function play_alarm() {
  audio.play();
}

function updateSeconds() {
  newSeconds = Number(document.getElementById("seconds").value);

  if (newSeconds > 60) {
    seconds = 60;
    seconds_input.value = seconds;
  } else {
    seconds = newSeconds;
    seconds_input.value = seconds;
  }

  if (seconds > 9) {
    seconds_input.value = String(seconds);
  } else {
    seconds_input.value = "0" + String(seconds);
  }

  checkButtonAvailability();
}

function updateMinutes() {
  newMinutes = Number(document.getElementById("minutes").value);

  if (newMinutes > 60) {
    minutes = 60;
    minutes_input.value = minutes;
  } else {
    minutes = newMinutes;
    minutes_input.value = minutes;
  }

  if (minutes > 9) {
    minutes_input.value = String(minutes);
  } else {
    minutes_input.value = "0" + String(minutes);
  }

  checkButtonAvailability();
}

function updateHours() {
  newHours = Number(document.getElementById("hours").value);

  if (newHours > 24) {
    hours = 24;
    hours_input.value = hours;
  } else {
    hours = newHours;
    hours_input.value = hours;
  }

  if (hours > 9) {
    hours_input.value = String(hours);
  } else {
    hours_input.value = "0" + String(hours);
  }

  checkButtonAvailability();
}

function start() {
  seconds_input.disabled = true;
  minutes_input.disabled = true;
  hours_input.disabled = true;

  counting = true;

  count_time();
}

function stop() {
  seconds_input.disabled = false;
  minutes_input.disabled = false;
  hours_input.disabled = false;

  counting = false;

  stop_alarm();
  checkButtonAvailability();
}

function reset() {
  seconds_input.disabled = false;
  minutes_input.disabled = false;
  hours_input.disabled = false;

  seconds = 0;
  minutes = 0;
  hours = 0;

  seconds_input.value = "00";
  minutes_input.value = "00";
  hours_input.value = "00";

  counting = false;
  checkButtonAvailability();
}

function count_time() {
  if (counting == true) {
    if (seconds == 0) {
      if (minutes == 0) {
        if (hours != 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (hours == 0) {
          stop();
          play_alarm();
        }
      } else {
        minutes -= 1;
        seconds = 59;
      }
    } else {
      seconds -= 1;
    }

    display_time();
    setTimeout(count_time, 1000);
  }
}

function display_time() {
  if (seconds > 9) {
    seconds_input.value = String(seconds);
  } else {
    seconds_input.value = "0" + String(seconds);
  }

  if (minutes > 9) {
    minutes_input.value = String(minutes);
  } else {
    minutes_input.value = "0" + String(minutes);
  }

  if (hours > 9) {
    hours_input.value = String(hours);
  } else {
    hours_input.value = "0" + String(hours);
  }
}

checkButtonAvailability();
