$(document).ready(function() {
$("#rounded").click(function(){
  $("div").css({"border-radius":"10em"});
  });
 
$("p").click(function(){
    alert("A paragraph was clicked.");
  });
  
$("#change").click(function(){
  $("p").css({"color":"pink"});
});

  $('div').click(function(){
    $(this).hide();
  });
  
  $("#hide").click(function(){
    $("img").toggle();
  });

});
