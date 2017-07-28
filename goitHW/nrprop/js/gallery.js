$(document).ready(function(){

console.log('Hello');
// $("a.grouped_elements").fancybox();
// $("a#single_image").fancybox();
// $('.fancybox').fancybox();

// $(".fancybox").fancybox();
$('#slideshowHolder').jqFancyTransitions({ width: 900, height: 150, delay: 2000, effect: 'zipper', strips: 50 });
// $("a#single_image").fancybox({
//     'transitionIn'  :   'elastic',
//     'transitionOut' :   'elastic',
//     'speedIn'       :   100,
//     'speedOut'      :   200,
//     'overlayShow'   :   false,
//     'padding'       :   0,
// });
jQuery("a[rel=group]").fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
});

$('.menu ul li').hover(
    function () {
      clearTimeout($.data(this,'timer'));
      $('ul:first', this).slideDown(1200);
    },
    function () {
      $.data(this,'timer', setTimeout($.proxy(function() {
        $('ul',this).stop(true,true).slideUp(500);
      }, this), 100));
    }
);



})
