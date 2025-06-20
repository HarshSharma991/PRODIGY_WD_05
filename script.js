function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherBox = document.getElementById("weatherBox");

  if (!city) {
    alert("Please enter a city name.");
    weatherBox.classList.add("hidden");
    return;
  }

  // Arrays of random realistic options
  const descriptions = ["clear sky", "few clouds", "scattered clouds", "broken clouds", "light rain", "thunderstorm"];
  const icons = ["01d", "02d", "03d", "04d", "10d", "11d"];

  // Random value generator
  function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const fakeData = {
    name: city,
    country: "IN",
    icon: randomFromArray(icons),
    description: randomFromArray(descriptions),
    temp: (Math.random() * 15 + 20).toFixed(1),       // 20.0 to 35.0 °C
    humidity: Math.floor(Math.random() * 50 + 30),     // 30% to 80%
    wind: (Math.random() * 4 + 1).toFixed(1)           // 1 to 5 m/s
  };

  document.getElementById("location").textContent = `${fakeData.name}, ${fakeData.country}`;
  document.getElementById("icon").src = `https://openweathermap.org/img/wn/${fakeData.icon}@2x.png`;
  document.getElementById("desc").textContent = `🌥️ ${fakeData.description}`;
  document.getElementById("temp").textContent = `🌡️ Temp: ${fakeData.temp} °C`;
  document.getElementById("humidity").textContent = `💧 Humidity: ${fakeData.humidity}%`;
  document.getElementById("wind").textContent = `💨 Wind: ${fakeData.wind} m/s`;

  weatherBox.classList.remove("hidden");
}
