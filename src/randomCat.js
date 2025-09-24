export { catOnStartUp };

function catOnStartUp() {
  const img = document.querySelector(".displayImg");
  console.log(img);
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=G6eaRdpSfKNxkPxUaTfZqlQTunEOpd0y&s=cats",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}
