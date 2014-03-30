// Inspired by from: http://james.padolsey.com/javascript/extending-jquerys-selector-capabilities/
(function() {
  var $w = $(window);

  $.extend($.expr[':'], {
    inview: function(el) {
      var $el = $(el),
          scrollTop        = (document.documentElement.scrollTop || document.body.scrollTop),
          elementTop       = $el.offset().top,
          elementBottom    = elementTop + $el.height(),
          windowHeight     = (window.innerHeight && window.innerHeight < $w.height()) ? window.innerHeight : $w.height(),
          viewPortBottom = scrollTop + windowHeight;
      return (elementTop > scrollTop && elementTop < viewPortBottom) || (elementBottom > scrollTop && elementBottom < viewPortBottom);
    }
  });
})();
