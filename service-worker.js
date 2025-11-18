const CACHE_NAME = 'ibjlv-escalas-2026-v1';
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  'logo-ibjlv.png',
  'icons/icon-192x192.png',
  'icons/icon-512x512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.url.startsWith('chrome-extension://')) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(response => caches.open(CACHE_NAME).then(cache => {cache.put(e.request, response.clone()); return response;}))));
});