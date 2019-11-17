(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){
  // Initialize Navigation
  var nav = new Overlay('#main-nav', '#main-nav-trigger', 'main-nav-transition');

  if($('#subcat-nav'))
    var nav = new Overlay('#subcat-nav', '.subcat-nav-trigger', 'subcat-nav-transition');

  // Initialize Content Sliders
  $('.content-slider').each(function(index, e){
    var c = new ContentCarousel(e);
  });

})();

// Displays an overlay based on an element on the page
function Overlay(elId, toggleId, modifier) {

  var overlayToggle = $(toggleId);
  var close = $('#close-modal');

  // click event for toggling mobile navigation
  overlayToggle.bind('click', function(e){

    // set body and CSS modifier
    var body = $('body');
    body.addClass(`${modifier}`);

    // create modal instance
    var overlayContent = $(elId).clone();
    var modal = $('<div id="nav-overlay" tabindex="-1" aria-label="Overlay"><a href="#" id="close-modal" class="mobile-nav-trigger mobile" aria-expanded="false"><span class="visually-hidden>Close</span>"</a></div>');
    body.prepend(modal.append(overlayContent));

    // setTimeout creates required reflow for transitions
    setTimeout(function() { body.addClass(`overlay-open`); });

    //toggle aria-expanded attribute for screen readers
    overlayToggle.attr('aria-expanded') == 'false' ? overlayToggle.attr('aria-expanded', true) : overlayToggle.attr('aria-expanded', false)
    $('#nav-overlay').focus();

    $('#close-modal').on('click', function(e){

      // remove class to trigger reverse transitions
      body.removeClass('overlay-open');

      // remove elements & modifier class from DOM after transition completes
      setTimeout(function(){
        var el = document.querySelector('#nav-overlay');
        el.parentNode.removeChild(el);
        body.removeClass(`${modifier}`);
      }, 500);
    });

  });
}

// Initialize carousel based on HTML element
function ContentCarousel(element){

  var el = $(element);
  var copy = el.find('.copy');
  var images = el.find('.images');

  var copycount =  copy.children().length;
  var imagecount = images.children().length;

  // only initialize if these have equal items
  if(copycount == imagecount){

    // only initialize if there is 1 item
    if(copycount > 1) {

      // IMAGE CAROUSEL
      images.slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        asNavFor: '.content-slider .copy'
      });

      // COPY / CONTENT CAROUSEL

      // move custom pagination to beginnining of div at init
      copy.on('init', function(e){
        $(e.target).prepend($(e.target).children('ul.paging'));
      });

      // initialize carousel with custom counter & paging
      copy.slick({
        asNavFor: images,
        dots: true,
        dotsClass: 'paging',
        customPaging: function (slider, i) {
          // apply custom paging to top of carousel
          return  '<p>' + (i + 1) + ' <span>of</span> ' + slider.slideCount + '</p>';
        }
      });
    }
  } else {
    new Error('Copy & Content need to share the same number of items')
  }
};

},{}]},{},[1])