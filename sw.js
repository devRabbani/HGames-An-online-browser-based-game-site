importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
workbox.precaching.precacheAndRoute([{
    "url": "index.html",
    "revision": "14f8a782bf4141f7b54323d1cc4c499f"
  },
  {
    "url": "pages/category.html",
    "revision": "0a88b2274283601be911a5be873e9ea5"
  },
  {
    "url": "pages/about.html",
    "revision": "a024a9953770c5b372913cf5addaa168"
  },
  {
    "url": "pages/play.html",
    "revision": "f7767723b81758c083906237b5b64ba5"
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
    "revision": "be8b59f764279128ce628e787cd6b196"
  },
  {
    "url": "style/cool-background.png",
    "revision": "3884bcff8fbc06d758f12350e50072ba"
  },
  {
    "url": "js/index.js",
    "revision": "853098a5ca0af697abc62fad2d69fc16"
  },
  {
    "url": "js/category.js",
    "revision": "51f10fff56fec0f13ff0d803194ebdc5"
  }
]);

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


workbox.routing.registerRoute(new RegExp('/pages/category.html(.*)'), new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'category-cache',
  plugins: [new workbox.expiration.ExpirationPlugin({
    maxAgeSeconds: 2 * 24 * 60 * 60,
  }), new workbox.cacheableResponse.CacheableResponsePlugin({
    statuses: [0, 200],
    bgSyncPlugin
  }), ]
}));