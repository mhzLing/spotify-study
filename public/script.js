var access_token = '';
var refresh_token = '';

var genre = 'study';
var playlistUriArr = [];

var rand1 = 0;
var rand2 = 0;
var rand3 = 0;
var rand4 = 0;

$(document).ready(function() {
  $.ajax({url: '/getTokens'}).done(function (data) {
    access_token = data.access_token;
    refresh_token = data.refresh_token;
  });
});

var testing = function(){
  $('#playlistTitle').css('display', 'block');
  genre = $('#genre').val();
  $.ajax({
    url: 'https://api.spotify.com/v1/search?q='+ genre +'&type=playlist',
    headers: {
      'Authorization': 'Bearer ' + access_token
    },
  }).done(function (data) {
    for(var i = 0; i < data.playlists.items.length; i++)
    {
      playlistUriArr[i] = data.playlists.items[i].uri;
    }
    rand1 = Math.floor((Math.random() * 20));
    rand2 = Math.floor((Math.random() * 20));
    rand3 = Math.floor((Math.random() * 20));
    rand4 = Math.floor((Math.random() * 20));

    $("#playbtn1").attr("src", 'https://open.spotify.com/embed?uri=' + playlistUriArr[rand1]);
    $("#playbtn2").attr("src", 'https://open.spotify.com/embed?uri=' + playlistUriArr[rand2]);
    $("#playbtn3").attr("src", 'https://open.spotify.com/embed?uri=' + playlistUriArr[rand3]);
    $("#playbtn3").attr("src", 'https://open.spotify.com/embed?uri=' + playlistUriArr[rand4]);

  });

}
