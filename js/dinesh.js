$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-top').fadeIn();
    } else {
      $('.back-top').fadeOut();
    }
  });

  // scroll body to 0px on click
  $('.back-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1600);
    return false;
  });
});