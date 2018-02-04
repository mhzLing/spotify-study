var access_token = '';
var refresh_token = '';

$(document).ready(function() {
  $.ajax({url: '/getTokens'}).done(function (data) {
    access_token = data.access_token;
    refresh_token = data.refresh_token;
  });
});

var testing = function(){
  var genre = 'study';
  var playlist = '';
  var userId = '';
  $.ajax({
    url: 'https://api.spotify.com/v1/search?q='+ genre +'&type=playlist',
    headers: {
      'Authorization': 'Bearer ' + access_token
    },
  }).done(function (data) {

    for(var i = 0; i < data.playlists.items.length; i++)
    {
      playlist = data.playlists.items[i].id;
      userId = data.playlists.items[i].owner.id;

      $.ajax({
        url: 'https://api.spotify.com/v1/users/'+userId+'/playlists/'+playlist+'/tracks',
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
      }).done(function (data1) {
        var rand = Math.floor((Math.random() * data1.items.length));
        console.log(data1.items[rand].track.uri);
        /*11
        for(var j = 0; j < data1.items.length; j++)
        {
          console.log(data1.items[j].track.uri);
        }
        */
      });
    }
  });

}
