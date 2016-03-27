function pow(argument, degree) {
var beginArgument=argument;
argument=+argument
degree=+degree
  if (degree == 0) {
    return 1;
  }
  if (degree == 1) {
    return argument;
  }
  if (degree == -1) {
    argument=1/argument;
    return argument;
  }

  if (degree < -1) {
    for (var i = -2; i > degree-1; i--) {
      argument=argument*beginArgument;
    }
    return (1/argument)
  }
   if (degree > 1) {
    for (var i = 2; i < degree+1; i++) {
      argument=argument*beginArgument;
    }
    return (argument)
  }
}
function makeDegree() {
var lineLatinSymbol='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lineCyrilicSymbol='абвгдеёжзийклмнопрстуфхцчшщьъэюяАБВГДЕЁЖЗИЙКДМНОПРСТУФЦЧШЩЬЪЭЮЯ';
var lineBadSymbol='~!@#$%^&*()_+/*-+[]';
var enterArgument = prompt('Введите аргумент:');
if (typeof(enterArgument) !== 'object') {
  enterArgument=enterArgument.replace(' ','');
var flagTrueArgument = true;
for (var i = 0; i < (enterArgument.length); i++){
  if (lineLatinSymbol.indexOf(enterArgument[i]) >-1 ) {
    flagTrueArgument=false;
  }
  if (lineCyrilicSymbol.indexOf(enterArgument[i]) >-1 ) {
    flagTrueArgument=false;
  }
  if (lineBadSymbol.indexOf(enterArgument[i]) >- 1) {
    flagTrueArgument=false;
  }
  if (enterArgument.indexOf('-') == 0) {
    flagTrueArgument=true;
  }
}
} else {
  flagTrueArgument=false;
}

var enterDegree=prompt('Введите степень:');
if (typeof(enterDegree) !== 'object') {
  enterDegree=enterDegree.replace(' ','');
var flagTrueDegree = true;
for (var i = 0; i < (enterDegree.length); i++){
  if (lineLatinSymbol.indexOf(enterDegree[i]) >-1 ) {
    flagTrueDegree = false;
  }
  if (lineCyrilicSymbol.indexOf(enterDegree[i]) >-1 ) {
    flagTrueDegree = false;
  }
  if (lineBadSymbol.indexOf(enterDegree[i]) >-1 ) {
    flagTrueDegree = false;
  }
  if (enterDegree.indexOf('-') == 0) {
    flagTrueDegree=true;
  }
}
} else {
  flagTrueDegree = false;
}

console.log('Аргумент',enterArgument);
console.log('Степень',enterDegree);
if (flagTrueArgument) {
  if (flagTrueDegree) {
    if (isNaN(pow(enterArgument,enterDegree))) {
      console.log('заданные аргументы являются некорректными');
    } else {
      console.log('Результат',pow(enterArgument,enterDegree));
    }
  } else {
    console.log('заданные аргументы являются некорректными');
  }
} else {
  console.log('заданные аргументы являются некорректными');
}
}

function checkUser () {
var arrName=['','','','',''];
// var tmpName;
  for (var i = 0; i < 5; i++) {
    tmpName='';
    tmpName=prompt('Enter Any User Name '+(i+1));
    // console.log(i, tmpName);
    // console.log('type of tmpName', typeof(tmpName));
    if (typeof(tmpName)=='object') {
      i=i-1;
    } else {
      if (tmpName.length>0) {
        arrName[i]=tmpName;
      } else {
        i=i-1;
      }
    }
    // array[i]
  }
  tmpName='';
  tmpName=prompt('Please, Enter The User Name');
  if (typeof(tmpName)=='object') {
    tmpName='';
  }
  flagName=false;
  for (var i = 0; i < arrName.length; i++) {
    if (tmpName == arrName[i]) {
      flagName=true;
      trueName=tmpName;
    }
  }
  if (flagName) {
    alert(trueName+', Вы успешно вошли');
  } else {
    alert('Такого пользователя не найдено');
  }
}
