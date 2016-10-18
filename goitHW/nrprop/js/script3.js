$(document).ready(function(){

console.log('Hello');
// $("a.grouped_elements").fancybox();
// $("a#single_image").fancybox();
// $('.fancybox').fancybox();

// $(".fancybox").fancybox();
// $('#slideshowHolder').jqFancyTransitions({ width: 900, height: 300, delay: 2000, effect: 'zipper', strips: 50 });
// $("a#single_image").fancybox();
$("a#single_image").fancybox({
    'transitionIn'  :   'elastic',
    'transitionOut' :   'elastic',
    'speedIn'       :   100,
    'speedOut'      :   200,
    'overlayShow'   :   false,
    'padding'       :   0,
});

// перехватывание клика
// $('a').on('click', function(e){
//   e.preventDefault();
// });
// конец перехватывания клика

// $('.menu ul li').hover(
//     function () {
//       clearTimeout($.data(this,'timer'));
//       $('ul:first', this).slideDown(1200);
//     },
//     function () {
//       $.data(this,'timer', setTimeout($.proxy(function() {
//         $('ul',this).stop(true,true).slideUp(500);
//       }, this), 100));
//     }
// );

// Reload img from preview
// var largeImg = document.getElementById('single_1');
// var largeImg = document.getElementById('largeImg');
//
// document.getElementById('thumbs').onclick = function(e) {
//   var target = e.target;
//
//   while (target != this) {
//
//     if (target.nodeName == 'A') {
//       showThumbnail(target.href, target.title);
//       return false;
//     }
//
//     target = target.parentNode;
//   }
//
// }

// function showThumbnail(href, title) {
//   largeImg.src = href;
//   largeImg.alt = title;
// }

})
