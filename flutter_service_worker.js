'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d26851d69606ce5e710d3c28757fe34b",
"index.html": "134f0bbba30996fb3be8d9535d0b62e9",
"/": "134f0bbba30996fb3be8d9535d0b62e9",
"main.dart.js": "705f17168b3dfb25fc1119b2a7c56598",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "04d8290aa18dc5e80efc5595a08cb049",
".dart_tool/package_config.json": "868294d68f35cf38c133ce84c855c6d0",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/dart2js.d": "efc55a412ac7323ea10e434c8b41e46c",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/web_static_assets.stamp": "133d17f78f709ff6ec4cbb930d033f87",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/main.dart.js.deps": "c19251efda4ef757cc120112adea2630",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/main.dart.js": "705f17168b3dfb25fc1119b2a7c56598",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/app.dill": "457f5409dff2a47c9df7a221c6a397e1",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/outputs.json": "d751713988987e9331980363e24189ce",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/main.dart": "5391d43d29aa395c3acf49263c8688a1",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/dart2js.stamp": "28aadff1b12d2a3caf68c98e7edf4fc0",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/app.dill.deps": "53047662110702e6966269af03f618eb",
".dart_tool/flutter_build/70b81c701ed6614b4fa82c10e2a91233/web_entrypoint.stamp": "84389b9901513eba933ab50598b017f6",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/web_service_worker.stamp": "34fefdd8fb4dd7b17e49217633de3d09",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/dart2js.d": "5418a5560ee47e989fc4bca8abf87e94",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/web_static_assets.stamp": "04c81189a50162d46a04029380c6c10a",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/main.dart.js.deps": "83df26bf8efe22411a141e623bcfb186",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/main.dart.js": "705f17168b3dfb25fc1119b2a7c56598",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/app.dill": "1ee7537033f0e198a7ddd922dbf8a605",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/outputs.json": "f21aa02607f3248afed2365b1515dddc",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/web_release_bundle.stamp": "c3275ec5744381c9445f157f5619c025",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/flutter_assets.d": "58e642095609d2a8da7efd91f86fdd95",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/main.dart": "5391d43d29aa395c3acf49263c8688a1",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/dart2js.stamp": "82e140bce2818c9d5cede20880a9ffe6",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/service_worker.d": "040c304a5ad56175e2b56cd3be8f1bff",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/web_resources.d": "a54dd37aed8c3581bd2d05f49c36b601",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/app.dill.deps": "aac4f8e4e157d04e1549132f6c073801",
".dart_tool/flutter_build/95ca961f032d4d04def6c4f928230d47/web_entrypoint.stamp": "ce898b3a33991527e3deddf4eefdb3f6",
".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/package_config_subset": "3ed562ca20545d8eea85d0ed0312a2d6",
".dart_tool/version": "3988e5cc41f6f68ca5ff5edff5a1c120",
".dart_tool/chrome-device/Default/Network%20Persistent%20State": "c2c70f2b86b3e434d760e404499b419a",
".git/config": "8f69d6a7127e2eb2ed47fb7be08265e6",
".git/objects/61/4f48f38ef2531c294855a73ab93dfbc6c9a849": "ddeba0d213262cc7b416cc69500b26a2",
".git/objects/be/d9c8bec40aff8e99d2703930e7321af0461786": "975abd2dc4fd5f175a1ed14d6c52bf66",
".git/objects/bd/e67ea6c357fbe2cbaaee0cdec2bd7ee996e17a": "2d5dd9403d46cd3bc2d11a6ab1fbee05",
".git/objects/c7/b6c73d666378a87e5ed3e4a0e0feb63d63fe82": "296c7fcb46ef90d5629f39f0fafa465b",
".git/objects/pack/pack-aae10a2f819b8ab4a8ef196cdfc40ecbcc054e02.pack": "8239caf25232050022bb81be946404ed",
".git/objects/pack/pack-aae10a2f819b8ab4a8ef196cdfc40ecbcc054e02.idx": "be23b929ea09d041bd95b14b6fafad37",
".git/objects/89/e8851a50bae03bd62bc26e64a73082ddf02765": "6498f343459912b111a67dccb4919531",
".git/objects/6b/e978122de55f915c64403b1d11343038f6c54c": "e941f444d1d3bcf792b93a6bac7c3228",
".git/objects/96/0c858461341e1e4edf143f02bc7e4b2e790a77": "b65c5ff2dd07fd9f3b3d6f589065fe1f",
".git/objects/b0/723560507720c10f2ccd6f22ac20b178373df4": "666b6500a9d4769636a37d1fe07ba2f0",
".git/objects/c5/48ed82d53016627ac94eed7ad2674c189e50d3": "65bcff6622c61159d760d93b794455e8",
".git/objects/1b/356ca84719559d4a4e4c7b1dbdf7446da88a8e": "8dde9b8f43b8a7b9c45a3e371e0c2597",
".git/objects/82/b12207868a78c021a39a1fdeb078439280c203": "b4eae8f0ed012b24dc221129e3a7cfc8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "faa842140f533d9ae07a97e254702e85",
".git/logs/refs/heads/main": "2240776f58c9bcfc10a91a32fd6c39be",
".git/logs/refs/remotes/origin/main": "2c8adafe2b150613cc69078270355675",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "15badf84c224ac0ed098295e708ff70b",
".git/refs/remotes/origin/main": "15badf84c224ac0ed098295e708ff70b",
".git/index": "90fbc2e292f5f94818fd5d5a76413fb0",
".git/COMMIT_EDITMSG": "7b220d82825058e80a3675bd11946bab",
".git/FETCH_HEAD": "a71a8b96f50bc98133c293ae474d3646",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "65927a9256022709295bd07d61a17fc5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
