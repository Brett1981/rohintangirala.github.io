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


jQuery(document).ready(function () {
    var open = false;
    $('#navDiv').hide();

    //Open the menu

      jQuery("#hamburger").click(function () {
        if (open==false)
        {
        $('#navDiv').slideDown();
        open = true;
        $('#hamburger').fadeOut(200, function() {
          $('#hamburger').attr("src", "images/close.png");
          $('#hamburger').fadeIn(200);
        });

        }
        else {
          $('#navDiv').slideUp();
          open = false;
          $('#hamburger').fadeOut(200, function() {
            $('#hamburger').attr("src", "images/menu.png");
            $('#hamburger').fadeIn(200);
          });
        }
      });




});
