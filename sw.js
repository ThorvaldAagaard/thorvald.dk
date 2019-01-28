self.addEventListener('install', function (event) {
  //console.log("install");
  try {
    //console.log('typeof System in install', typeof System);
  } catch (e) { }

  //console.log('caching');
  event.waitUntil(
    caches.open('thorvald').then(function (cache) {
      //console.log('caching - getting');
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/images/Thorvald.jpg',
        '/images/bullet.png',
        '/images/bg-tile.png',
        '/images/icons-192.png',
        '/images/icons-512.png',
      ]);
    }).catch(function (error) {
      console.log('error', error)
    })
  );
});
self.addEventListener('fetch', function (event) {
  //console.log('fetching ->', event.request);
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
