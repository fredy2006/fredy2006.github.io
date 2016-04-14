function changeClock(){
var msecString = '000';

if (msec == 0) {
          msec++;
        } else {
          msec++;
          if (msec == 1000) {
            msec = 0;
            sec++;
            if (sec == 60) {
              sec = 0;
              min++;
              if (min == 60) {
                min=0;
                hour++;
                if (hour == 24) {
                  hour = 0
                }
              }
            }
          }
}
if (msec<10) {
  msecString = '00' + msec;
} else {
  if (msec<100) {
    msecString = '0' + msec;
  } else {
    msecString = '' + msec;
  }
}

if (sec<10) {
  secString = '0' + sec;
} else {
  secString = '' + sec;
}

if (min<10) {
  minString = '0' + min;
} else {
  minString = '' + min;
}

if (hour < 10) {
  hourString = '0' + hour;
} else {
  hourString = '' + hour;
}

document.getElementById("myTimer").innerHTML = hourString+":"+minString+":"+secString+"."+msecString;
timerId=setTimeout(changeClock,1);
}

function clickStart(){
if (!madeStart) {
  madeStart = true;
  flagPause = true;
  startButton[0].innerHTML = 'Pause';
  changeClock();
} else {
  if (flagPause) {
    flagPause = false;
    startButton[0].innerHTML = 'Contin';
    clearTimeout(timerId);
  } else {
    flagPause = true;
    startButton[0].innerHTML = 'Pause';
    changeClock();
  }
}
}

function clickStop(){
  madeStart = false;
  flagPause = false;
  startButton[0].innerHTML = 'Start';
  clearTimeout(timerId);
  msec = 0;
  sec = 0;
  min = 0;
  hour = 0;
  document.getElementById("myTimer").innerHTML = '00:00:00.000';
  console.log('After stop msec=', msec);
  console.log('After stop sec=', sec);
  console.log('After stop min=', min);

}

var msec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var timerId = 0;
var flagPause = false;
var madeStart = false;

var startButton = document.querySelectorAll('a');
console.log(startButton[0]);
console.log(startButton[1]);

startButton[0].addEventListener('click',clickStart)
startButton[1].addEventListener('click',clickStop)
