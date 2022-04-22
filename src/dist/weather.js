"use strict";
const inputCity = document.getElementById('inputCity');
const citySpan = document.getElementById('city');
const submit = document.getElementById('submit');
const result4Weather = document.getElementById('result4weather');
const tempPar = document.getElementById('tempPar');
const humidityPar = document.getElementById('humidity');
const fieldset = document.getElementById('fieldset');
let icon = document.createElement('img');
let city;
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
inputCity === null || inputCity === void 0 ? void 0 : inputCity.addEventListener('focus', () => {
    inputCity.value = '';
    icon.remove();
    tempPar.style.visibility = "hidden";
    humidityPar.style.visibility = 'hidden';
});
inputCity === null || inputCity === void 0 ? void 0 : inputCity.addEventListener('keydown', event => {
    inputCity.value;
    if (event.keyCode === 13) {
        if (inputCity.value === '') {
            alert('please, enter city');
        }
        fetchResult(inputCity.value);
    }
    let char = String.fromCharCode(event.keyCode);
    if (/[0-9]/.test(char)) {
        event.preventDefault();
    }
});
export const fetchResult = (city) => {
    let text2read;
    let celcius;
    fetch(`https://weatherdbi.herokuapp.com/data/weather/${city}`)
        .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            alert('no such city is found');
            result4Weather.innerText = "";
            text2read = `temperature in ${city} is not available right now`;
            readResAloud(text2read);
        }
    })
        .then(data => {
        let text2read;
        if (data.status === "fail") {
            text2read = `temperature in ${city} is not available right now`;
            readResAloud(text2read);
        }
        citySpan.innerText = ` ${city}`;
        celcius = ` ${Math.round(data === null || data === void 0 ? void 0 : data.currentConditions.temp.c)} C`;
        tempPar.style.visibility = "visible";
        result4Weather.innerText = celcius;
        humidityPar.style.visibility = 'visible';
        let humidity = ` ${data === null || data === void 0 ? void 0 : data.currentConditions.humidity}`;
        humidityPar.innerText = `Humidity in ${capitalizeFirstLetter(city)} at ${data === null || data === void 0 ? void 0 : data.currentConditions.dayhour} is ${humidity}`;
        icon.setAttribute('src', "https://ssl.gstatic.com/onebox/weather/64/cloudy.png");
        icon.setAttribute('alt', data === null || data === void 0 ? void 0 : data.currentConditions.comment);
        icon.classList.add('icon');
        fieldset.appendChild(icon);
        text2read = `Temperature in ${city} is ${parseFloat(celcius)} celcius`;
        readResAloud(text2read);
    })
        .catch(err => {
        console.error(err);
    });
};
submit === null || submit === void 0 ? void 0 : submit.addEventListener('click', (e) => {
    city = inputCity.value;
    if (city === '') {
        alert('please, enter city');
    }
    fetchResult(city);
});
$(document).ready(() => {
    $('header h1').click((e) => {
        $('#fieldset').fadeToggle(1000);
        $('.intro').fadeToggle(1000);
        $('#inputCity').focus();
    });
    $('#openWeather').click(() => {
        $('#fieldset').fadeToggle(1000);
        $('.intro').fadeToggle(1000);
    });
});
const microphone = document.querySelector('.microphone');
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function () { };
recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    inputCity.value = transcript;
    city = transcript;
    fetchResult(transcript);
};
microphone === null || microphone === void 0 ? void 0 : microphone.addEventListener('click', () => {
    tempPar.style.visibility = "hidden";
    recognition.start();
});
export function readResAloud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
