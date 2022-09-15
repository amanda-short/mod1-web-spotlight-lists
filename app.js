// import functions and grab DOM elements
import { trucks } from './trucks-data.js';
import { renderTrucks } from './render-trucks.js';

const truckList = document.getElementById('truck-list');

function displayTrucks() {
    truckList.innerHTML = '';

    for (let trucks of trucks) {
        const trucksEl = renderTrucks(trucks);
        truckList.append(trucksEl);
    }
}    
displayTrucks();

import { dogs } from './dogs-data.js';
import { renderDogs } from './render-dogs.js';

const dogsList = document.getElementById('dogs-list');

function displayDogs() {
    dogsList.innerHTML = '';

    for (let dog of dogs ) {
        const dogEl = renderDogs(dogs);
        dogsList.append(dogEl);
        
    }
}

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
