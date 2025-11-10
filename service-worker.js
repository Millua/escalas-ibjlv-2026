const CACHE_NAME = 'ibjlv-escalas-v1.0.0';
const urlsToCache = [
  './',
  './index.html'
];

// Instalação
self.addEventListener('install', event => {
  console.log('🔧 Service Worker: Instalando...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ Instalado com sucesso');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ Erro na instalação:', error);
      })
  );
});

// Ativação
self.addEventListener('activate', event => {
  console.log('🔄 Service Worker: Ativando...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('🗑️ Removendo cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Ativado com sucesso');
        return self.clients.claim();
      })
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return
