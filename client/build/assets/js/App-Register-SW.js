// First we check if the browser supportst service workers
if ("serviceWorker" in navigator) {
  // Then we register and point to where our service worker code lives...
  //we will put this file in the route directory where our index.html is
  navigator.serviceWorker
    .register("./Service-Worker.js", {scope: "./"})
    .then(function (registration) {
      console.log("Service Worker Registered");
    })
    .catch(function (err) {
      console.log("Service Worker Failed to Register", err);
    })
}