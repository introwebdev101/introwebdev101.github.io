$(document).ready(function() {
$("#change").click(function(){
  $("p").css({"color":"green"});
    });
  
$("#rounded").click(function(){
  $("div").css({"border-radius":"10em});
               });
  
  $("p").click(function(){
    alert("Lumos!");
  });
  
  $('div').click(function(){
    $(this).hide();
  });
  
  $("#hide").click(function(){
    $("img").toggle();
  });
  
});
