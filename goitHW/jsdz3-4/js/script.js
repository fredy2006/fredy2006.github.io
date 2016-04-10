$(function () {
    $('label').mouseup(function (){
        $(this).find('.input_checkbox').toggleClass('on');
        var tmpInput=this.getElementsByTagName("input");
    });
});


function changeCheck(el)
{
  console.log('el=',el);
  var el = el,
      span = el.getElementsByTagName("span")[0]
       input = el.getElementsByTagName("input")[0];

  if(input.checked)
  {
      span.style.backgroundPosition="0 0";

      input.checked=false;
  }
  else
  {
    span.style.backgroundPosition="0 -19px";

       input.checked=true;
  }
  return true;
}

console.log('Connect');
var element=document.createElement('div');
element.classList.add('wrapper');
var body=document.querySelector('body');
body.appendChild(element);

var element=document.querySelectorAll('.wrapper');
var link=element[0];
link.style.width='800px';
link.style.margin='0 auto';
element[0].innerHTML='<h3><p class="text-center">Тест по программированию</p></h3>'

var wrapper=document.querySelector('.wrapper');

var quetion1=document.createElement('h3');
wrapper.appendChild(quetion1);
quetion1.innerHTML='1. Вопрос №1';

for (var i = 0; i < 3; i++) {
  var element=document.createElement('div');
  wrapper.appendChild(element);
  element.innerHTML='<label onclick="changeCheck(this)" for="check1'+(1+i)+'"><input type="checkbox" id="check1'+(1+i)+'" name="quetion'+(1+i)+'"><span class="input_checkbox"></span><strong>Вариант ответа №'+(1+i)+'</strong></label>';
}
var quetion1=document.createElement('h3');
wrapper.appendChild(quetion1);
quetion1.innerHTML='2. Вопрос №2';
for (var i = 0; i < 3; i++) {
  var element=document.createElement('div');
  wrapper.appendChild(element);
  element.innerHTML='<label onclick="changeCheck(this)" for="check2'+(1+i)+'"><input type="checkbox" id="check2'+(1+i)+'" name="quetion'+(1+i)+'"><span class="input_checkbox"></span><strong>Вариант ответа №'+(1+i)+'</strong></label>';
}
var quetion1=document.createElement('h3');
wrapper.appendChild(quetion1);
quetion1.innerHTML='3. Вопрос №3';
for (var i = 0; i < 3; i++) {
  var element=document.createElement('div');
  wrapper.appendChild(element);
  element.innerHTML='<label onclick="changeCheck(this)" for="check3'+(1+i)+'"><input type="checkbox" id="check3'+(1+i)+'" name="quetion'+(1+i)+'"><span class="input_checkbox"></span><strong>Вариант ответа №'+(1+i)+'</strong></label>';
}

var centerButton=document.createElement('div');
centerButton.classList.add('center-button');
wrapper.appendChild(centerButton);
centerButton.style.marginTop='35px';

var buttonText=document.createElement('h2');
centerButton.appendChild(buttonText);
buttonText.innerHTML='<p class="text-center"><a class="checkResult" href="">Проверить мои результаты</a></p>';

var a=document.querySelectorAll('a');
a[0].style.backgroundColor='#cfe2f3';
a[0].style.padding='10px 50px';
a[0].style.border='3px solid black';
a[0].style.marginTop='20px';
a[0].style.color='black';
a[0].style.textDecoration='none';
wrapper.style.width='800px';
wrapper.style.margin='0 auto';

var checkBox=document.querySelectorAll('input[type="checkbox"]');
for (var i = 0; i < checkBox.length; i++) {
checkBox[i].style.display='none';
}

var inputCheckbox=document.querySelectorAll('.input_checkbox');
for (var i = 0; i < inputCheckbox.length; i++) {
  inputCheckbox[i].style.display='inline-block';
  inputCheckbox[i].style.width='19px';
  inputCheckbox[i].style.height='19px';
  inputCheckbox[i].style.background='url(img/check19.png) 0 0px no-repeat';
}
var strong=document.querySelectorAll('strong');
for (var i = 0; i < strong.length; i++) {
  strong[i].style.fontSize='17px';
  strong[i].style.fontWeight='600';
  strong[i].style.margin='0px 0px 4px 10px';
}
