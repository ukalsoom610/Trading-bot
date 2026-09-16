// Minimal service worker. Two jobs only:
//  1. Satisfy the browser's "installable" requirement so phones offer
//     Add to Home Screen / Install.
//  2. Cache the small app-shell files for fast reloads.
// It deliberately does NOT cache or intercept exchange API calls — those
// are a different origin and must always hit the network for live prices.
const CACHE_NAME = 'confluence-shell-v1';
const SHELL_FILES = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL_FILES))
      .catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // exchange calls pass straight through
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
