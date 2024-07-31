var seconds_input = document.getElementById("seconds");
var minutes_input = document.getElementById("minutes");
var hours_input = document.getElementById("hours");

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
}

function updateHours() {
  newHours = Number(document.getElementById("hours").value);

  if (newHours > 99) {
    hours = 99;
    hours_input.value = hours;
  } else {
    hours = newHours;
    hours_input.value = hours;
  }
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
}

function reset() {
  seconds_input.disabled = false;
  minutes_input.disabled = false;
  hours_input.disabled = false;

  seconds = 0;
  minutes = 0;
  hours = 0;

  seconds_input.value = 0;
  minutes_input.value = 0;
  hours_input.value = 0;

  counting = false;
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
  seconds_input.value = seconds;
  minutes_input.value = minutes;
  hours_input.value = hours;
}
