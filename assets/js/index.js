$(document).ready(function(){

  var currentDiv = "#laptop"
  var currentPort = "#filler";
  var zIndex = 1;
  var topPic = "";
  var colors = ["rgba(22, 21, 19, .7)", "rgba(248, 22, 33, .7)", "rgba(16, 97, 202, .7)", "rgba(1, 145, 94, .7)", "rgba(130, 4, 104, .7)"]

  $('#about').click(function(){
      scroll_to(".about");
    });
  $('#portfolio').click(function(){
      scroll_to(".portfolio");
    });
  $('#contact').click(function(){
      scroll_to(".contact")
    });
  $('.arrow').click(function(){
    $('html, body').animate({scrollTop: '0px'}, 500);
  })

  $(".hamburger").click(function(){
    $(".navLinks").addClass("width");
  });

  $(".closeBtn").click(function(){
    $(".navLinks").removeClass("width");
  });

  $(".hvr-underline-from-left:before").mouseleave(function(){
    $(".hvr-underline-from-left:before").css("opacity", "0");
  })

  $("#about").mouseenter(function(){
    if(topPic != "about"){
      $("#rolloverAbout").removeClass("rolloverShow");
      $("#rolloverAbout").css('z-index', zIndex);
      zIndex++
      setTimeout(function(){
        topPic = "about";
        $("#rolloverAbout").addClass("rolloverShow");
      }, 10)
    }
  });

  $("#portfolio").mouseenter(function(){
    if(topPic != "portfolio"){
      $("#rolloverPortfolio").removeClass("rolloverShow");
      $("#rolloverPortfolio").css('z-index', zIndex);
      zIndex++
      setTimeout(function(){
        topPic = "portfolio";
        $("#rolloverPortfolio").addClass("rolloverShow");
      }, 10)
    }
  });

  $("#contact").mouseenter(function(){
    if(topPic != "contact"){
      $("#rolloverContact").removeClass("rolloverShow");
      $("#rolloverContact").css('z-index', zIndex);
      zIndex++
      setTimeout(function(){
        topPic = "contact";
        $("#rolloverContact").addClass("rolloverShow");
      }, 10)
    }
  });

  function scroll_to(div){
    $('html, body').animate({
      scrollTop: $(div).offset().top
      }, 500);
}

});