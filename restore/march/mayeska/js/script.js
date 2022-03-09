$(document).ready(function() {
  
  $("button").click(function(){
    $("img").toggle();
  });
  
    $("img").click(function(){
      $(this).css("border-radius":"10em");
    });
  
});
