$(document).ready(function() {
  
  $("#rounded").click(function(){
    $("div").css({"border-radius":"10em"});
  });
  
  $("p").click(function(){
     alert("A paragraph was clicked.");
  });
  
  $("#change-text").click(function(){
    $("p").css({"color","green"});
  });
  /*
  $("#hide").click(function(){
    $("img").hide();
  });
  
  $("div").click(function(){
    $(this).hide();
  });*/
});
