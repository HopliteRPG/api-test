export { searchForGif };

const url =
  "https://api.giphy.com/v1/gifs/translate?api_key=G6eaRdpSfKNxkPxUaTfZqlQTunEOpd0y&s=";

function searchForGif() {
  const searchBar = document.querySelector(".searchbarInput");

  const searchBtn = document.querySelector(".searchButton");

  searchBar.addEventListener("input", (event) => {
    if (searchBar.value === "") {
      searchBar.setCustomValidity("Enter a word");
    }
  });

  searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const img = document.querySelector(".displayImg");

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
      })
      .catch(function (err) {
        console.error(err);
      });
  });
}
