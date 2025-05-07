const CACHE_NAME = 'gallery-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'styles.css',
  'script.js',
  'https://drive.google.com/file/d/1NqkZlrdd1HJH-5R1y5jFCg9D_UybkMtD/view?usp=sharing',
  'https://drive.google.com/file/d/1uaKQ9aQM4OimEOPQ_ipWCCZBYKfgsZ-I/view?usp=sharing',
  'https://drive.google.com/file/d/1eWvRNr8fZppko_C-G4-U5mWgQ8g87f5r/view?usp=sharing',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});