let form = document.querySelector("#search-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let input = document.querySelector(".search-input");
  let city = input.value;

  let cityElement = document.querySelector(".current-city");
  cityElement.innerHTML = city;
});
