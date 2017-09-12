var playlist = {JohnMayer: "In the Blood"};


function updatePlaylist(obj, artist, song){
  obj[artist]=song
  return obj

}

function removeFromPlaylist(obj, artist){

  var temp = Object.assign({},obj);
  temp.Mastery('SONGY')
  return obj
  //delete temp.artist
  //obj = temp
  //return obj
}
