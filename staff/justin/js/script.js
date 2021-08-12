$(document).ready(function() {
  $("#rounded").click(function(){
    $("div").css({"border-radius":"10em"});
    });
    
 $("p").click(function(){
      alert("Uh oh.");
   });    
     
$("#change").click(function(){
  $("p").css({"color":"green"});
             });
    
    $("#hide").click(function(){
      $("img").toggle();
    });
    
     $('div').click(function(){
      $(this).hide();
    });
});
