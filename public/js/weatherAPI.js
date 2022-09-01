const temp = document.querySelector('#temp')
const clouds = document.querySelector('#clouds')
const wind = document.querySelector('#wind')
const windDir = document.querySelector('#wind_dir')

function fetchWeatherData() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=b0381879e70b4838898233838223008&q=auto:ip`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      temp.textContent = `Temperature: ${data.current.temp_f}°`;
      clouds.textContent = data.current.condition.text;
      wind.textContent = `Wind Speed: ${data.current.wind_mph} Mph`
      windDir.textContent = `Wind Direction: ${data.current.wind_dir}`
    })
  }
  fetchWeatherData()

