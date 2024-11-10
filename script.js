function displayTemp(response) {
  let temperatureElement = document.querySelector("h1.main-temp");
  let temperature = Math.round(response.data.temperature.current);
  let mainCity = document.querySelector("#city");

  mainCity.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function searchCity(city) {
  let apiKey = "746babd709ba91e8d80a9e431f00t6oa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemp);
}

function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", changeCity);

searchCity("Uli");
