'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ca5f9d2dee07fb50a6ed44468e8e0412",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/akrep8.png": "de6fd20a606ca9c8e9ef484b485f2c63",
"assets/images/akrep_buyuk8.png": "3b45ed16a9bec3761018f6d4894c2267",
"assets/images/aslan5.png": "dcd82a769655b05f69f47c2408f14d52",
"assets/images/aslan_buyuk5.png": "50e3d47144e07f89448e78edcede590a",
"assets/images/balik12.png": "4fa6719303a04de6d37eb238407b6247",
"assets/images/balik_buyuk12.png": "85d0507f826e18d748f572af9b6cc0de",
"assets/images/basak6.png": "475073999d906239a71723e778be5ece",
"assets/images/basak_buyuk6.png": "e11098ffcac54ea9129f7d870b4a3430",
"assets/images/boga2.png": "d1fbf0ed41eb7222ecf1edad07880876",
"assets/images/boga_buyuk2.png": "699f800bc4f4036d9146cee6287c9e5b",
"assets/images/ikizler3.png": "f3d1aaa48decd9d2a99fb74aa1a6462a",
"assets/images/ikizler_buyuk3.png": "0ee79482d99d3b580a3f687e40b2c45a",
"assets/images/koc1.png": "28603f98b563d5b20db617095b4f779e",
"assets/images/koc_buyuk1.png": "4bfc7939c9038abceb1ea327ede96cb8",
"assets/images/kova11.png": "afe567b5fe6fad673e51f4bb390e8da3",
"assets/images/kova_buyuk11.png": "32310db1dd8c9837c100a69b6bbba984",
"assets/images/oglak10.png": "e8aa97eeed72ae414ae2321c9adb3562",
"assets/images/oglak_buyuk10.png": "8a51866868d12b81e404c0be30ee224d",
"assets/images/terazi7.png": "8eeb4a083cfa9bce5f313e14250b386a",
"assets/images/terazi_buyuk7.png": "9f146ecc8608ba605651a1dc81524269",
"assets/images/yay9.png": "abd4c1119c37b0a5008b16b66b7c5c0d",
"assets/images/yay_buyuk9.png": "f8ae9669d04b2dd89975e9123365f0ce",
"assets/images/yengec4.png": "5853a4d87b8cf11b6cfb0f89a1c726db",
"assets/images/yengec_buyuk4.png": "939597bdb6208ca57c4a94679e9bcc89",
"assets/LICENSE": "e9c0e9d2c736375c438416abc7441e17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f1d2f6b34595c5b0c8e044e8f30f33c8",
"/": "f1d2f6b34595c5b0c8e044e8f30f33c8",
"main.dart.js": "e20a57523a611c91fa1757961b223d7c",
"manifest.json": "bb61004f989880e30f7194fed66bd002"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
