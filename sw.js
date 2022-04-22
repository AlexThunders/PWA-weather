const urlsToCache = [
    "/",
    "/index.html",
    "/styles/weather.css",
    "/js/weather.js",
    "/js/extra.js",
    "/js/multiLang.js",
    "/assets/icons/weatherIcon-96x96.svg",
    "/assets/gobackicon.png",
    "/assets/rain.gif",
    "/sw.js",
    "/fallback.html"
    ]

const staticCashName = "weather-pwa-assets" 
const dynamicCach = "weather-pwa-dynamic"

self.addEventListener("install", event => {
  // console.log("Service worker installed", event);
  event.waitUntil(
    caches.open(staticCashName)
    .then(cache => {
      cache.addAll(urlsToCache)
    })
    .catch(err => console.log("ERROR WITH CACH: ", err))
  )
});


self.addEventListener("activate", event => {
  // console.log("Service worker has been activated");
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
      .filter(key => key !== staticCashName && key !== dynamicCach)
      .map(key => caches.delete(key))
      )
    })
  )
});


self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request).then(cachedResponse => {
         return cachedResponse || fetch(event.request).then(fetchResponse => {
           return caches.open(dynamicCach).then(cache => {
             cache.put(event.request.url, fetchResponse.clone())
             return fetchResponse
           })
         })
    }).catch(() => {
      if(event.request.url.indexOf('.html') > -1) {
        return caches.match('/fallback.html')

       }
     })
  )
});
