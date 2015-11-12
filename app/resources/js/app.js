'use strict';

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

$(document).ready(function() {
  console.log('hsdfasfello');
  events();
});