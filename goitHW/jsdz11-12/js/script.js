$(document).ready(function(){

  $('ul.carusel').carusel();
  var html = $('#templateText').html();
  var articles=[
    {
      title: '',
      content: 'Студент Заборостроительного Университета'
    },
    {
      title: 'Хочу учить FRONTEND, потому что:',
      content: '- Заборы строить неинтересно;  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Мой контактный телефон и E-mail:',
      content: '(077)1112233, opendom@ukr.net'
    },
    {
      title: 'Мой фидбек',
      content: 'Танцы, песни, рок-н-рол'
    },
  ];
  var content = tmpl(html,{data: articles});
  $('body').append(content);
  var element=document.querySelectorAll('h2');
  var firstElement=element[0];
  firstElement.style.borderTop='none';
// var first = $('h2')[0];
// first.addClass('firstH2');
// console.log($('h2')[0]);
//   $('h2')[0].css('border','none');
})
