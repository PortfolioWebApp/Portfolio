'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8ed8a684281b13ccbbb2941d1dc2809f",
"assets/AssetManifest.bin.json": "cba47a5204b81a027303fc603f521269",
"assets/AssetManifest.json": "fc7b65f7c94e00c06d40aaff45abab59",
"assets/assets/fonts/Abel-Regular.ttf": "1052d6ca3993ae24a932304560a4c8b4",
"assets/assets/fonts/CustomIcons.ttf": "8033fcce9b7a4648c311140ee34bf8a0",
"assets/assets/images/doi_bg.png": "1cd23fce240838cc26ecaca9fd73106f",
"assets/assets/images/logo.png": "5d3adf91f1f045224565887f48df6934",
"assets/assets/images/Main%2520Logo%2520(Banner).png": "2aed72191a00ea611baef50200959e76",
"assets/assets/images/pfp12313.PNG": "3dd843d0d5ef30f55689f1fab966f6db",
"assets/assets/images/squareo_bg.png": "008f6d9fa1c29aa73c937463ecb7015c",
"assets/FontManifest.json": "2ca957434cf8ec75644e7b71538ac8c2",
"assets/fonts/MaterialIcons-Regular.otf": "1863994b745031cb9c2de4b2c85d5a23",
"assets/NOTICES": "9d48fbba03fe0277b37c7a27e8570876",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/mesh_gradient/shaders/animated_mesh_gradient.frag": "1890be5ac6e1b673019ee2604c2d59c5",
"assets/packages/mesh_gradient/shaders/point_mesh_gradient.frag": "6721e3c3c3b65cb49c2709c828288ffd",
"assets/packages/typicons_flutter/fonts/typicons.ttf": "71dfc759864e862022c573e696c81a5e",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "c1f9750d3495fc8c27a86421cac43602",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d33f2a0fa069a18d78eabcfcf20b1375",
"icons/android-icon-144x144.png": "20c149301ddb55d220f8ca61d084bbec",
"icons/android-icon-192x192.png": "c70c24c6d6ed274cb1489f209f61c448",
"icons/android-icon-36x36.png": "47afe832590a2e9820b42e548d853b2b",
"icons/android-icon-48x48.png": "91091f950c088fe936c43ddfde091fee",
"icons/android-icon-72x72.png": "20b18e7324a926f9f27b1c6f658dae38",
"icons/android-icon-96x96.png": "d9bcbcd94898b489cfb0ab8d369e42e7",
"icons/apple-icon-114x114.png": "c9609a1322d3db621d290b115e0f56e5",
"icons/apple-icon-120x120.png": "07c8ec2a64f5c30135bc6a2ec521e1d1",
"icons/apple-icon-144x144.png": "20c149301ddb55d220f8ca61d084bbec",
"icons/apple-icon-152x152.png": "1ee00677042462a3b74be80fddff6349",
"icons/apple-icon-180x180.png": "2cb99e5d2f482e8c9486bd454180bc3d",
"icons/apple-icon-57x57.png": "8c8bbbc0d118dafcd0137c73ca11c201",
"icons/apple-icon-60x60.png": "6ae5c2728ca19725cb877bbfea50d9eb",
"icons/apple-icon-72x72.png": "20b18e7324a926f9f27b1c6f658dae38",
"icons/apple-icon-76x76.png": "67006cdccd08590aafc10c0e83041143",
"icons/apple-icon-precomposed.png": "8897ade0b72c03f754e2095d26936d68",
"icons/apple-icon.png": "8897ade0b72c03f754e2095d26936d68",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "e0aba108701d8febf07142ce60c37e8c",
"icons/favicon-32x32.png": "1cf831373512c8acb06e795da9881473",
"icons/favicon-96x96.png": "048e64aa6355b10badbc73771f7e6b41",
"icons/favicon.ico": "fea43378ab13bd6a9c8b649cf9961841",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "20c149301ddb55d220f8ca61d084bbec",
"icons/ms-icon-150x150.png": "464a50422f9d7aa96977d5782db6de12",
"icons/ms-icon-310x310.png": "dcba193340c4b9f7ea5b65f7de0895ed",
"icons/ms-icon-70x70.png": "cdafde3917a2b6d6e7803ca13814d61e",
"index.html": "58232151d21974165a69c802b4df85e3",
"/": "58232151d21974165a69c802b4df85e3",
"main.dart.js": "f13fbfb677259ae47f775ca097c19487",
"manifest.json": "5e5570423e0e7e86cb42db80b0315209",
"version.json": "60a71d692c6e6a566ef45d00a046e4e4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
