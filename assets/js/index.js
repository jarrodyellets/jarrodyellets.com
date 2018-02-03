$(document).ready(function(){

  var currentDiv = "#laptop"
  var currentPort = "#filler";
  
  $(".main-window").ripples({
    resolution: 512,
    dropRadius: 20, 
    perturbance: 0.01,
    interactive: false 
  });

  setInterval(function() {
    var $el = $('.main-window');
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 30;
    var strength = 0.1 + Math.random() * 0.05;
    $el.ripples('drop', x, y, dropRadius, strength);
  }, 400);

 	$('#navLinks').slideDown("slow");
  $(".name").delay(200).slideDown("slow");
  $(".menu").delay(400).slideDown("slow");
  $(".job").delay(600).slideDown("slow");

	$('#about').click(function(){
      scroll_to(".about");
    });
	$('#portfolio').click(function(){
      scroll_to(".portfolio");
    });
	$('#contact').click(function(){
      scroll_to(".contact")
    });


  $("#calBtn").click(function(){
    if(currentDiv !== "#calculator"){
        slideRight("#calculator");
        slideLeft("#calAbout");
      }
  });

  $("#twiBtn").click(function(){
    if(currentDiv !== "#twitch"){
        slideRight("#twitch");
        slideLeft("#twiAbout");
      }
  });

    $("#wikBtn").click(function(){
    if(currentDiv !== "#wiki"){
        slideRight("#wiki");
        slideLeft("#wikAbout");
      }
  });

      $("#retBtn").click(function(){
    if(currentDiv !== "#retro"){
        slideRight("#retro");
        slideLeft("#retAbout");
      }
  });

      $("#ticBtn").click(function(){
    if(currentDiv !== "#tic"){
        slideRight("#tic");
        slideLeft("#ticAbout");
      }
  });

      $("#pomBtn").click(function(){
    if(currentDiv !== "#pomodoro"){
        slideRight("#pomodoro");
        slideLeft("#pomAbout");
      }
  });

      $("#simBtn").click(function(){
    if(currentDiv !== "#simon"){
        slideRight("#simon");
        slideLeft("#simAbout");
      }
  });

  $(window).scroll(function(){
    $('.icon').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
            $('.html').animate({ opacity: 1 }, { duration: 1500 });
            $('.css').animate({ opacity: 1 }, { duration: 1500 });
            $('.javascript').animate({ opacity: 1 }, { duration: 1500 });
            $('.jquery').animate({ opacity: 1 }, { duration: 1500 });
            $('.bootstrap').animate({ opacity: 1 }, { duration: 1500 });
            $('.node').animate({ opacity: 1 }, { duration: 1500 });  
            $('.express').animate({ opacity: 1 }, { duration: 1500 });  
            $('.mongo').animate({ opacity: 1 }, { duration: 1500 });       
        }       
    });
    $('#buttonDiv').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
            $("#calBtn").slideDown(500);       
            $("#twiBtn").slideDown(500);       
            $("#wikBtn").slideDown(500);      
            $("#weaBtn").slideDown(500);      
        }       
    }); 
  });

  function scroll_to(div){
    $('html, body').animate({
      scrollTop: $(div).offset().top
      },500);
}

  function slideRight(div){
      $(currentDiv).toggleClass("hid", 300, "linear");
      $(currentDiv).toggleClass("center", 300, "linear");
      currentDiv = div;
      $(div).delay(300).toggleClass("hid", 300, "linear");
      $(div).toggleClass("center", 50, "linear");


  }

  function slideLeft(div){
    if(currentPort === "#filler"){
      $(currentPort).animate({opacity: 0}, 300);
    }
    $(currentPort).toggleClass("hidRight", 300, "linear");
    currentPort = div;
    $(div).delay(300).toggleClass("hidRight", 300, "linear")

  }



});