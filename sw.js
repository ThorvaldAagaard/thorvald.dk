self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('thorvald').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/images/Thorvald.jpg',
                '/images/bullet.png',
                '/images/bg-tile.png',
                '/images/icons-192.png',
                '/images/icons-512.png',
            ]);
        })
    );
});