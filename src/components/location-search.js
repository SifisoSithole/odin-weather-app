import weatherAPI from '../weather-api';
import mainFunction from './main-app';

/**
 * Creates a search container with auto-complete functionality.
 */
const createSearchContainer = () => {
    const searchContainer = document.createElement('div');
    const search = document.createElement('div');
    const input = document.createElement('input');
    const suggestionsContainer = document.createElement('div');

    // Add CSS classes for styling
    searchContainer.classList.add('search-container');
    search.classList.add('search');
    input.classList.add('search-input');
    suggestionsContainer.classList.add('suggestions-container');

    // Set placeholder text for the input field
    input.placeholder = 'Search for a location...';

    // Append input to the search container
    search.appendChild(input);

    // Append search to the search container
    searchContainer.appendChild(search);

    // Append suggestions container to the search container
    searchContainer.appendChild(suggestionsContainer);

    /**
     * Handles input changes and triggers auto-complete.
     * @param {Event} event - Input change event.
     */
    const handleInput = async (event) => {
        const query = event.target.value;

        // Clear previous suggestions
        suggestionsContainer.innerHTML = '';

        // Perform auto-complete only if the query is not empty
        if (query.trim() !== '' && query.trim().length > 2) {
            const suggestions =  await weatherAPI.search(query);

            // Display suggestions in the suggestions container
            suggestions.forEach((suggestion) => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = suggestion.name;
                suggestionItem.addEventListener('click', () => {
                    // Handle selection of a suggestion (e.g., trigger search or fill input)
                    suggestionsContainer.innerHTML = ''; // Clear suggestions after selection
                    mainFunction(suggestion.name);
                });
                suggestionsContainer.appendChild(suggestionItem);
            });
            console.log(suggestionsContainer, suggestions);
        }
    }

    
    // Event listener for input changes to trigger auto-complete
    input.addEventListener('input', handleInput);

    return searchContainer;
}

export default createSearchContainer;
