export { searchForGif };
const searchBar = document.querySelector(".search-bar");

const searchBtn = document.querySelector(".search-btn");

const url =
  "https://api.giphy.com/v1/gifs/translate?api_key=G6eaRdpSfKNxkPxUaTfZqlQTunEOpd0y&s=";

function searchForGif() {
  searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const img = document.querySelector("img");

    let searchableUrl = `${url}${searchBar.value}`;

    console.log(searchBar.value);
    console.log(searchableUrl);

    fetch(searchableUrl)
      .then(function (response) {
        return response.clone().json();
      })
      .then(function (response) {
        img.src = response.data.images.original.url;
        console.log(response);
      });
  });
}
