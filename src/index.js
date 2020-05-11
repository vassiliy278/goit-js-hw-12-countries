import './style.css'
import template from './templates/countries.hbs'
import debounce from 'lodash.debounce';

const input = document.querySelector('input');
const body = document.getElementById('empty');

input.addEventListener('input', debounce(searching, 500));

// function searching(e) {
    
//     fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
//         .then(a => {return a.json()})
//         .then(a => a.map(e => template(e)).join(''))
//         .then(e => {console.log(e); body.insertAdjacentHTML('beforeend', e)})
//         
// }

const baseUrl = 'https://restcountries.eu/rest/v2/name/';


function searching(e) {
    fetch(baseUrl + e.target.value)
        .then(result => {return result.json()})
        .then(result => console.log(result))    
    }
