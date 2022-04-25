import "../styles/index.css"
import {readResAloud} from './index'
import { getCityFromClass, traverseChildrenToAddAttrubutes } from './helpers';

const allCities = Array.from(document.querySelectorAll('.city')) as HTMLDivElement[];
const allIconSpots = Array.from(document.querySelectorAll('.icon-place')) as HTMLDivElement[];
const results4Weather = Array.from(document.querySelectorAll('.result4weather')) as HTMLSpanElement[];
const icon = document.createElement('img');
const cityNames:string[] = []

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("../../sw.js")
    .then(reg => console.log("sw is registered", reg))
    .catch(err => console.log("sw is not registered", err))
}


allCities.forEach(city => {
  let title = getCityFromClass(city)
  cityNames.push(title)
})


console.log('test22')
traverseChildrenToAddAttrubutes(allCities)

const fetchCanadaWeather = (city: string) => {
  let text2read;
  fetch(`https://weatherdbi.herokuapp.com/data/weather/${city}`)
  .then(response => {
    if(response.status === 200) {
      return response.json()
    } else {
      alert('no such city is found')
      results4Weather.forEach(res => {
        res.innerText = "";
      })
      text2read =`Sorry! Temperature in ${city} is not available right now`;
      readResAloud(text2read);
    }
  })
  .then(data => {
    console.log(data)
    if(data.status === "fail") {
      if(city === undefined) {
        text2read =`Not sure that I can find info about that city`;
        readResAloud(text2read);
      } else {
        text2read =`temperature is not available right now`;
        readResAloud(text2read);
      }
    }
    //say results aloud
    let celcius = `${Math.round(data?.currentConditions.temp.c)} C`;
    if(celcius === undefined) return
    text2read =`Temperature in ${city} is ${parseFloat(celcius)} celcius`;
    readResAloud(text2read);
    //show results on screen
    results4Weather.forEach(res => {
      res.innerText = "";
      let cityName = res.dataset.city!
      if(cityName === city) {
        res.innerText = celcius;
      }
    })
    //show icon
      allIconSpots.forEach(iconSpot => {
      
      let cityName = iconSpot.dataset.city!
      if(cityName === city) {
        
        icon.classList.add('canada-icon');
        icon.setAttribute('src', data?.currentConditions.iconURL);
        iconSpot.appendChild(icon)
        iconSpot.style.display = "block"
      }
    })
  })
  .catch(err => {
    console.error(err)
    text2read =`you should try one more time a bit later`;
    readResAloud(text2read);
  });
}

allCities.forEach(cityDiv => {
  cityDiv.addEventListener('click', (e) => {
    //clear previous results when click new city
    allIconSpots.forEach(iconSpot => {
      iconSpot.style.display = "none"
    })
    icon.remove()
    results4Weather.forEach(res => {
      res.innerText = "";
    })
    let cityDiv = e.target as HTMLElement
    let city = cityDiv.dataset.city!
    fetchCanadaWeather(city)
  })
})

document.addEventListener('keypress', e => {
  if(e.keyCode === 13) {
    allIconSpots.forEach(iconSpot => {
      iconSpot.style.display = "none"
    })
    let element = e.target as HTMLElement
    if(element.classList.contains('backbtn')) {
      history.go(-1)
      return
    }
    let cityTitle = getCityFromClass(element)
    const cityName = cityNames.filter(n => n.toLowerCase() === cityTitle)[0]
    fetchCanadaWeather(cityName)
  }
})


