'use strict';

var testData = [
{
    question: 'Вопрос №1',
    answer: ['Ответ №1 на вопрос №1', 'Ответ №2 на вопрос №1', 'Ответ №3 на вопрос №1 (true)'],
    check: [ 'false', 'false', 'true'],
    name: 'first'
},
{
    question: 'Вопрос №2',
    answer: ['Ответ №1 на вопрос №2', 'Ответ №2 на вопрос №2 (true)', 'Ответ №3 на вопрос №2'],
    check: ['false', 'true', 'false'],
    name: 'second'
},
{
    question: 'Вопрос №3',
    answer: ['Ответ №1 на вопрос №3 (true)', 'Ответ №2 на вопрос №2', 'Ответ №3 на вопрос №2'],
    check: [ 'true', 'false', 'false'],
    name: 'third'
}
];
localStorage.setItem('questionAnswer', JSON.stringify(testData));

$(function () {
  var test = $('#test').html();

  var content = localStorage.getItem('questionAnswer');
  content = JSON.parse(content);

  var testText = tmpl(test, {data: content});
  $('.show_test').click(function() {
    $('.show_test').hide();
    $('.check').css("display", "block");
    $('.check').before(testText);
  });

  $('.check').on('click', function() {
      var $result = true;
          $('.checkbox').each(function() {
      	if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
      			$result = false;
                  return false;
      		}
      });
      $('.modal_text')[0].innerHTML = $result ? 'Ответы верные, тест пройден' : 'Ответы неверные, тест не пройден';
      if ($result) {
        $('.modal_window').css({"display" : "block", "color" : "black"}).animate({opacity: 2}, 200);
      } else {
        $('.modal_window').css({"display" : "block", "color" : "red"}).animate({opacity: 2}, 200);
      }

      $('.overlay').show('fast');
  });

  $('.modal_button').on('click', function(){
      $('.modal_window').animate({opacity: 0}, 500, function() {
          $(this).css("display", "none");
          $('.overlay').hide('fast');
      })
      $('.checkbox').each(function() {
          $(this).prop('checked', false);
      });
  });


});
