/* Imports */
import { renderAstroSign, renderBeanie } from './render-utils.js';
import { getAstroSign, getBeanie } from './fetch-utils.js';

const beanieList = document.getElementById('beanie-list');
const form = document.getElementById('search-form');
const beanieSelect = document.getElementById('beanie-select');

/* Get DOM Elements */
/* State */
let beanies = [];
let astroSign = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanies();

    const response = await getAstroSign();
    astroSign = response.data;

    displayBeanieOptions();
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
