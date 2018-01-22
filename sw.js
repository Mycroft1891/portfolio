var staticCacheName = 'portfolio-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        'css/custom.css',
        'img/jumbo-sm.jpg',
        'img/jumbo-md.jpg',
        'img/jumbo-lg.jpg',
        'img/profile.jpg',
        'img/projects/bitcoin.png',
        'img/projects/blog.png',
        'img/projects/chat.png',
        'img/projects/christian.png',
        'img/projects/japanese.png',
        'img/projects/nasa.png'
      ]);
    })
  );
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('portfolio-')
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
