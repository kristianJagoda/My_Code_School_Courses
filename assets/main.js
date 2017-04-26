$(function() {

  var $url = 'https://www.codeschool.com/users/kristianJagoda.json';
  var $type = 'jsonp';

  function addCourses(courses) {
    var badges = $('#badges');

    $.each(courses, function(i, val) {

      var course = $('<div>').addClass('course').appendTo(badges);
      var tag = $('<h3>').text(val.title).appendTo(course);
      var img = $('<img>').attr('src', val.badge).appendTo(course);
      var a = $('<a>').attr({
        'href': val.url,
        'target': '_blank'
      }).addClass('btn btn-primary').text('See Course').appendTo(course);
    });

  }

  $.ajax({
    url: $url,
    dataType: $type,
    success: function(response) {
      
      addCourses(response.courses.completed);
    }
  });





});
