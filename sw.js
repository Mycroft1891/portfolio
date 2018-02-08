var staticCacheName = 'portfolio-v3';
var allCaches = [staticCacheName];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        'css/custom.css',
        'img/jumbo-sm.jpg',
        'img/jumbo-md.jpg',
        'img/jumbo-lg.jpg',
        'img/profile.jpg',
        'img/profile.webp',
        'img/icon-aws.svg',
        'img/icon-babel.svg',
        'img/icon-codepen.svg',
        'img/icon-css.svg',
        'img/icon-firebase.svg',
        'img/icon-git.svg',
        'img/icon-github.svg',
        'img/icon-heroku.svg',
        'img/icon-html.svg',
        'img/icon-jquery.svg',
        'img/icon-js.svg',
        'img/icon-linux.svg',
        'img/icon-nodejs.svg',
        'img/icon-rails.svg',
        'img/icon-rss.svg',
        'img/icon-ruby.svg',
        'img/icon-stackoverflow.svg',
        'img/icon-swift.svg',
        'img/icon-twitter.svg',
        'img/icon-webpack.svg',
        'img/projects/bitcoin.png',
        'img/projects/blog.png',
        'img/projects/earthquake.png',
        'img/projects/christian.png',
        'img/projects/japanese.png',
        'img/projects/nasa.png',
        'img/projects/bitcoin.webp',
        'img/projects/blog.webp',
        'img/projects/earthquake.webp',
        'img/projects/christian.webp',
        'img/projects/japanese.webp',
        'img/projects/nasa.webp',
      ]);
    })
  );
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('portfolio-')  &&
                 !allCaches.includes(cacheName);
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
