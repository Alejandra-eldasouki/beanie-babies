/* Imports */
import { getAstroSigns, getBeanies } from './fetch-utils.js';
import { renderAstroSign, renderBeanie } from './render-utils.js';

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

    const response = await getAstroSigns();
    astroSigns = response.data;

    displayBeaniesOptions();
});

async function findBeanies(astroSign) {
    const response = await getBeanies(astroSign);
    console.log('response', response);
    beanies = response.data;
    displayBeanies();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    findBeanies(formData.get('beanieSign'));
});

/* Display Functions */
function displayBeanies() {
    beanieList.innerHTML = '';

    for (let beanie of beanies) {
        const beanieEl = renderBeanie(beanie);
        beanieList.append(beanieEl);
    }
}

function displayBeaniesOptions() {
    for (let astroSign of astroSigns) {
        const astroEl = renderAstroSign(astroSign);
        beanieSelect.append(astroEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
