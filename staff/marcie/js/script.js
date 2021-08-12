$(document).ready(function() {
  $("#change").click(function(){
    $("p").css({"color":#9370DB});
  });
  $("#rounded").click(function(){
    $("div").css({"border-radius":"10em"});
  });
  $("p").click(function(){
    alert("A paragraph was clicked.");
  });
});
  
