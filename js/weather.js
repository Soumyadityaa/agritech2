// Add your JavaScript code here

// Example: Display real-time weather conditions and forecasts
const weatherInfo = document.getElementById('weather-info');

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
  const apiKey = '06340f22374e6a4cbabfde3b32564415';
  const location = 'Durgapur,IN'; // Replace with the desired location
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    const temperature = data.main.temp + '°C';
    const humidity = data.main.humidity + '%';
    const condition = data.weather[0].description;
    
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    
    const nextDayForecast = forecastData.list[8]; // Forecast for next day
    const nextDayHighTemp = nextDayForecast.main.temp_max + '°C';
    
    weatherInfo.innerHTML = `
       <h2>Location: ${location}</h2>
      <h3>Current Weather</h3>
      <p>Temperature: ${temperature}</p>
      <p>Humidity: ${humidity}</p>
      <p>Condition: ${condition}</p>
      <h3>Forecast</h3>
      <p>Tomorrow: High of ${nextDayHighTemp}</p>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Fetch real weather data when the page loads
fetchWeatherData();
