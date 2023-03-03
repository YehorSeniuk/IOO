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
    "revision": "ec6807ae2551bced14418cdd69237ee0"
  },
  {
    "url": "assets/css/0.styles.4f30ec2b.css",
    "revision": "5f4fca1b7e513265b746c80f00a1c3ad"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad781c78.js",
    "revision": "899ef58f3f92b85d021edba26afd2097"
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
    "url": "assets/js/16.a6459977.js",
    "revision": "75791849ed3fb2c8183c76b6e2ce6d4a"
  },
  {
    "url": "assets/js/17.f829100a.js",
    "revision": "8dceb00f63fb206ccfb8c7c505caca82"
  },
  {
    "url": "assets/js/18.ffada352.js",
    "revision": "9403c43f06fde40c3618892630d9f6aa"
  },
  {
    "url": "assets/js/19.4a80171f.js",
    "revision": "2af13fcbc6726e6464ac3a89b6b15319"
  },
  {
    "url": "assets/js/2.1ea4844d.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.edab6144.js",
    "revision": "3151bd6b36489c5c5f55f5ac03c50bb1"
  },
  {
    "url": "assets/js/21.44df60b1.js",
    "revision": "63ea6493fc8f879dbe6837692abde348"
  },
  {
    "url": "assets/js/22.79b3738a.js",
    "revision": "6c24ff5badb20dd62f0d25124765f5f5"
  },
  {
    "url": "assets/js/23.437cc24f.js",
    "revision": "c0737244c08a6027329a7485bdfa97f6"
  },
  {
    "url": "assets/js/24.5388c949.js",
    "revision": "7ac0023dd1d7be1afe16bee58c66f859"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.4ed45971.js",
    "revision": "b16159aab039353619946e13967d38e4"
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
    "url": "assets/js/6.19d66de0.js",
    "revision": "34e4dc8308467d77a9dc5318911ce920"
  },
  {
    "url": "assets/js/7.3906f7a7.js",
    "revision": "dbf3fe1c5b38157ad795d49e2c42bfcd"
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
    "url": "assets/js/app.e9d6af7f.js",
    "revision": "0ae2a8f93969d09870b31d95ae9ec5f7"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e73468b53dd24104da57fa8436b5f96a"
  },
  {
    "url": "design/index.html",
    "revision": "d747715fdab39dba912ab51853d1e730"
  },
  {
    "url": "index.html",
    "revision": "b629a9881d5cf84244607c9f191db159"
  },
  {
    "url": "intro/index.html",
    "revision": "c9850db25aba50cd62b721f81f1aaed3"
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
    "revision": "9df96f2ec14ff7c940d3b7d54ce5b420"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e7862a69ab850160e9ae8dc460c7854c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c44bb5f703395da1b3a6c342ec9b383d"
  },
  {
    "url": "software/index.html",
    "revision": "f6252eaed46a3dbddc03ed38a7d1452e"
  },
  {
    "url": "test/index.html",
    "revision": "d129551d51ab3048243c549bbfc0d57b"
  },
  {
    "url": "use cases/index.html",
    "revision": "42944f7a62017a4dec0d205f4afdd25f"
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
