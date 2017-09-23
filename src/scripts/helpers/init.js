function cssParallax(cont, el, radiusVal){
  $(cont).mousemove(function(event) {

      cx = Math.ceil($(window).width() / 2.0);
      cy = Math.ceil($(window).height() / 2.0);
      dx = event.pageX - cx;
      dy = event.pageY - cy;

      tiltx = (dy / cy);
      tilty = - (dx / cx);
      radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
      degree = (radius * radiusVal);

      $(el, cont).css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
      $(el, cont).css('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
  });
}

$(document).ready(function() {
  cssParallax('.c-cube-parallax-detect-js', '.c-cube-parallax-base-js', 70);
  cssParallax('.c-cube-parallax-detect-js.first-js', '.c-cube-parallax-base-js', 70);
});
