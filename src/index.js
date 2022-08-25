const apiUrl = "http://localhost:3000/beers";

// get beer details
function getBearDetails(id) {
  fetch(`${apiUrl}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("beer-name").innerText = data.name;
      document.getElementById("beer-image").src = data.image_url;
      document.getElementById("beer-description").innerHTML = data.description;
      document.getElementById("review-list").innerHTML = data.reviews
        .map(
          (review) => `<li>
            ${review}
            </li>`
        )
        .join("");
    });
}

// get all beers
function getBeers() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("beer-list").innerHTML = data
        .map(
          (beer) => `<li onClick="getBearDetails(${beer.id})">${beer.name}</li>`
        )
        .join("");
    });
}
document.addEventListener("DOMContentLoaded", () => {
  getBeers();
  getBearDetails(1);

  // add a new review on submission
  document.getElementById("review-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("review-list").innerHTML += `<li>
    ${document.getElementById("review").value}
    </li>`;
  });

  // update description
  document
    .getElementById("description-form")
    .addEventListener("submit", (evt) => {
      evt.preventDefault();

      form.reset();
    });
});
