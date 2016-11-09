$(document).ready(function() {
  $("#search-form").submit(function(event) {
    event.preventDefault();

    var data = $(this).serialize();

    $.get('/search', data, function(results){
      $("#result-list").html('');
      var html = results.reduce(function(html, result) {
        return html + '<li>' + '<a href="'+ result.url + '">' + result.title + '<a></li>';}, '');
        $('#result-list').html(html);
      });
    });
  });
});
