const getUrl = (artist, title) => `http://ianertson.com:3500/${artist}/${title}`;


async function main() {
  const url = getUrl("avicii", "levels");

  const response = await fetch(url);
  const data = await response.json();


  const firstElement = data[0];
  const lyrics = firstElement.lyrics;


  document.getElementById("content").innerText = lyrics;

}

main();
