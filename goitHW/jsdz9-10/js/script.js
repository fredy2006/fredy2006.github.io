$(document).ready(function(){

var params = {
            changedEl: ".lineForm select",
            visRows: 13,
            scrollArrows: true
        }
cuSel(params);
// activation and deactivation submenu second level
$('a').on('click', function(e){
  e.preventDefault();
});

$('.menu ul li').hover(
    function () {
      clearTimeout($.data(this,'timer'));
      $('ul:first', this).slideDown(450);
// insert
// end of insert
    },
    function () {
      $.data(this,'timer', setTimeout($.proxy(function() {
        $('ul',this).stop(true,true).slideUp(200);
      }, this), 100));
    }
);


    // animated color
    // jQuery(".menu ul ul").mouseenter(
    //   function () {
    //     jQuery(this).animate({
    //         backgroundColor:"#03C",
    //     }, 500 );
    // });
    //
    // jQuery(".menu ul ul").mouseleave(function() {
    //     jQuery(this).animate({
    //         backgroundColor:"#0CF",
    //     }, 500 );
    // });
    //
    // end of animated color


// end of activation and deactivation submenu second level
// $('a').on('click', function(e){
//   e.preventDefault();
// });
//
// $('.menu ul li').hover(function () {
//    clearTimeout($.data(this,'timer'));
//    $('ul',this).stop(true,true).slideDown(200);
// }, function () {
//   $.data(this,'timer', setTimeout($.proxy(function() {
//     $('ul',this).stop(true,true).slideUp(200);
//   }, this), 100));
// });

})
