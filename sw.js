const cacheName = 'nasser-v1';
const assets = ['./', './index.html', './manifest.json'];

// حفظ ملفات البرنامج
self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

// تشغيل البرنامج من الذاكرة لو مفيش نت
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
