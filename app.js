/* Imports */
import { renderAstroSign, renderBeanie } from './render-utils.js';
import { getAstroSign, getBeanie } from './fetch-utils.js';

const beanieList = document.getElementById('beanie-list');
const form = document.getElementById('search-form');
const beanieSelect = document.getElementById('beanie-select');

/* Get DOM Elements */
/* State */
let beanies = [];
let astroSigns = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanies();

    const response = await getAstroSign();
    astroSigns = response.data;

    displayBeaniesOptions();
});

/* Display Functions */
function displayBeanies() {
    beanieList.innerHTML = '';

    for (let beanie of beanies) {
        const beaniesEl = renderBeanie(beanies);
        beanieList.append(beaniesEl);
    }
}

function displayBeaniesOptions() {
    for (let astroSign of astroSigns) {
        const astroEl = renderAstroSign(astroSign);
        beanieSelect.append(astroEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
