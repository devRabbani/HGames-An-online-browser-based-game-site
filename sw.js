importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "7f50bb7547a1491d1461237bc2890ed7"
  },
  {
    "url": "pages/category.html",
    "revision": "c52291d125490bd53eb5cb3ff589ecaf"
  },
  {
    "url": "pages/about.html",
    "revision": "34e64e0718b0b3bfe025d037da768000"
  },
  {
    "url": "pages/play.html",
    "revision": "0c7551d6ce4dc1bc02d4e4372cf4dc51"
  },
  {
    "url": "images/DualRing.svg",
    "revision": "fa01db818ace24d043a773bc9a45d835"
  },
  {
    "url": "images/hgames.svg",
    "revision": "d3491ee39ec08dd4a19cd1b74bd59a47"
  },
  {
    "url": "images/icon.svg",
    "revision": "b921974a86d4ab62af744db602d2e8c4"
  },
  {
    "url": "style/index.css",
    "revision": "9d621775b92646560eb5c5ddf04dde37"
  },
  {
    "url": "style/cool-background.png",
    "revision": "0fbfd760c286480cb41cd1e0816bb9ea"
  },
  {
    "url": "js/index.js",
    "revision": "9864b54696b37c5cf7e515f639f1fb39"
  },
  {
    "url": "js/category.js",
    "revision": "f6772fb0d62bc4926dde2e5dbdd1a3e2"
  }
]);
workbox.routing.registerRoute(new RegExp('\.(png|jpg|jpeg|ico)$'), new workbox.strategies.CacheFirst({
  cacheName: 'images-cache',
  plugins: [new workbox.expiration.ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 30 * 24 * 60 * 60,
  })]
}));
const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('myQueueName', {
  maxRetentionTime: 24 * 60
});
workbox.routing.registerRoute(new RegExp('/games.json(.*)'), new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'games-cache',
  networkTimeoutSeconds: 5,
  plugins: [new workbox.expiration.ExpirationPlugin({
      maxAgeSeconds: 3 * 24 * 60 * 60,
  }), new workbox.cacheableResponse.CacheableResponsePlugin({
      statuses: [0, 200],
      bgSyncPlugin
  }), ]
}));

workbox.routing.registerRoute(new RegExp('https://s.h5games.online/images/(.*)'), new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'image-cache',
  plugins: [new workbox.expiration.ExpirationPlugin({
      maxAgeSeconds: 3 * 24 * 60 * 60,
      maxEntries: 50,
  }), new workbox.cacheableResponse.CacheableResponsePlugin({
      statuses: [0, 200],
      bgSyncPlugin
  }), ]
}));                                  

workbox.routing.registerRoute(new RegExp('https://m.shtoss.com/.(.*)'), new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'play-cache',
  plugins: [new workbox.expiration.ExpirationPlugin({
      maxAgeSeconds: 3 * 24 * 60 * 60,
  }), new workbox.cacheableResponse.CacheableResponsePlugin({
      statuses: [0, 200],
      bgSyncPlugin
  }), ]
}));

workbox.routing.registerRoute(new RegExp('https://m.shtoss.com/.(.*)'), new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'play1-cache',
  plugins: [new workbox.expiration.ExpirationPlugin({
      maxAgeSeconds: 3 * 24 * 60 * 60,
  }), new workbox.cacheableResponse.CacheableResponsePlugin({
      statuses: [0, 200],
      bgSyncPlugin
  }), ]
}));

// /(.*)articles(.*)\.(?:png|gif|jpg)/

// /styles/.*\\.css