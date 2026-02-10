function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  // Always display the canonical city name returned by the API,
  // regardless of how the user typed it.
  let cityElement = document.querySelector(".current-city");
  if (cityElement) {
    cityElement.innerHTML = response.data.city;
  }
}

function searchCity(city) {
  // makie API call and update interface

  let apiKey = "451396t0bace27668bfabe004aobc19a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(refreshWeather);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let input = document.querySelector(".search-input");
  let city = input.value;
  searchCity(city);
});
