/**
 * Creates a container for displaying hourly weather updates.
 *
 * @param {Array} hourlyUpdate - An array containing hourly weather update data.
 * @returns {HTMLElement} - The container element with hourly updates.
 */
const createHourlyUpdateContainer = (hourlyUpdate, format = 'C') => {
    /**
     * Convert a date in the format YYYY-MM-DD HH:MM to the time in the format HH:MM.
     * @param {string} inputDateTime - The input date and time in the format YYYY-MM-DD HH:MM.
     * @returns {string} - The formatted time string in the format HH:MM.
     */
    const formatTime = (inputDateTime) => {
        // Convert the input date and time string to a Date object
        const dateObject = new Date(inputDateTime);

        // Extract hours and minutes from the Date object
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();

        // Format the time as HH:MM
        const formattedTime = `${padZero(hours)}:${padZero(minutes)}`;

        return formattedTime;
    }

    /**
     * Pad a number with a leading zero if it is a single digit.
     * @param {number} num - The number to be padded.
     * @returns {string} - The padded number as a string.
     */
    const padZero = (num) => {
        return num < 10 ? `0${num}` : num;
    }

    // Create a container element to hold hourly updates
    const hourlyUpdateContainer = document.createElement('div');
    hourlyUpdateContainer.classList.add('hour-update-container');
    
    // Create a template element for each hourly update
    const hourUpdateTemplate = document.createElement('div');
    hourUpdateTemplate.classList.add('hour-update');

    const currentHour = `${padZero(new Date().getHours())}:00`;
    let currentHourIndex;

    // Find the index of the current hour
    for (let i = 0; i < hourlyUpdate.length; i++) {
        if (currentHour === formatTime(hourlyUpdate[i].time)) {
            currentHourIndex = i;
            break;
        }
    }

    // Find the relevant 
    const relevantHourUpdates = hourlyUpdate.slice(currentHourIndex - 5, currentHourIndex).concat(hourlyUpdate.slice(currentHourIndex, currentHourIndex + 5));
  
    // Iterate through the hourly updates data
    for (let i = 0; i < relevantHourUpdates.length; i++) {
      // Clone the template for each hourly update
      let hourElement = hourUpdateTemplate.cloneNode(true);
      // Create elements for displaying time, weather icon, and temperature
      let hour = document.createElement('p');
      let weatherIcon = document.createElement('img');
      let temperature = document.createElement('p');

      if (currentHour === formatTime(relevantHourUpdates[i].time)) {
        hourElement.classList.add('current-hour');
      }; 
  
      // Populate the elements with data from the hourly update
      hour.textContent = formatTime(relevantHourUpdates[i].time);
      weatherIcon.src = relevantHourUpdates[i].condition.icon;
      temperature.innerHTML = `${relevantHourUpdates[i].temp_c}&deg;${format}`;
  
      // Append the elements to the hourly update container
      hourElement.appendChild(hour);
      hourElement.appendChild(weatherIcon);
      hourElement.appendChild(temperature);
  
      hourlyUpdateContainer.appendChild(hourElement);
    }
  
    // Return the container with hourly updates
    return hourlyUpdateContainer;
}

export default createHourlyUpdateContainer;