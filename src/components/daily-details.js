/**
 * Creates a container for displaying daily weather information with temperature, date, and weather icon.
 * @function
 * @returns {HTMLDivElement} - A div element representing the daily weather container.
 */
const createDailyWeatherContainer = () => {
    // Create HTML elements for daily weather display
    const dailyWeatherContainer = document.createElement('div');
    const dailyDetailsContainer = document.createElement('div');
    const dailyTemperature = document.createElement('p');
    const weatherIconContainer = document.createElement('div');
    const dateElement = document.createElement('p');
    const iconTitle = document.createElement('p');
    const weatherIconElement = document.createElement('img');
  
    // Add CSS classes to style the elements
    dailyWeatherContainer.classList.add('daily-weather');
    dailyDetailsContainer.classList.add('daily-details');
    dailyTemperature.classList.add('daily-temp');
    dateElement.classList.add('date');
    weatherIconElement.classList.add('weather-icon');
    weatherIconContainer.classList.add('weather-icon-container');
    iconTitle.classList.add('icon-title');
  
    // Append temperature and date elements to the details container
    dailyDetailsContainer.appendChild(dailyTemperature);
    dailyDetailsContainer.appendChild(dateElement);
  
    // Append details container and weather icon to the main daily weather container
    dailyWeatherContainer.appendChild(dailyDetailsContainer);
    weatherIconContainer.appendChild(weatherIconElement);
    weatherIconContainer.appendChild(iconTitle);
    dailyWeatherContainer.appendChild(weatherIconContainer);
  
    return dailyWeatherContainer;
  };
  
  // Export the createDailyWeatherContainer function as the public API
  export default createDailyWeatherContainer;
  