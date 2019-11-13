$(document).ready(function() {

  addOpacity("#pol", 4)

  addArrow();

  addNavLine();

  var width = $(window).width();
  var mobileMenu = false;

  // Nav Bar auto scroll to section
  $('#home').click(function() {
    scroll_to('html');
  });
  $('#about').click(function() {
    scroll_to('.about');
  });
  $('#portfolio').click(function() {
    scroll_to('.portfolio');
  });
  $('#contact').click(function() {
    scroll_to('.contact');
  });

  // Arrow scroll to top
  $('.arrowWrapper').click(function() {
    $('html, body').animate(
      {
        scrollTop: '0px'
      },
      500
    );
  });

  // Hamburger nav btns
  $('.hamburger').click(function() {
    mobileMenu = !mobileMenu;
    if (mobileMenu) {
      $('.navLinks').addClass('width');
      $('.mobileToggle').css('transform', 'translateX(50px');
      setTimeout(function() {
        $('.mobileToggle').removeClass('fas fa-bars');
        $('.mobileToggle').addClass('fas fa-times');
        $('.mobileToggle').css('transform', 'translateX(0');
      }, 300);
    } else {
      $('.navLinks').removeClass('width');
      $('.mobileToggle').css('transform', 'translateX(50px');
      setTimeout(function() {
        $('.mobileToggle').removeClass('fas fa-times');
        $('.mobileToggle').addClass('fas fa-bars');
        $('.mobileToggle').css('transform', 'translateX(0');
      }, 300);
    }
  });

  if (width > 768) {
    $('.arrowWrapper').mouseenter(function() {
      $('.arrowFiller').css('height', '100%');
    });
  }

  // About auto underline
  $(window).scroll(function() {
    $('.about').each(function(i) {
      var bottom_of_object = Math.floor($(this).offset().top);
      var bottom_of_window = $(window).scrollTop();
      if (bottom_of_window >= bottom_of_object) {
        $('.underlineWho').addClass('right');
        setTimeout(function() {
          $('.underlineWhat').addClass('right');
        }, 800);
        setTimeout(function() {
          $('.front').addClass('right');
        }, 1300);
        setTimeout(function() {
          $('.back').addClass('right');
        }, 1800);
        setTimeout(function() {
          $('.etc').addClass('right');
        }, 2300);
        setTimeout(function() {
          for (let j = 1; j < 20; j++) {
            addHash(j);
          }
        }, 2500);
      }
    });

    $('.portfolio').each(function(i) {
      var bottom_of_object = Math.floor($(this).offset().top) - 100;
      var bottom_of_window = $(window).scrollTop();
      if (bottom_of_window >= bottom_of_object) {
        for (let j = 1; j < 4; j++) {
          addOpacity('#pol', j);
        }
      }
    });

    $('#built1').each(function(i) {
      var bottom_of_object = Math.floor($(this).offset().top) - 600;
      var bottom_of_window = $(window).scrollTop();
      if (bottom_of_window >= bottom_of_object) {
        for (let j = 1; j < 4; j++) {
          addRight('#built', j);
        }
      }
    });

    $('#builtx1').each(function(i) {
      var bottom_of_object = Math.floor($(this).offset().top) - 600;
      var bottom_of_window = $(window).scrollTop();
      if (bottom_of_window >= bottom_of_object) {
        for (let j = 1; j < 4; j++) {
          addRight('#builtx', j);
        }
      }
    });

    $('#pola1').each(function(i) {
      var bottom_of_object = Math.floor($(this).offset().top) - 600;
      var bottom_of_window = $(window).scrollTop();
      if (bottom_of_window >= bottom_of_object) {
        for (let j = 1; j < 4; j++) {
          addOpacity('#pola', j);
        }
      }
    });
  });

  function addHash(j) {
    let delay = 450 * j;
    setTimeout(function() {
      $('#stack' + j).addClass('widthx');
    }, delay);
    setTimeout(function() {
      $('#stack' + j).addClass('width');
    }, delay + 200);
  }

  function addArrow() {
    setTimeout(function() {
      $('.downArrow').addClass('arrowHeight3');
    }, 4100);
    setTimeout(function() {
      $('.downArrow').addClass('arrowHeight1');
    }, 4300);
    setTimeout(function() {
      $('.downArrow').addClass('arrowHeight2');
    }, 4600);
  }

  function addNavLine() {
    setTimeout(function() {
      $('.nav-bar').addClass('navLineWidth');
    }, 3000);
  }

  function addOpacity(id, j) {
    setTimeout(function() {
      $(id + j).css('opacity', 1);
    }, 500 * j);
  }

  function addRight(id, j) {
    setTimeout(function() {
      $(id + j).addClass('right');
    }, 800 * j);
  }

  function scroll_to(div) {
    $('html, body').animate(
      {
        scrollTop: $(div).offset().top
      },
      500
    );
  }
});
