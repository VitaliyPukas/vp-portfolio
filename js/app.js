

$(document).ready(function () {
    // typing animation
    (function ($) {
      $.fn.writeText = function (content) {
        var contentArray = content.split(""),
          current = 0,
          elem = this;
        setInterval(function () {
          if (current < contentArray.length) {
            elem.text(elem.text() + contentArray[current++]);
          }
        }, 80);
      };
    })(jQuery);
  
    // input text for typing animation
    $("#holder").writeText("frontend developer");
  
    $(function() {
        $('progress').each(function() {
          var max = $(this).val();
          $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
                  });
      });
  });
  










