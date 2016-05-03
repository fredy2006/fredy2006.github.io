// <script type="text/javascript">
jQuery(document).ready(function(){

jQuery(".niceCheck").mousedown(
/* при клике на чекбоксе меняем его вид и значение */
function() {
     changeCheck(jQuery(this));
});
/* при клике на label-чекбоксе меняем его вид и значение */
/*--------------------------------*/
// jQuery(".jQueryCheckBox label").mousedown(
//   function() {
// console.log('making label click');
// console.log(this);
//        changeCheck(jQuery('.niceCheck'));
//   });


/*--------------------------------*/
jQuery(".niceCheck").each(
/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
function() {
     changeCheckStart(jQuery(this));
});
                                        });
function changeCheck(el)
/*
    функция смены вида и значения чекбокса
    el - span контейнер дял обычного чекбокса
    input - чекбокс
*/
{
  // console.log('making label click and change check');
  // console.log('el=',el);

     var el = el,
          input = el.find("input").eq(0);
     if(!input.attr("checked")) {
        el.css("background-position","0 -19px");
        input.attr("checked", true)
    } else {
        el.css("background-position","0 0");
        input.attr("checked", false)
    }
     return true;
}
function changeCheckStart(el)
/*
    если установлен атрибут checked, меняем вид чекбокса
*/
{
var el = el,
        input = el.find("input").eq(0);
      if(input.attr("checked")) {
        el.css("background-position","0 -19px");
        }
     return true;
}
// </script>
