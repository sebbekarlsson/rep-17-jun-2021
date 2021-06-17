const getUrl = (artist, title) => `http://ianertson.com:3500/${artist}/${title}`;


function createDiv(lyrics) {
  const div = document.createElement("textarea");

  div.innerText = lyrics;

  return div;
}



fetch(getUrl("avicii", "levels")).then(function(response){
  response.json().then(function(data){
    const firstElement = data[0];
    const lyrics = firstElement.lyrics;
    

    const divWithLyrics = createDiv(lyrics);

    const content = document.getElementById("content");

    content.appendChild(divWithLyrics);
  });
});
