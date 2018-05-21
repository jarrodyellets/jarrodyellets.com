$(document).ready(function(){

  var currentDiv = "#laptop"
  var currentPort = "#filler";
  var zIndex = 1;
  var topPic = ""

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

  $(".hamburger").click(function(){
    $(".navLinks").addClass("width");
  });

  $(".closeBtn").click(function(){
    $(".navLinks").removeClass("width");
  });

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

  $("#radBtn").click(function(){
    if(currentDiv !== "#radio"){
        slideRight("#radio");
        slideLeft("#radAbout");
      }
  });

  $("#pilBtn").click(function(){
    if(currentDiv !== "#pillow"){
        slideRight("#pillow");
        slideLeft("#pilAbout");
      }
  });

    $("#hanBtn").click(function(){
    if(currentDiv !== "#han"){
        slideRight("#han");
        slideLeft("#hanAbout");
      }
  });

      $("#retBtn").click(function(){
    if(currentDiv !== "#retro"){
        slideRight("#retro");
        slideLeft("#retAbout");
      }
  });

      $("#tenBtn").click(function(){
    if(currentDiv !== "#ten"){
        slideRight("#ten");
        slideLeft("#tenAbout");
      }
  });

      $("#newBtn").click(function(){
    if(currentDiv !== "#newspaper"){
        slideRight("#newspaper");
        slideLeft("#newAbout");
      }
  });

      $("#mooBtn").click(function(){
    if(currentDiv !== "#moog"){
        slideRight("#moog");
        slideLeft("#mooAbout");
      }
  });

  $(window).scroll(function(){
    $('.icon').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
            $('.icon').animate({ opacity: 1 }, { duration: 1500 });      
        }       
    }); 
  });

  function scroll_to(div){
    $('html, body').animate({
      scrollTop: $(div).offset().top
      }, 500);
}

  function slideRight(div){
      $(currentDiv).toggleClass("hid");
      $(currentDiv).toggleClass("center");
      $(div).addClass("screen");
      currentDiv = div;
      $(div).delay(300).toggleClass("hid");
      $(div).toggleClass("center");


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