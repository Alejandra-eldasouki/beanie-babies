/* Imports */
import { getAstroSigns, getBeanies, getBeaniesByName } from './fetch-utils.js';
import { renderAstroSign, renderBeanie } from './render-utils.js';

const beanieList = document.getElementById('beanie-list');
const form = document.getElementById('search-form');
const beanieSelect = document.getElementById('beanie-select');
const beanieNameSelect = document.getElementById('beanie-name-select');
const form2 = document.getElementById('search-name-form');

/* Get DOM Elements */
/* State */
let beanies = [];
let astroSigns = [];
let titles = [];

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
async function findTitles(title) {
    const response = await getBeaniesByName(title);
    console.log(`response`, response);
    titles = response.data;
    displayBeaniesTitle();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    findBeanies(formData.get('beanieSign'));
});

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchForm = new FormData(form2);
    findTitles(searchForm.get('beanie-name'));
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

function displayBeaniesTitle() {
    beanieList.textContent = '';
    for (let title of titles) {
        const titleEl = renderBeanie(title);
        beanieList.append(titleEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
