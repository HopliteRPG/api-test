export { randomGifFunc };

function randomGifFunc() {
  const displayImg = document.querySelector(".displayImg");
  const randomGifBtn = document.querySelector(".random-gif-btn");
  randomGifBtn.addEventListener("click", () => {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=iynhuQUGqRgxLYzfuv3bOxaTvkLzKHeY",
    )
      .then(function (response) {
        console.log(response.clone().json());
        return response.clone().json();
      })
      .then(function (response) {
        displayImg.src = response.data.images.original.url;
      });
  });
}
