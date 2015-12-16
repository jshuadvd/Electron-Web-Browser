// Require jQuery
var $ = require('jquery');

$('#visit').click(function() {
  var url =$('#url-input').val();
  $('.tab.active').text(url);
  $('.view.active').attr('src', url);
});

$('#new-tab').click(function() {
  var url =$('#url-input').val();

  $('.tab, .view').removeClass('active');

  $('#tab-bar').append('<li class="tab active">' + url + '</li>');
  $('#views').append('<webview class="view active" src="' + url +'"></webview>');
});

// Still have to get this to work
$('body').on('click','.tab', function() {
  $('.tab, .view').removeClass('active');

  var index = $(this).index();

  $('.tab').eq(index).addClass('active');
  $('.view').eq(index).addClass('active');
});
