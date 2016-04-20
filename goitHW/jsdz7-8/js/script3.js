$(document).ready(function(){
  $( 'input' ).each(function( i ) {
    $('input:eq('+i+')').hover(
      function(){
        var input_id=i+1;
        var $spanId = $('#spanId'+input_id)
        $spanId.removeClass('noActive');
        $('#spanId'+input_id).addClass('Active');
      }, function(){
        var input_id=i+1;
        var $spanId = $('#spanId'+input_id)
        $spanId.removeClass('Active');
        $('#spanId'+input_id).addClass('noActive');
      }
);
})
$('button').click(function(e){
  console.log('Press button');
  e.preventDefault();
  $('#spanId1').removeClass('noActive');
  $('#spanId2').removeClass('noActive');
  $('#spanId3').removeClass('noActive');
  // $('#spanId').addClass('Active');
  return false;
})
});
