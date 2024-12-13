"use strict";
// Get the button element with ID 'filterButton'
const searchResult = document.getElementById("filterButton");
// Create an array of Person objects called "people"
const people = [
    { name: "Nivas", age: 22, city: "Nizamabad" },
    { name: "Sampath", age: 22, city: "Nizamabad" },
    { name: "Vishal", age: 24, city: "Karimnagar" },
    { name: "Saicharan", age: 24, city: "Karimnagar" },
    { name: "Adarsh", age: 24, city: "Karimnagar" },
    { name: "Shilesh", age: 24, city: "Jagityal" },
    { name: "Pawan", age: 25, city: "Mettupally" },
    { name: "Srihari", age: 24, city: "Mettupally" }
];
// Function to filter Person objects by city name
function filterByCity(persons, cityName) {
    // Filter the persons array to include only those with the matching city name
    return persons.filter(person => person.city.toLowerCase() === cityName.toLowerCase());
}
// Example filter usage to log people from "Nizamabad"
const filter = filterByCity(people, "nizamabad");
console.log(filter);
// Function to handle filtering and displaying the results
function handleFilter() {
    // Get the city name entered in the input field
    const cityName = document.getElementById('cityName').value;
    // Filter the people array by the entered city name
    const filteredPeople = filterByCity(people, cityName);
    // Get the element to display results
    const resultsElement = document.getElementById('results');
    // Clear previous results
    resultsElement.innerHTML = '';
    // Check if there are any people found
    if (filteredPeople.length > 0) {
        // Loop through each person in the filtered list
        filteredPeople.forEach(person => {
            // Create a new list item element
            const listItem = document.createElement('li');
            // Set the text content to the person's details
            listItem.textContent = ` Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
            // Append the list item to the results element
            resultsElement.appendChild(listItem);
            listItem.style.color = 'black';
        });
    }
    else {
        // If no people were found, display a message:
        resultsElement.textContent = 'No people found in this city.';
        resultsElement.style.color = 'white';
    }
}
// Add an event listener to the button for the 'click' event to call handleFilter
searchResult === null || searchResult === void 0 ? void 0 : searchResult.addEventListener('click', handleFilter);
// Add an event listener to the input field for the 'keyup' event to check for the Enter key
document.getElementById('cityName').addEventListener('keyup', (event) => {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
        handleFilter();
    }
});
