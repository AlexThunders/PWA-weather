import "../styles/index.css"

"use strict";
const inputCity = document.getElementById('inputCity') as HTMLInputElement;
const citySpan = document.getElementById('city') as HTMLSpanElement;
const submit = document.getElementById('submit') as HTMLButtonElement;
const result4Weather = document.getElementById('result4weather') as HTMLSpanElement;
const tempPar = document.getElementById('tempPar') as HTMLParagraphElement;
const humidityPar = document.getElementById('humidity') as HTMLParagraphElement;
const fieldset = document.getElementById('fieldset') as HTMLFieldSetElement
const weatherIconPlace = document.querySelector('.weather-icon-place') as HTMLDivElement
let icon = document.createElement('img');
let city: string;

console.log('test1')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("../../sw.js")
    .then(reg => console.log("sw is registered", reg))
    .catch(err => console.log("sw is not registered", err))
}


const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

inputCity?.addEventListener('focus', () => {
  inputCity.value = '';
  icon.remove();
  tempPar.style.visibility = "hidden"
  humidityPar.style.visibility = 'hidden';
});
inputCity?.addEventListener('keydown', event => {
  inputCity.value;
  if(event.keyCode === 13) {
    if(inputCity.value === '') {
      alert('please, enter city');
    }
    fetchResult(inputCity.value)
  }
  let char = String.fromCharCode(event.keyCode);
  if(/[0-9]/.test(char)) {
    event.preventDefault();
  }
});

export const fetchResult = (city: string) => {
  let text2read;
  let celcius;
  fetch(`https://weatherdbi.herokuapp.com/data/weather/${city}`)
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      alert('no such city is found')
      result4Weather.innerText = "";
      text2read =`temperature in ${city} is not available right now`;
      readResAloud(text2read);
    }
  })
  .then(data => {
    let text2read;
    if(data.status === "fail") {
      text2read =`temperature in ${city} is not available right now`;
      readResAloud(text2read);
    }
    citySpan.innerText = ` ${city}`;
    celcius = ` ${Math.round(data?.currentConditions.temp.c)} C`;
    tempPar.style.visibility = "visible"
    result4Weather.innerText = celcius;
    humidityPar.style.visibility = 'visible';
    let humidity = ` ${data?.currentConditions.humidity}`;
    humidityPar.innerText = `Humidity in ${capitalizeFirstLetter(city)} at ${data?.currentConditions.dayhour} is ${humidity}`;
    icon.setAttribute('src', data?.currentConditions.iconURL);
    icon.setAttribute('alt', data?.currentConditions.comment)
    icon.classList.add('weather-icon');
    // fieldset.appendChild(icon)
    weatherIconPlace.appendChild(icon)
    weatherIconPlace.style.display = "block"
    text2read =`Temperature in ${city} is ${parseFloat(celcius)} celcius`;
    readResAloud(text2read);
  })
  .catch(err => {
    console.error(err)
  });
}

submit?.addEventListener('click', (e) => {
  city = inputCity.value;
  if(city === '') {
    alert('please, enter city');
  }
  fetchResult(city)
})

$(document).ready(() => {
  $('header h1').click((e) => {
    $('#fieldset').fadeToggle(1000);
    $('.intro').fadeToggle(1000);
    $('#inputCity').focus();
  })
  $('#openWeather').click(() => {
    $('#fieldset').fadeToggle(1000);
    $('.intro').fadeToggle(1000);
  })
})


//VOICE RECOGNITION
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const microphone = document.querySelector('.microphone');
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function () {}
recognition.onresult = function(event: any) {
  const current =  event.resultIndex;
  const transcript = event.results[current][0].transcript;
  inputCity.value = transcript;
  city = transcript;
  fetchResult(transcript);
}

microphone?.addEventListener('click', () => {
  tempPar.style.visibility = "hidden"
  recognition.start();
})

export function readResAloud(message: string) {
  const speech =  new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}