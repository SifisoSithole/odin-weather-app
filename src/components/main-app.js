import weatherAPI from '../weather-api';
import createDailyWeatherContainer from './daily-details';
import DOMElements from './DOMElements';
import createHourlyUpdateContainer from './hourly-update';
import createSearchContainer from './location-search';
import { createDetailedWeatherContainer, createRightSideContainer } from './detailed-details';


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

/**
 * Removes all child nodes from a given HTML node.
 *
 * @param {Node} parentNode - The HTML node from which child nodes will be removed.
 * @throws {Error} Throws an error if the provided node is not an HTMLElement.
 */
const removeAllChildren = (parentNode) => {
    // Check if the provided node is an HTMLElement
    if (!(parentNode instanceof HTMLElement)) {
      throw new Error('Invalid node. Must be an HTMLElement.');
    }

    // Remove all child nodes
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }
};

const mainFunction = async (q = 'ip') => {


    let forecastData;
    if (q === 'ip') {
      const response = await fetch('https://api.ipify.org?format=json', {mode: 'cors'});
      const ip = await response.json();
      forecastData = await weatherAPI.currentWeather(ip.ip);
    } else {
      forecastData = await weatherAPI.currentWeather(q);
    }
    const dailyDetails = document.querySelector('.weather-details');
    const detailedDetails = document.querySelector('.detailed-details');
    removeAllChildren(dailyDetails);
    removeAllChildren(detailedDetails);
    const dailyWeather = forecastData.forecast.forecastday[0];

    dailyDetails.appendChild(createDailyWeatherContainer());
    detailedDetails.appendChild(createDetailedWeatherContainer(forecastData.location, dailyWeather.day));
    detailedDetails.appendChild(createSearchContainer());
    detailedDetails.appendChild(createRightSideContainer(q, forecastData));
    const domElements = new DOMElements();
    console.log(forecastData);

    domElements.dailyTemp.innerHTML = `${forecastData.current.temp_c}&deg;C`;
    domElements.date.textContent = formatDate(dailyWeather.date);
    domElements.weatherIcon.src = forecastData.current.condition.icon;
    domElements.weatherIconTitle.textContent = forecastData.current.condition.text;

    dailyDetails.appendChild(createHourlyUpdateContainer(dailyWeather.hour));
    
};

export default mainFunction;