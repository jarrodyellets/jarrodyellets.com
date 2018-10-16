$(document).ready(function () {

  var zIndex = 1;
  var topPic = "";

  // Nav Bar auto scroll to section
  $('#about').click(function () {
    scroll_to(".about");
  });
  $('#portfolio').click(function () {
    scroll_to(".portfolio");
  });
  $('#contact').click(function () {
    scroll_to(".contact")
  });

  // Arrow scroll to top
  $('.arrow').click(function () {
    $('html, body').animate({
      scrollTop: '0px'
    }, 500);
  })

  // Hamburger nav btns
  $(".hamburger").click(function () {
    $(".navLinks").addClass("width");
  });
  $(".closeBtn").click(function () {
    $(".navLinks").removeClass("width");
  });

  // Nav bar polaroids
  $("#about").mouseenter(function () {
    if (topPic != "about") {
      $("#rolloverAbout").removeClass("rolloverShow");
      $("#rolloverAbout").css('z-index', zIndex);
      zIndex++
      setTimeout(function () {
        topPic = "about";
        $("#rolloverAbout").addClass("rolloverShow");
      }, 10)
    }
  });
  $("#portfolio").mouseenter(function () {
    if (topPic != "portfolio") {
      $("#rolloverPortfolio").removeClass("rolloverShow");
      $("#rolloverPortfolio").css('z-index', zIndex);
      zIndex++
      setTimeout(function () {
        topPic = "portfolio";
        $("#rolloverPortfolio").addClass("rolloverShow");
      }, 10)
    }
  });
  $("#contact").mouseenter(function () {
    if (topPic != "contact") {
      $("#rolloverContact").removeClass("rolloverShow");
      $("#rolloverContact").css('z-index', zIndex);
      zIndex++
      setTimeout(function () {
        topPic = "contact";
        $("#rolloverContact").addClass("rolloverShow");
      }, 10)
    }
  });

  // About auto underline
  $(window).scroll(function () {
    $('.about').each(function (i) {
      var bottom_of_object = Math.floor($(this).offset().top);
      var bottom_of_window = $(window).scrollTop();
      if (bottom_of_window >= bottom_of_object) {
        $('.underlineWho').addClass('right');
        setTimeout(function () {
          $('.underlineWhat').addClass('right');
        }, 800);
        setTimeout(function () {
          $('.front').addClass('right');
        }, 1500);
        setTimeout(function () {
          $('.back').addClass('right');
        }, 2200);
        setTimeout(function () {
          $('.etc').addClass('right');
        }, 2900);
        setTimeout(function () {
          for (let j = 1; j < 16; j++) {
            addHash(j);
          }
        }, 3300);
      }
    });

    $('.portfolio').each(function (i) {
      var bottom_of_object = Math.floor($(this).offset().top);
      var bottom_of_window = $(window).scrollTop();
      if (bottom_of_window >= bottom_of_object) {
        for (let j = 1; j < 4; j++) {
          addOpacity("#pol", j);
        }
      }
    })
    $('#pola1').each(function (i) {
      var bottom_of_object = Math.floor($(this).offset().top) - 400;
      var bottom_of_window = $(window).scrollTop();
      console.log(bottom_of_object);
      console.log(bottom_of_window);
      if (bottom_of_window >= bottom_of_object) {
        for (let j = 1; j < 4; j++) {
          addOpacity("#pola", j);
        }
      }
    })
  });

  function addHash(j) {
    setTimeout(function () {
      $("#stack" + j).addClass("width");
    }, 300 * j);
  }

  function addOpacity(id, j) {
    setTimeout(function () {
      $(id + j).css("opacity", 1);
    }, 500 * j);
  }

  function scroll_to(div) {
    $('html, body').animate({
      scrollTop: $(div).offset().top
    }, 500);
  }



});