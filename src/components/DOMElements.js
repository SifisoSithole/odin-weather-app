/**
 * DOMElements class provides a convenient way to access and manage commonly used DOM elements.
 * @class
 */
class DOMElements {
    /**
     * Creates an instance of DOMElements with references to specific DOM elements.
     * @constructor
     */
    constructor() {
        /**
         * Represents the DOM element for displaying daily temperature.
         * @type {HTMLElement}
         */
        this.dailyTemp = document.querySelector('.daily-temp');
    
        /**
         * Represents the DOM element for displaying the date.
         * @type {HTMLElement}
         */
        this.date = document.querySelector('.date');
    
        /**
         * Represents the DOM element for displaying the weather icon.
         * @type {HTMLElement}
         */
        this.weatherIcon = document.querySelector('.weather-icon');

        /**
         * Represents the DOM element for displaying the weather icon title.
         * @type {HTMLElement}
         */
        this.weatherIconTitle = document.querySelector('.icon-title');

        /**
         * Represents the DOM element for the left side of the weather display.
         * @type {HTMLElement}
         */
        this.leftSide = document.querySelector('.left-side');

        /**
         * Represents the DOM element for the right side of the weather display.
         * @type {HTMLElement}
         */
        this.rightSide = document.querySelector('.right-side');

        /**
         * Represents the DOM element for detailed daily weather updates.
         * @type {HTMLElement}
         */
        this.detailedDailyUpdates = document.querySelector('.detailed-daily-update');

        /**
         * Represents the DOM element for the container of weather display options (e.g., Today, Week).
         * @type {HTMLElement}
         */
        this.optionsContainer = document.querySelector('.options-container');

        /**
         * Represents the DOM element for displaying the current time.
         * @type {HTMLElement}
         */
        this.currentTime = document.querySelector('.current-time-container');

    }
  }
  
  // Export the DOMElements class as the public API
  export default DOMElements;
  