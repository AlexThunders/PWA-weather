import { readResAloud } from './weather.js';
import { getCityFromClass, traverseChildrenToAddAttrubutes } from './helpers.js';
const allCities = Array.from(document.querySelectorAll('.city'));
const allIconSpots = Array.from(document.querySelectorAll('.icon-place'));
const results4Weather = Array.from(document.querySelectorAll('.result4weather'));
const icon = document.createElement('img');
const cityNames = [];
allCities.forEach(city => {
    let title = getCityFromClass(city);
    cityNames.push(title);
});
traverseChildrenToAddAttrubutes(allCities);
const fetchCanadaWeather = (city) => {
    let text2read;
    fetch(`https://weatherdbi.herokuapp.com/data/weather/${city}`)
        .then(response => {
        if (response.status === 200) {
            return response.json();
        }
        else {
            alert('no such city is found');
            results4Weather.forEach(res => {
                res.innerText = "";
            });
            text2read = `Sorry! Temperature in ${city} is not available right now`;
            readResAloud(text2read);
        }
    })
        .then(data => {
        console.log(data);
        if (data.status === "fail") {
            if (city === undefined) {
                text2read = `Not sure that I can find info about that city`;
                readResAloud(text2read);
            }
            else {
                text2read = `temperature is not available right now`;
                readResAloud(text2read);
            }
        }
        let celcius = `${Math.round(data === null || data === void 0 ? void 0 : data.currentConditions.temp.c)} C`;
        if (celcius === undefined)
            return;
        text2read = `Temperature in ${city} is ${parseFloat(celcius)} celcius`;
        readResAloud(text2read);
        results4Weather.forEach(res => {
            res.innerText = "";
            let cityName = res.dataset.city;
            if (cityName === city) {
                res.innerText = celcius;
            }
        });
        allIconSpots.forEach(iconSpot => {
            let cityName = iconSpot.dataset.city;
            if (cityName === city) {
                icon.classList.add('canada-icon');
                icon.setAttribute('src', data === null || data === void 0 ? void 0 : data.currentConditions.iconURL);
                iconSpot.appendChild(icon);
            }
        });
    })
        .catch(err => {
        console.error(err);
        text2read = `you should try one more time a bit later`;
        readResAloud(text2read);
    });
};
allCities.forEach(cityDiv => {
    cityDiv.addEventListener('click', (e) => {
        icon.remove();
        results4Weather.forEach(res => {
            res.innerText = "";
        });
        let cityDiv = e.target;
        let city = cityDiv.dataset.city;
        fetchCanadaWeather(city);
    });
});
document.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        let element = e.target;
        if (element.classList.contains('backbtn'))
            return;
        let cityTitle = getCityFromClass(element);
        const cityName = cityNames.filter(n => n.toLowerCase() === cityTitle)[0];
        fetchCanadaWeather(cityName);
    }
});
