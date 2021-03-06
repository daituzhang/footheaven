'use strict';

var scroll = {
  'cs' : 0,
  'csb' : $(window).height()
};

function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
    return 11;

  else
    return 0; //It is not IE
}

function linkOpen(){
  $('.open-trigger').click(function (e) {
    e.preventDefault();
    $('#example:not(.open)').addClass('open');
    $('body:not(.lock)').addClass('lock');
  });
    
  $('.close-trigger').click(function (e) {
    e.preventDefault();
    $('#example.open').removeClass('open');

    setTimeout(function(){
      $('body.lock').removeClass('lock');
    }, 2000);
  });
}

function events() {
  var events = $('.events-row');
  var total = events.length;
  var cur = 0;

  $('.arrow-right').click(function (e){
    e.preventDefault();
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
      if (cur >= total - 1) {
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

function initMap() {
  geocoder = new google.maps.Geocoder();
  var gmapCanvas = document.getElementById("gmap_canvas");
    var geocoder;
    var map;
    var mapTitle = gmapCanvas.getAttribute("data-title");
    var mapAddress = gmapCanvas.getAttribute("data-address");
    var mapContent = gmapCanvas.getAttribute("data-content");
    var div = document.createElement("div");
    div.innerHTML = mapContent;
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var myOptions = {
    zoom: 14,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
  if (geocoder) {
    geocoder.geocode({
      'address': mapAddress
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

          var infowindow = new google.maps.InfoWindow({
            content: '<b>'+mapTitle+'</b><br>'+mapContent,
            size: new google.maps.Size(180, 50)
          });

          var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            title: mapAddress
          });
          infowindow.open(map, marker);
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
          });

        } else {
          alert("No results found");
        }
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
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
          $currentSection = $(this);
        }

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
  $('#site-nav').find('a').click(function (e) {
    $('body').removeClass('nav-open lock');
  })
}

function ieFix(){
  var ie = GetIEVersion();
  if (ie > 0) {
    $('html').addClass('ie-'+ie);
  } 
}

function formSubmit(){
  $('#connect-submit').click(function (e) {
    var top = $('.formbuilder-notification').offset().top - $('#site-header').height() - 10;
    $(window).scrollTop(top);
  });
}

$(document).ready(function() {
  ieFix();
  events();
  linkOpen();
  navRoll();
  navOpen();
  anchorScroll();
  formSubmit();
  // if($('#gmap_canvas').length ) {
  //    google.maps.event.addDomListener(window, 'load', initMap); 
  // }
});

$(window).load(function() {
  setTimeout(function(){
    $('body:not(.loaded)').addClass('loaded');
  }, 1000);
});