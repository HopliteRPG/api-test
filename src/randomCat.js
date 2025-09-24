export { catOnStartUp };
const img = document.querySelector("img");

function catOnStartUp() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=iynhuQUGqRgxLYzfuv3bOxaTvkLzKHeY&s=cats",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}
