import data from './data.js';
import { sortFlights } from './utils/sort.js';

//dom
const dom = {
    container: document.getElementById('container')
};

//component function
// title component
const createTitle = (flights) => {
    const flightKeys = Object.keys(flights[0]).filter((item) => item !== 'id');
    const titleDiv = document.createElement('div');
    titleDiv.className = 'flight-title';

    flightKeys.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${((item = item.includes('D') ? item.replace('D', ' D') : item), item.toUpperCase())}`;
        titleDiv.appendChild(itemDiv);
    });
    return titleDiv;
};

// flight information component
const createFlightInfo = (flight) => {
    const flightDiv = document.createElement('div');
    flightDiv.className = 'flight-info';

    Object.entries(flight).forEach(([key, value]) => {
        if (key === 'id') return;
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = value;
        flightDiv.appendChild(itemDiv);
    });
    return flightDiv;
};

//handler
const handleLoad = () => {
    const sortedFlights = sortFlights(data.flights);
    container.append(createTitle(sortedFlights));
    sortedFlights.forEach((flight) => {
        container.append(createFlightInfo(flight));
    });
};

//event
window.addEventListener('load', handleLoad);
