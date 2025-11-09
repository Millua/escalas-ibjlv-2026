// ============================================
// SERVICE WORKER - IBJLV ESCALAS 2026
// Versão: 1.0.0
// ============================================

const CACHE_NAME = 'ibjlv-escalas-v1.0.0';
const urlsToCache = [
  './',
  './index.html'
];

// ===== INSTALAÇÃO =====
self.addEventListener('install', event => {
  console.log('🔧 Service Worker: Instalando...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ Service Worker: Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ Service Worker: Instalado com sucesso');
        return self.skipWaiting(); // Ativa imediatamente
      })
      .catch(error => {
        console.error('❌ Service Worker: Erro na instalação:', error);
      })
  );
});

// ===== ATIVAÇÃO =====
self.addEventListener('activate', event => {
  console.log('🔄 Service Worker: Ativando...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // Remove caches antigos
            if (cacheName !== CACHE_NAME) {
              console.log('🗑️ Service Worker: Removendo cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker: Ativado com sucesso');
        return self.clients.claim(); // Assume controle imediatamente
      })
  );
});

// ===== FETCH (Interceptar requisições) =====
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Se encontrou no cache, retorna
        if (cachedResponse) {
          console.log('📦 Cache HIT:', event.request.url);
          return cachedResponse;
        }

        // Se não encontrou, busca na rede
        console.log('🌐 Cache MISS, buscando na rede:', event.request.url);
        
        return fetch(event.request)
          .then(response => {
            // Verifica se a resposta é válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona a resposta para guardar no cache
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
                console.log('💾 Adicionado ao cache:', event.request.url);
              });

            return response;
          })
          .catch(error => {
            console.error('❌ Erro na requisição:', error);
            
            // Retorna página offline customizada (opcional)
            return new Response(
              '<html><body style="font-family: Arial; text-align: center; padding: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;"><h1>📵 Sem Conexão</h1><p>Você está offline. Tente novamente quando estiver conectado.</p><p style="margin-top: 30px;">🏛️ IBJLV - Escalas 2026</p></body></html>',
              {
                headers: { 'Content-Type': 'text/html' }
              }
            );
          });
      })
  );
});

// ===== MENSAGENS =====
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});