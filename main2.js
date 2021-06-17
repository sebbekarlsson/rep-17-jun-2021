const getUrl = (artist, title) => `http://ianertson.com:3500/${artist}/${title}`;


fetch(getUrl("avicii", "levels")).then(function(response){
  response.json().then(function(data){
    const firstElement = data[0];
    const lyrics = firstElement.lyrics;
    
    document.getElementById("content").innerText = lyrics;
  });
});
