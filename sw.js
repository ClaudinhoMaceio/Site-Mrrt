// Service Worker para PWA - MRRT
const CACHE_NAME = 'mrrt-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './img/logo-mrrt-icon.png',
  './img/logo-mrrt-text.png',
  './assets/hero-home-aegea.jpg',
  './assets/engenheiro-obra-nossos-servicos.jpg',
  './img/servico-operacional.jpg',
  './img/servico-comercial.jpg',
  './img/servico-comunicacao.jpg',
  './img/servico-social.jpg',
  './img/servico-apps-web.jpg',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Chewy&family=Questrial&family=Roboto:wght@300;400;500;700;900&display=swap'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - retorna resposta do cache
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          (response) => {
            // Verifica se recebeu uma resposta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Clona a resposta
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});

