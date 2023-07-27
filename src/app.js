function displayTemperature(response) {
  console.log(response.data.city);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
}

let apiKey = "f1ef93f40de3d662400b2dt0aa8a2o91";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
