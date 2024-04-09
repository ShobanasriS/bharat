async function getWeather() {
    try {
        const city = document.getElementById('cityInput').value;
        const apiKey = 'bad414c0ff0290b39338e58199451f7f'; // Replace with your OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        console.log("Fetching weather data from:", url);

        const response = await fetch(url);
        const data = await response.json();

        console.log("Received weather data:", data);

        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>${data.weather[0].main}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

