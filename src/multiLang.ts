document.addEventListener('DOMContentLoaded', () => {
  const allDataElements = Array.from(document.querySelectorAll('[data]')) as HTMLElement[];
  const allLangOptions = Array.from(document.querySelectorAll('option')) as HTMLOptionElement[];
  const select = document.querySelector('.langSelect')as HTMLSelectElement;
  
  type ILanguages = {
    [key in keyof any]: any
  }

  let languages: ILanguages = {
    en: {
      wTitle: 'Weather',
      wH1: 'WEATHER',
      wIntro: 'Weather application uses weather API. You can type city both in English and Russian. Type a city in the input field and click Search button.',
      openW: 'OPEN',
      wSpan1: 'Enter city:',
      wTempPar: 'Temperature in ',
      wCity: ' is ',
      humid: 'Humidity ',
      weatherSubmit: 'Submit',
      inpCity: function() {
        let inputCity = document.getElementById('inputCity');
        if(inputCity !== undefined && inputCity !== null) {
          inputCity.setAttribute('placeholder','City')
        }
      }
    },

    ru: {
      wTitle: 'Погода',
      wH1: 'ПОГОДА',
      wIntro: 'Приложение Погода использует Weather API. Вы можете напечатать город и на русском, и на английском. Введите город и нажмите поиск.',
      openW: 'ОТКРЫТЬ',
      wSpan1: 'Введите город:',
      wTempPar: 'Температура в городе ',
      wCity: '',
      humid: 'Влажность в городе',
      weatherSubmit: 'Поиск',
      inpCity: function() {
        let inputCity = document.getElementById('inputCity');
        if(inputCity !== undefined && inputCity !== null) {
          inputCity.setAttribute('placeholder','Город')
        }
      }
    }
  }
  
  function searchLang(choosenLang: string) {
    //if choosen language coincides with one of the languages in Object languages:
    if(languages[choosenLang]) {
      allDataElements.forEach(element => {
        for(let x in languages[choosenLang]) {
          if(element.getAttribute('data') === x) {
            //the same attribute changes iinerText in accordance with object
            element.innerText = languages[choosenLang][x]
            //change placeholder
            if(languages[choosenLang].inpCity !== undefined) {
              languages[choosenLang].inpCity()
            }
          }
        }
      })
    }
  }

  document.addEventListener('keypress', e => {
  if(e.keyCode === 13) {
    let element = e.target as HTMLElement

    if(element.classList.contains('backbtn')) {
      history.go(-1)
      return
    }

    if(element.innerText === "WEATHER" || 
      element.innerText === "OPEN" || 
      element.innerText === "ПОГОДА" || 
      element.innerText === "ОТКРЫТЬ") {
      $('#fieldset').fadeToggle(1000);
      $('.intro').fadeToggle(1000);
      $('#inputCity').focus();
    }
    if(element.innerText === "en" || element.innerText === "ru") {
      allLangOptions.forEach(option => {
        if(option.selected === true) {
        let lang = option.value
        searchLang(lang)
        }
      })
      }
    }
  })
  
  select.addEventListener('change', () => {
    allLangOptions.forEach(option => {
      if(option.selected === true) {
        let lang = option.value
        searchLang(lang)
      }
    })
  })

})