'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8f493569df471f53b8d20e3f5eb7b298",
"assets/AssetManifest.bin.json": "171da6112405c42019a3bbd1376e2ca3",
"assets/AssetManifest.json": "09b5c060d9eb389edae2fb6e66ae7316",
"assets/assets/fonts/Abel-Regular.ttf": "1052d6ca3993ae24a932304560a4c8b4",
"assets/assets/fonts/CustomIcons.ttf": "8033fcce9b7a4648c311140ee34bf8a0",
"assets/assets/images/doi_bg.png": "1cd23fce240838cc26ecaca9fd73106f",
"assets/assets/images/home_bg.png": "61e0cce6cdb37d4147b93d262416749a",
"assets/assets/images/neon_bg.gif": "17f2c8a419d7af866909c4262ba45d0d",
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
"favicon.png": "5d3adf91f1f045224565887f48df6934",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d6a182f755dc476ac790082134175ce3",
"icons/android-icon-144x144.png": "5beabbb45d9e0a8b2d9a9f17ebcf14ed",
"icons/android-icon-192x192.png": "2acb3097d474f93fee1e204ab4d12614",
"icons/android-icon-36x36.png": "7820dc7fb6b645336a1aa7c951138a77",
"icons/android-icon-48x48.png": "6769ac8db5def7708b9864207a2985f4",
"icons/android-icon-72x72.png": "fb10ce7e5fd93c56f26f7a3487cc50d2",
"icons/android-icon-96x96.png": "278bb04d848032b968a532045bb02cbf",
"icons/apple-icon-114x114.png": "47a963a811892036f2f0d5c324d9dfa9",
"icons/apple-icon-120x120.png": "21c1492dae3dc76636045434fcfc2462",
"icons/apple-icon-144x144.png": "5beabbb45d9e0a8b2d9a9f17ebcf14ed",
"icons/apple-icon-152x152.png": "90ef1f5754a86644a7f68ec8e49f1483",
"icons/apple-icon-180x180.png": "68242dc95797640d7760576137ac0fe3",
"icons/apple-icon-57x57.png": "4690115493827a499674250601e2730b",
"icons/apple-icon-60x60.png": "d5cb2ecda354d496195c4f4014f9c7c5",
"icons/apple-icon-72x72.png": "fb10ce7e5fd93c56f26f7a3487cc50d2",
"icons/apple-icon-76x76.png": "42e9e85361147e96273cd0aa69f37dbf",
"icons/apple-icon-precomposed.png": "3c36276bbb9e1e1714917f91e51ba8cf",
"icons/apple-icon.png": "3c36276bbb9e1e1714917f91e51ba8cf",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "c98ba70bf09d7f52c1f8dc560ff7b80f",
"icons/favicon-32x32.png": "8fcc6df84aac57942228949ce0ff72a1",
"icons/favicon-96x96.png": "278bb04d848032b968a532045bb02cbf",
"icons/favicon.ico": "ee03ed42ebab248e0ab2a4d43130173c",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "5beabbb45d9e0a8b2d9a9f17ebcf14ed",
"icons/ms-icon-150x150.png": "29111f59a575ed983ac5ce728ef271bb",
"icons/ms-icon-310x310.png": "7c13382a5f0d033c648f6605e9d9882b",
"icons/ms-icon-70x70.png": "ebad69d31458453789cdb5e1e62e8de9",
"index.html": "58232151d21974165a69c802b4df85e3",
"/": "58232151d21974165a69c802b4df85e3",
"main.dart.js": "d124bb1020cfefb8f8ad6ad849bc17c0",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
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
