$(document).ready(function(){

  var currentDiv = "#laptop"
  var currentPort = "#filler";
  var zIndex = 1;
  var topPic = "";

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

  $(window).scroll(function(){
    $('.aboutWrapper').each(function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height(); 
        if(bottom_of_window > bottom_of_object){
          $('.underlineWho').addClass('right');
        }
    });

    $('.tools').each(function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
         if( bottom_of_window > bottom_of_object ){
            for (let j= 1; j < 11; j++){
              addHash(j);
            }             
        }       
    }); 
  });

  function addHash(j){
    setTimeout(function(){
      $("#stack" + j).addClass("width");
    }, 300 * j);
  }

  function scroll_to(div){
    $('html, body').animate({
      scrollTop: $(div).offset().top
      }, 500);
}

});