document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherinfo = document.getElementById('weather-info');
    const cityNameDisplay = document.getElementById('city-name');
    const temperatureDisplay = document.getElementById('temperature');
    const descriptionDisplay = document.getElementById('description'); 
    const errorMessage = document.getElementById('error-message');
    const apiKey = 'b7829f8618bbc1455577bd4e14cc2d49';
    getWeatherBtn.addEventListener('click',  async () => {
        const city = cityInput.value.trim();
        if (city === '') {
            alert('Please enter a city name.');
            return;
        }
      //it may throw error
      //server/database is always in another continent
        try{
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            displayError('An error occurred while fetching the weather data.');

        }



    });
   
        async function fetchWeatherData(city) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
            const response = await fetch(url);
            console.log(typeof response);
            console.log( "response", response);

            if(!response.ok){
                alert("City not found! Please enter a valid city.");
                cityInput.value = '';
                throw new Error('Network response was not ok');
            }
            const data  = await response.json();
            return data;



    }
    function displayWeatherData(data) {
        console.log("weatherData", data);
        const {name,main, weather} = data;
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature: ${main.temp} °C`;
        descriptionDisplay.textContent = `Description: ${weather[0].description}`;
        weatherinfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');

       
    }
    function displayError(message) {
        weatherinfo.style.display = 'none';
        errorMessage.classList.remove('hidden');
        
        
    }


});