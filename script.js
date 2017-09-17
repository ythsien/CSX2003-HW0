$(document).ready(function (){
  
  $('.menu').click(function(){
    $('.menu').removeClass("m1");
    $(this).addClass("m1");
    
    if(this.id === "m1"){
      $('.content').addClass("hidden");
      $('#c1').removeClass("hidden");
    }
    else if (this.id === "m2"){
      $('.content').addClass("hidden");
      $('#c2').removeClass("hidden");
    }
    else{
      $('.content').addClass("hidden");
      $('#c3').removeClass("hidden");
    }
    
    
  });
});