import message from './message'
import arrow from './arrow'
import './style.css'
import './a.css'
import foodItems from './menu.json'
import templateItem from './templates/meal-feed-item.hbs'

// const markup = templateItem(foodItem[1])
const firstElement = document.querySelector('.js-menu');

function buildMealFeed (foodItems) {
    const markup = foodItems.map(foodItem => templateItem(foodItem)).join('');
    firstElement.insertAdjacentHTML("beforeend", markup)
}
buildMealFeed(foodItems)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const body = document.querySelector('body')
const themeSwitch = document.querySelector('.js-switch-input');

if (localStorage.getItem('Theme') === null) {
    localStorage.setItem('Theme', Theme.LIGHT)
}

themeSwitch.addEventListener('change', changeTheme);

function changeTheme(e) {
    if(e.srcElement.checked) {
        localStorage.setItem('Theme', Theme.DARK);
        body.classList.add('dark-theme')
    } else (localStorage.setItem('Theme', Theme.LIGHT))
    
    if(!e.srcElement.checked) {
        body.classList.remove('dark-theme')
    }
}
if (localStorage.getItem('Theme') === Theme.DARK) {
    themeSwitch.checked = true;
    body.classList.add('dark-theme')
}
if (localStorage.getItem('Theme') === Theme.LIGHT) {
    themeSwitch.checked = false;
    body.classList.remove('dark-theme')
}
console.log(themeSwitch.checked)