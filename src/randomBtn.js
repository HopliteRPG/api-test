export { randomGifFunc };
const img = document.querySelector("img");
const randomGifBtn = document.querySelector(".random-gif-btn");

function randomGifFunc() {
  randomGifBtn.addEventListener("click", () => {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=iynhuQUGqRgxLYzfuv3bOxaTvkLzKHeY",
    )
      .then(function (response) {
        console.log(response.clone().json());
        return response.clone().json();
      })
      .then(function (response) {
        img.src = response.data.images.original.url;
      });
  });
}
