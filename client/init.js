// on startup run resizing event
Meteor.startup(function() {
  $(window).resize(function() {
    $('#map').css('height', $('#container').height());
    $('#tagline').hide;
  });
  $(window).resize(); // trigger resize event
  $("#map").height($('#container').height()).width($('#container').width());
  
});


