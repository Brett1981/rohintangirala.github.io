$(function() {
  $('a[href*="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(window).load(function() {
  var title = document.getElementById("title");
  var tagline = document.getElementById("tagline");
  var findOutMore = document.getElementById("find-out-more");
  TweenLite.from(title, 0.75, {delay:.05, opacity: 0});
  TweenLite.from(tagline, 0.75, {delay:.75, opacity: 0});
  TweenLite.from(findOutMore, 0.75, {delay: 1.25, opacity: 0});
  window.sr = ScrollReveal({origin: 'left', distance: '100%'}).reveal('.scroll-item');
});
