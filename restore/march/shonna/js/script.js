$(document).ready(function(){

  $("img").click(function(){
    $("img").css({"border-radius":"10em"});
  });
  
  $("body").click(function(){
    alert("You clicked somewhere on the page!");
  });
  
  $("#btn1").click(function(){
    $("img").css({"border-radius":"0px"});
  });
  
  $("#btn2").click(function(){
    $("img").toggle();
  });
  
 )};
