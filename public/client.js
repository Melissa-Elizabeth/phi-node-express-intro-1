$(document).ready(function(){
  console.log('jquery was correctly sourced!');
  getAllSongs();
  function getAllSongs() {
    $.ajax({             // I'm hazy on what $.ajax is actually doing
      type: 'GET',
      url: '/songs',
      success: function(response) {
        console.log('response', response);
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  }

  $('#addSongButton').on('click', function(){
    var newSongTitle = $('#title').val();
    var newSongArtist = $('#artist').val();
    var newSongObject = {
      title: newSongTitle,
      artist: newSongArtist
    };
    console.log(newSongObject);
    $.ajax({
      type: 'POST',
      url: '/newSong',
      data: newSongObject, // This data line is mandatory, yeah?
      success: function(response) {
        console.log('response', response);
        getAllSongs();
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  });

});
