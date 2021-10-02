$(document).ready(function() {
$("#rounded").click(funtion(){
  $("div").css({"border-radius":"10em"});
});
$("p").click(function(){
  alert("A paragraph was clicked.");
});

$("#change").click(function(){
 $("p").css({"color":"green"});
});

$("div").click(function(){
  $(this).hide();
});

$("#hide").click(function(){
  $("img").toggle();
});
  

});
