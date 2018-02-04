$(document).ready(function() {
  $.ajax({url: '/getTokens'}).done(function (data) {
    console.log(data);
  });
});
