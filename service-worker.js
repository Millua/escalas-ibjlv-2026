const CACHE_NAME = 'ibjlv-escalas-v1';
const BASE_PATH = '/escalas-ibjlv-2026/';
const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html'
];

// Instalação
self.addEventListener('install', event => {
  console.log('[SW] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.error('[SW] Erro:', err))
  );
});

// Ativação
self.addEventListener('activate', event => {
  console.log('[SW] Ativando...');
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removendo cache:', key);
            return caches.delete(key);
          }
        })
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200) {
              return response;
            }
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseClone));
            return response;
          });
      })
      .catch(() => {
        return new Response(
          '<html><body><h1>Offline</h1><p>Sem conexão</p></body></html>',
          { headers: { 'Content-Type': 'text/html' } }
        );
      })
  );
});
