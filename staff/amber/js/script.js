$(document).ready(function() {
 $("#change").click(function(){
   $("p").css({"color":"orange"});
 });
 $("#rounded").click(function(){
  $("div").css({"border-radius":"12em"});
 });
 $("p").click(function(){
  alert("A paragraph was clicked.");
 });
 $("div").click(function(){
  $(this).hide();
 });
 $("#hide").click(function(){
  $("img").toggle();
 });
});
