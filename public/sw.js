// Service Worker para otimizações de performance
const CACHE_NAME = 'projeto-sem-misterio-v1';
const urlsToCache = [
  '/',
  '/images/imagem-sessao-sobre-ayumi.webp',
  '/images/imagem-beneficios.webp',
  '/images/imagem-sessao-2.webp',
  '/images/imagem-sessao-3.webp'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache se disponível
        if (response) {
          return response;
        }
        
        // Fallback para network
        return fetch(event.request);
      }
    )
  );
});

// Limpeza de caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
