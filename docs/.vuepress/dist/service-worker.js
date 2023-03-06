/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5a5766e2f9145da554bd1247147f66ef"
  },
  {
    "url": "assets/css/0.styles.bb58e99c.css",
    "revision": "bf21bf60fbfc9ff09a5ea40d58702b1e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.f163a425.js",
    "revision": "eaa44986bdf03506c2e474b44451dac2"
  },
  {
    "url": "assets/js/16.bb88ba82.js",
    "revision": "2970edb996bf2b7d9b9f7d3ab1889505"
  },
  {
    "url": "assets/js/17.1b40e2b9.js",
    "revision": "9ac5c53acf4661671ed484474155619d"
  },
  {
    "url": "assets/js/18.ffada352.js",
    "revision": "9403c43f06fde40c3618892630d9f6aa"
  },
  {
    "url": "assets/js/19.686fa5bc.js",
    "revision": "a1d406c08ce6406bb14e2bc2a775469b"
  },
  {
    "url": "assets/js/2.1ea4844d.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.ccdb1d32.js",
    "revision": "79474ee8b9bf855daf5cc9ec14a6e49d"
  },
  {
    "url": "assets/js/21.6685ec02.js",
    "revision": "3a2581e441d4a89e8ce692eacd173c28"
  },
  {
    "url": "assets/js/22.eaeb520d.js",
    "revision": "ca650d0d7870d8ba3226d492bc75ff8d"
  },
  {
    "url": "assets/js/23.437cc24f.js",
    "revision": "c0737244c08a6027329a7485bdfa97f6"
  },
  {
    "url": "assets/js/24.44881c47.js",
    "revision": "2d12c935b074ff49d0e640b301bfc502"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.a9059e28.js",
    "revision": "630bb21a190654b4b2f8d8d9692628dc"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4588828054c83758635e2931c609318f"
  },
  {
    "url": "design/index.html",
    "revision": "579ec88a99bb4c2aaf131f38b148198a"
  },
  {
    "url": "index.html",
    "revision": "03c454c5859c24c9c9eec4b4d913cc81"
  },
  {
    "url": "intro/index.html",
    "revision": "b56dd85224550bd5d2d4ef844e50c454"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "5e44a3d3e8792210c1f51839505ba3c5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "83e166576a3b228adab76bacf9f7ff96"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "52e302db4fc73b7b86c1fe4f9f0cb269"
  },
  {
    "url": "software/index.html",
    "revision": "67ae903a0b00882393abafd2f22e80b1"
  },
  {
    "url": "test/index.html",
    "revision": "9e2f0969c524d7bfe68bb3330d3ec9e1"
  },
  {
    "url": "use cases/index.html",
    "revision": "1288694349d4588576969970f95a7b12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
