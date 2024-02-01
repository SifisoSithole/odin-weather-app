import weatherAPI from './weather-api';
import createDailyWeatherContainer from './components/daily-details';
import DOMElements from './components/DOMElements';

import './styles/style.css';

/**
 * Convert a date in the format YYYY-MM-DD to the format day name / month 01.
 * @param {string} inputDate - The input date in the format YYYY-MM-DD.
 * @returns {string} - The formatted date string (day name / month 01).
 */
function formatDate(inputDate) {
    // Convert the input date string to a Date object
    const dateObject = new Date(inputDate);
  
    // Define options for formatting the date
    const options = {
      weekday: 'short', // Short day name (e.g., "Sun")
      month: 'short',   // Short month name (e.g., "Dec")
      day: '2-digit',   // Two-digit day of the month (01, 02, ..., 31)
    };
  
    // Format the date using the options
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
  
    return formattedDate;
}

(async () => {

    const response = await fetch('https://api.ipify.org?format=json', {mode: 'cors'});
    const ip = await response.json();
    const forecastData = await weatherAPI.currentWeather(ip.ip);
    const dailyDetails = document.querySelector('.daily-weather');

    console.log(forecastData);

    dailyDetails.appendChild(createDailyWeatherContainer());
    const domElements = new DOMElements();
    const dailyWeather = forecastData.forecast.forecastday[0];

    console.log(domElements.dailyTemp);

    domElements.dailyTemp.innerHTML = `${dailyWeather.day.avgtemp_c}&deg;C`;
    domElements.date.textContent = formatDate(dailyWeather.date);
    domElements.weatherIcon.src = dailyWeather.day.condition.icon;
    domElements.weatherIconTitle.textContent = dailyWeather.day.condition.text;
    
})();
