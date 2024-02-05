import mainFunction from "./main-app";

/**
 * Creates a detailed weather container with location information and daily weather details.
 * @param {Object} locationObject - Object containing location information (name and country).
 * @param {Object} dailyObject - Object containing daily weather details.
 * @param {string} format - Temperature format, default is 'C' for Celsius.
 */
const createDetailedWeatherContainer = (locationObject, dailyObject, format = 'C') => {
    // Create elements for the container
    const leftSide = document.createElement('div');
    const detailedDailyUpdate = document.createElement('div');
    const titles = document.createElement('div');
    const values = document.createElement('div');
    const location = document.createElement('p');
    const humidity = document.createElement('p');
    const chanceRain = document.createElement('p');
    const averageTemperature = document.createElement('p');
    const windSpeed = document.createElement('p');

    // Create elements for displaying values
    const humidityValue = document.createElement('p');
    const chanceRainValue = document.createElement('p');
    const averageTemperatureValue = document.createElement('p');
    const windSpeedValue = document.createElement('p');

    // Add CSS class to titles and values for styling
    titles.classList.add('detailed-text');
    values.classList.add('detailed-text');

    // Set text content for location and titles
    location.textContent = `${locationObject.name}, ${locationObject.country}`;
    location.classList.add('location');
    humidity.textContent = 'Humidity';
    chanceRain.textContent = 'Chance of rain';
    averageTemperature.textContent = 'Average temperature';
    windSpeed.textContent = 'Wind speed';

    // Set text content for values based on dailyObject and temperature format
    humidityValue.textContent = `${dailyObject.avghumidity}%`;
    chanceRainValue.textContent = `${dailyObject.daily_chance_of_rain}%`;
    averageTemperatureValue.innerHTML = `${dailyObject[format === 'C' ? 'avgtemp_c' : 'avgtemp_f']}&deg;${format}`;
    windSpeedValue.textContent = `${dailyObject.maxwind_kph} kph`;

    // Append title elements to titles container
    titles.appendChild(humidity);
    titles.appendChild(chanceRain);
    titles.appendChild(averageTemperature);
    titles.appendChild(windSpeed);

    // Append value elements to values container
    values.appendChild(humidityValue);
    values.appendChild(chanceRainValue);
    values.appendChild(averageTemperatureValue);
    values.appendChild(windSpeedValue);

    // Add CSS class to detailedDailyUpdate for styling
    detailedDailyUpdate.classList.add('detailed-daily-update');

    // Append location, titles, and values containers to detailedDailyUpdate
    detailedDailyUpdate.appendChild(location);
    detailedDailyUpdate.appendChild(titles);
    detailedDailyUpdate.appendChild(values);

    // Add CSS class to leftSide for styling and append detailedDailyUpdate to it
    leftSide.classList.add('left-side');
    leftSide.appendChild(detailedDailyUpdate);

    return leftSide;
}

/**
 * Gets the current time in HH:MM:SS AM/PM format.
 * @returns {string} - Current time.
 */
const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    return `${hours}:${minutes}:${seconds} ${ampm}`;
}

/**
 * Creates the right side container with options and current time.
 */
const createRightSideContainer = (q, forecastData) => {
    // Create elements for the right side container
    const rightSide = document.createElement('div');
    const optionsContainer = document.createElement('div');
    const currentTimeContainer = document.createElement('div');
    const todayOption = document.createElement('p');
    const weekOption = document.createElement('p');
    const currentTime = document.createElement('p');

    // Add CSS class to rightSide for styling
    rightSide.classList.add('right-side');

    // Add CSS class to optionsContainer for styling
    optionsContainer.classList.add('options-container');

    // Set text content for options
    todayOption.textContent = 'Today';
    todayOption.classList.add('active');
    weekOption.textContent = 'Days';
    weekOption.classList.add('not-active');

    todayOption.addEventListener('click', () => {
        if (!todayOption.classList.contains('active')) {
            mainFunction(q);
            todayOption.classList.remove('non-active');
            todayOption.classList.add('active');
            weekOption.classList.remove('active');
            weekOption.classList.add('non-active');
        }
    })

    // Add CSS class to currentTimeContainer for styling
    currentTimeContainer.classList.add('current-time-container');

    // Set text content for current time
    currentTime.textContent = getCurrentTime(); // Initial time

    // Append options to optionsContainer
    optionsContainer.appendChild(todayOption);
    optionsContainer.appendChild(weekOption);

    // Append current time to currentTimeContainer
    currentTimeContainer.appendChild(currentTime);

    // Append optionsContainer and currentTimeContainer to rightSide
    rightSide.appendChild(optionsContainer);
    rightSide.appendChild(currentTimeContainer);

    // Update current time every second
    setInterval(() => {
        currentTime.textContent = getCurrentTime();
    }, 1000);

    return rightSide;
}


export {
    createDetailedWeatherContainer,
    createRightSideContainer
}


