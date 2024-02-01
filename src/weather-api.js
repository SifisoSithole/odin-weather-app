/**
 * weatherAPI module provides functions to fetch weather data from a third-party API.
 * @module weatherAPI
 */
const weatherAPI = (() => {
    // Base URL for the weather API
    const baseURL = 'http://api.weatherapi.com/v1/';
  
    // API key for accessing the weather API
    const APIKEY = '2704e1eee78c4dcba32100526241501';
  
    /**
     * Fetches data from the specified URL using the Fetch API.
     * @param {string} url - The URL to fetch data from.
     * @returns {Promise<Object>} - A promise that resolves to the fetched JSON data.
     */
    const fetchData = async (url) => {
      try {
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    };
  
    /**
     * Retrieves the current weather forecast for the specified location.
     * @param {string} location - The location for which to fetch the weather forecast.
     * @returns {Promise<Object>} - A promise that resolves to the current weather data.
     */
    const currentWeather = async (location) => {
      try {
        // Construct the URL for the current weather API endpoint
        const url = `${baseURL}forecast.json?key=${APIKEY}&q=${location}&days=3`;
  
        // Fetch and return the current weather data
        return await fetchData(url);
      } catch (error) {
        console.error('Error fetching current weather:', error);
        throw error;
      }
    };
  
    // Expose the currentWeather function as the public API for this module
    return {
      currentWeather
    };
  })();
  
  // Export the weatherAPI module
  export default weatherAPI;
  