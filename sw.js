// var staticCacheName = 'rr-static-v2';
//
// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open(staticCacheName).then(function(cache) {
//       return cache.addAll([
//         '/skeleton',
//         '/js/main.js',
//         '/js/dbhelper.js',
//         '/css/styles.css',
//         '/img/',
//       ]);
//     })
//   );
// });
//
// self.addEventListener('activate', function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.filter(function(cacheName) {
//           return cacheName.startsWith('rr-') &&
//                  cacheName != staticCacheName;
//         }).map(function(cacheName) {
//           return caches.delete(cacheName);
//         })
//       );
//     })
//   );
// });
//
// self.addEventListener('fetch', function(event) {
//   var requestUrl = new URL(event.request.url);
//
//   if (requestUrl.origin === location.origin) {
//     if (requestUrl.pathname === '/') {
//       event.respondWith(caches.match('/skeleton'));
//       return;
//     }
//   }
//
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || fetch(event.request);
//     })
//   );
// });
//
// self.addEventListener('message', function(event) {
//   if (event.data.action === 'skipWaiting') {
//     self.skipWaiting();
//   }
// });
