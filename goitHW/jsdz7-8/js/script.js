$(document).ready(function(){
  $( ".tab-menu li" ).each(function( i ) {
    $(".tab-menu li:eq("+i+")").click(function(){
      var tab_id=i+1;
      $(".tab-menu li").removeClass("active");
      $(this).addClass("active");
      $('.contents div').stop(false,false).hide();
			$('.tab-content'+tab_id).stop(false,false).show();
      console.log('tab-content'+tab_id);
      return false;
})
});
})
