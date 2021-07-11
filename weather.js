const API_KEY = "130998d0fa43d7d46e95e5b8ee8458d0";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child")
      const name = document.querySelector("#weather span:last-child")
      name.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
  }
function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
