$(document).ready(function(){

console.log('Hello');

// $(".fancybox").fancybox();
$('#slideshowHolder').jqFancyTransitions({ width: 900, height: 300, delay: 2000, effect: 'zipper', strips: 50 });
// перехватывание клика
// $('a').on('click', function(e){
//   e.preventDefault();
// });
// конец перехватывания клика

$('.menu ul li').hover(
    function () {
      clearTimeout($.data(this,'timer'));
      $('ul:first', this).slideDown(1200);
// insert
// end of insert
    },
    function () {
      $.data(this,'timer', setTimeout($.proxy(function() {
        $('ul',this).stop(true,true).slideUp(500);
      }, this), 100));
    }
);

// Reload img from preview
// var largeImg = document.getElementById('single_1');
var largeImg = document.getElementById('largeImg');

document.getElementById('thumbs').onclick = function(e) {
  var target = e.target;

  while (target != this) {

    if (target.nodeName == 'A') {
      showThumbnail(target.href, target.title);
      return false;
    }

    target = target.parentNode;
  }

}

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
// end of Reload img from preview
// fancybox
// console.log('Did FancyBox');
//
// $("#single_1").fancybox({
//       helpers: {
//           title : {
//               type : 'float'
//           }
//       }
//   });

// end of FancyBox

})
