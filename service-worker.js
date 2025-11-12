const CACHE_NAME = 'ibjlv-escalas-v1';
const BASE_PATH = '/escalas-ibjlv-2026/';
const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'logo-ibjlv.png',      // ✅ Corrigido!
  BASE_PATH + 'logo-menora.png',     // ✅ Adicionado (usado nas notificações)
  BASE_PATH + 'icons/icon-192x192.png',
  BASE_PATH + 'icons/icon-512x512.png'
];

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

self.addEventListener('fetch', event => {
  // ⚠️ Evita erro com extensões (como o seu erro de 'chrome-extension')
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
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
          '<html><body style="background:#1a1a2e;color:white;text-align:center;padding:40px;"><h1>Offline</h1><p>Você está sem conexão.<br>As escalas recentes estão disponíveis mesmo offline!</p></body></html>',
          { headers: { 'Content-Type': 'text/html' } }
        );
      })
  );
});
