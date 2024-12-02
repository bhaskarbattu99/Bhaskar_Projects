// Replace with your OpenWeatherMap API key.
const apiKey = "a0f75694caf21e192b09ed8c5438f382"; 

// Get the search button element by its ID.
const searchBtn = document.getElementById("search-btn"); 

// Get the city input field element by its ID.
const cityInput = document.getElementById("city-input"); 

// Get the city name element by its ID to display the city's name.
const cityNameElem = document.getElementById("city-name"); 

// Get the country name element by its ID to display the country's name.
const countryNameElem = document.getElementById("country-name"); 

// Get the country flag element by its ID to display the country's flag.
const countryFlagElem = document.getElementById("country-flag"); 

// Get the temperature element by its ID to display the temperature.
const temperatureElem = document.getElementById("temperature"); 

// Get the humidity element by its ID to display the humidity.
const humidityElem = document.getElementById("humidity"); 

// Get the wind speed element by its ID to display the wind speed.
const windSpeedElem = document.getElementById("wind-speed"); 

// Get the precipitation element by its ID to display the weather description.
const precipitationElem = document.getElementById("precipitation"); 

// Get the date and time element by its ID to display the current date and time.
const dateTimeElem = document.getElementById("date-time"); 

// Add a click event listener to the search button.
searchBtn.addEventListener("click", () => {
  // Get the city name entered by the user and trim any extra spaces.
  const city = cityInput.value.trim(); 
  // If the input field is empty, alert the user to enter a city name and exit the function.
  if (!city) return alert("Please enter a city name."); 

  // Call the fetchWeatherData function with the city name.
  fetchWeatherData(city); 
});

// Function to fetch weather data for the given city using then/catch.
function fetchWeatherData(city) {
  // Fetch data from the OpenWeatherMap API with the city name, API key, and units in metric.
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      // If the response is not okay, throw an error indicating the city was not found.
      if (!response.ok) throw new Error("City not found."); 
      return response.json(); // Parse the JSON data from the response.
    })
    
    .then(data => {
      // Destructuring assignment to extract specific properties from the data object.
      const {
        name, // Extracts the 'name' property, which is the city name.
        sys: { country }, // Extracts the 'country' property from the 'sys' object, which is the country code.
        main: { temp, humidity }, // Extracts the 'temp' and 'humidity' properties from the 'main' object, which are the temperature and humidity.
        wind: { speed }, // Extracts the 'speed' property from the 'wind' object, which is the wind speed.
        weather // Extracts the 'weather' array.
      } = data; // 'data' is the response object from the OpenWeatherMap API.
       console.log(data);
      
      // Update the UI elements with the extracted weather data.
      cityNameElem.textContent = name; // Display the city name.
      countryNameElem.textContent = country; // Display the country code.
      countryFlagElem.src = `https://flagsapi.com/${country}/flat/64.png`; // Display the country flag.
      temperatureElem.textContent = temp.toFixed(1); // Display the temperature, rounded to one decimal place.
      humidityElem.textContent = humidity; // Display the humidity.
      windSpeedElem.textContent = speed.toFixed(1); // Display the wind speed, rounded to one decimal place.
      precipitationElem.textContent = weather[0].description; // Display the weather description.
      dateTimeElem.textContent = new Date().toLocaleString(); // Display the current date and time.

    })
    .catch(error => {
      // Alert the user if there is an error (e.g., city not found).
      alert(error.message); 
    });
  }
