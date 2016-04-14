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

document.getElementById("myTimer").innerHTML = makeString(hour, min, sec, msec);

timerId=setTimeout(changeClock,1);
}

function clickStart(){
if (!madeStart) {
  madeStart = true;
  flagPause = true;
  startButton[0].innerHTML = 'Stop';
  changeClock();
} else {
  if (flagPause) {
    flagPause = false;
    startButton[0].innerHTML = 'Start';
    clearTimeout(timerId);
    var element=document.createElement('p');
    element.classList.add('values');
    element.innerHTML='Stop ' + makeString(hour, min, sec, msec);
    dataBox.appendChild(element);
  } else {
    flagPause = true;
    startButton[0].innerHTML = 'Stop';
    changeClock();
  }
}
}


function clickStop(){
  if (madeStart) {
    var element = dataBox.querySelectorAll('p');
    for (var i = 0; i < element.length; i++) {
      dataBox.removeChild(element[i]);
    }
  }
  madeStart = false;
  flagPause = false;
  startButton[0].innerHTML = 'Start';
  clearTimeout(timerId);
  msec = 0;
  sec = 0;
  min = 0;
  hour = 0;
  document.getElementById("myTimer").innerHTML = '00:00:00.000';
  }

function clickSplit(){
  if (flagPause) {
    clearTimeout(timerId);
    var element=document.createElement('p');
    element.classList.add('values');
    element.innerHTML='Split '+makeString(hour, min, sec, msec);
    dataBox.appendChild(element);
    changeClock();
  }
}
function makeString(varHour, varMin, varSec, varMsec) {
  if (varMsec<10) {
    msecString = '00' + varMsec;
  } else {
    if (varMsec<100) {
      msecString = '0' + varMsec;
    } else {
      msecString = '' + varMsec;
    }
  }

  if (varSec<10) {
    secString = '0' + varSec;
  } else {
    secString = '' + varSec;
  }

  if (varMin<10) {
    minString = '0' + varMin;
  } else {
    minString = '' + varMin;
  }

  if (varHour < 10) {
    hourString = '0' + varHour;
  } else {
    hourString = '' + varHour;
  }
  return hourString+":"+minString+":"+secString+"."+msecString;
}

var msec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var hourString = '00';
var minString = '00';
var secString = '00';
var msecString = '000';
var timerId = 0;
var flagPause = false;
var madeStart = false;
var dataBox = document.querySelector('.dataBox');
var startButton = document.querySelectorAll('a');

startButton[0].addEventListener('click',clickStart)
startButton[1].addEventListener('click',clickSplit)
startButton[2].addEventListener('click',clickStop)
