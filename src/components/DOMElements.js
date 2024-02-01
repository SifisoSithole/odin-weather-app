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
    }
  }
  
  // Export the DOMElements class as the public API
  export default DOMElements;
  