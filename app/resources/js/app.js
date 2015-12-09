'use strict';

var scroll = {
  'cs' : 0,
  'csb' : $(window).height()
};

function events() {
  var events = $('.events-row');
  var total = events.length;
  var cur = 0;
  console.log(total);
  $('.arrow-right').click(function (e){
    e.preventDefault();
    console.log('left');
    if (cur < total - 1) {
      $('.arrow-left.hidden').removeClass('hidden');
      var curRow = $('.events-row.active');
      var newRow = events.eq(cur+1);

      curRow.addClass('to-left');
      newRow.addClass('from-right');
      setTimeout(function(){
        newRow.addClass('active');
      }, 20);
      setTimeout(function(){
        curRow.removeClass('active to-left');
        newRow.removeClass('from-right');
      }, 500);
      cur++;
      console.log(cur);
      if (cur >= total - 1) {
        console.log('big');
        $('.arrow-right').addClass('hidden');
      }
    }
  });
  $('.arrow-left').click(function (e){
    e.preventDefault();

    if (cur > 0) {
      $('.arrow-right.hidden').removeClass('hidden');
      var curRow = $('.events-row.active');
      var newRow = events.eq(cur-1);

      curRow.addClass('to-right');
      newRow.addClass('from-left');
      setTimeout(function(){
        newRow.addClass('active');
      }, 20);
      setTimeout(function(){
        curRow.removeClass('active to-right');
        newRow.removeClass('from-left');
      }, 500);
      cur--;
      if (cur<=0) {
        $('.arrow-left').addClass('hidden');
      }
    }
  });
}

function bookOpen(){
  $('.open-trigger').click(function (e) {
    e.preventDefault();
    $('.book:not(.open)').addClass('open hover');
    $('#example:not(.open)').addClass('open');
    $('body:not(.lock)').addClass('lock');
  });
    $('.close-trigger').click(function (e) {
    e.preventDefault();
    $('.book.open').removeClass('open');
    $('#example.open').removeClass('open');

    setTimeout(function(){
      $('.book.hover').removeClass('hover');
      $('body.lock').removeClass('lock');
    }, 2000);
  });
}

function navRoll(){
  function setNav(){
    var $currentSection=$('#the-book');
    if(scroll.cs > 0){
      $('#site-header:not(.short)').addClass('short');
    }
    else {
      $('#site-header.short').removeClass('short');
    }
    if($('body').hasClass('home')){
      $('section').each(function(){
        var sectionTop = $(this).offset().top;
        if( sectionTop - 45 < scroll.cs){
          // We have either read the section or are currently reading the section so we'll call it our current section
          $currentSection = $(this);
          console.log('what');
          // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
        }
        // This is the bit of code that uses the currentSection as its source of ID
        var id = $currentSection.attr('id');
        $('#site-nav').find('a').removeClass('active');
        $('#site-nav').find('[href=#'+id+']').addClass('active');
      });
    }
  }
  setNav();
  $(window).scroll( function () {
    scroll.cs = $(this).scrollTop();
    setNav();
  });
}

function anchorScroll() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}

function navOpen(){
  $('.hamburger').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('nav-open lock');
  });
}

$(document).ready(function() {
  events();
  bookOpen();
  navRoll();
  navOpen();
  anchorScroll();
});

$(window).load(function() {
  setTimeout(function(){
    $('body:not(.loaded)').addClass('loaded');
  }, 1000);
});