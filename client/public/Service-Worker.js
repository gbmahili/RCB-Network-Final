// Let's create an array of files we want to cache so that the user does not have to get them from the server if they are offline
var cacheName = "v2";
var cacheFiles = [
  // My files to be catched...these are all static files
  "./",
  "./index.html",
  "./assets/css/apps_css.css",
  "./assets/js/App-Register-SW.js",
  "./assets/js/App-Scripts.js",
  "./assets/images/38054870-profile-pictures.jpg",
  "./assets/images/networking_with_friends.jpeg",
  "http://res.cloudinary.com/gbmahili/image/upload/v1525741275/qgvdmukshelbzpws2tko.jpg",
  // ThirdParty Links To Catch
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.googleapis.com/css?family=Gamja+Flower",
  "https://use.fontawesome.com/releases/v5.0.6/js/all.js",
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css",
  "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"
];

// Install Service Worker
self.addEventListener("install", function(e) {
  console.log("[ServiceWorker] has been installed");
  // Let's cache our files now:
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("[ServiceWorker] Caching cacheFiles");
      return cache.addAll(cacheFiles);
    })
  );
});

// Activate Service Worker
self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] has been activated");
  e.waitUntil(
    // We need to delete any cache that does not correspond...we loop through what is in our caches first
    caches.keys().then(function (cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName){
        if(thisCacheName !== cacheName) {
          console.log("[ServiceWorker] removing Cached Files from ", thisCacheName);
          return caches.delete(thisCacheName)
        }
      }))
      
    })
  )
})

// // Fetch Service Worker: Mahili
// self.addEventListener("fetch", function (e) {
//   console.log("[ServiceWorker] is fetching");
//   // We need to respond to our fetch event
//   e.respondWith(
//     // First, we check if the requested URL already exist...as in the website we are trying to caches...is it already in our caches?
//     caches.match(e.request).then(function(response) {
//       // If it is in our caches, then we just return what is in our caches...so the user does not have to pay money to go to the server again, just give them what is already in his/her caches
//       if(response) {
//         console.log("[ServiceWorker] Found In Cache", e.request.url);
//         // If it was found in our caches, just send it back to the user:
//         return response;
//       }

//       // Let's clone it first
//       var requestClone = e.request.clone();
//       // If it is not yet in our caches, then we request for it and also clone it so that the user does not have to request for it the next time they visit...so this happens if there was a change in the website, and something changed...
//       fetch(requestClone)
//         .then(function(response){
//           if(!response) {
//             console.log("[ServiceWorker] No response from fetch");
//             return response;
//           };

//           var responseClone = response.clone();
//           caches.open(cacheName).then(function(cache){
//             console.log("[ServiceWorker] New Data Cached", e.request.url);
//             cache.put(e.request, responseClone);
//             return response;
//           });
//         })
//         .catch(function(err) {
//           console.log("[ServiceWorker] Error Fetching and Catching", err);
//         });
//     })
//   );
// });

// Service Worker: YouTube - https://www.youtube.com/watch?v=BfL3pprhnms
// self.addEventListener('fetch', function(e) {
// 	// console.log('[ServiceWorker] Fetch', e.request.url);

// 	// e.respondWidth Responds to the fetch event
// 	e.respondWith(

// 		// Check in cache for the request being made
// 		caches.match(e.request)


// 			.then(function(response) {

// 				// If the request is in the cache
// 				if ( response ) {
// 					// console.log("[ServiceWorker] Found in Cache", e.request.url, response);
// 					// Return the cached version
// 					return response;
// 				}

// 				// If the request is NOT in the cache, fetch and cache

// 				var requestClone = e.request.clone();
// 				fetch(requestClone)
// 					.then(function(response) {

// 						if ( !response ) {
// 							// console.log("[ServiceWorker] No response from fetch ")
// 							return response;
// 						}

// 						var responseClone = response.clone();

// 						//  Open the cache
// 						caches.open(cacheName).then(function(cache) {

// 							// Put the fetched response in the cache
// 							cache.put(e.request, responseClone);
// 							// console.log('[ServiceWorker] New Data Cached', e.request.url);

// 							// Return the response
// 							return response;
			
// 				        }); // end caches.open

// 					})
// 					.catch(function(err) {
// 						console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
// 					});


// 			}) // end caches.match(e.request)
// 	); // end e.respondWith
// });

// Service Worker: From Google Docs - https://developers.google.com/web/fundamentals/primers/service-workers/
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log("[ServiceWorker] Found in Cache", e.request.url, response);
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = e.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              console.log("[ServiceWorker] No response from fetch ")
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(cacheName)
              .then(function(cache) {
                console.log('[ServiceWorker] New Data Cached', e.request.url);
                cache.put(e.request, responseToCache);
              })
              .catch(function(err) {
 						    console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
 					  });

            return response;
          }
        );
      })
    );
});