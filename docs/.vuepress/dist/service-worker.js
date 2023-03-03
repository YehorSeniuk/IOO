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
    "revision": "8e53411ef01601d6dae655c0e6fbe8df"
  },
  {
    "url": "assets/css/0.styles.36cfb035.css",
    "revision": "787524551134e2942f55ca1c3f8b3812"
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
    "url": "assets/js/15.16b637bb.js",
    "revision": "7dcb56e88151a1ca30adddff84232714"
  },
  {
    "url": "assets/js/16.f868886d.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.5b53db67.js",
    "revision": "88eb46c3062d10bf8da23f3e3c815e96"
  },
  {
    "url": "assets/js/18.3b7fa52d.js",
    "revision": "f3e47b5147a5441b79de61d50dbba10f"
  },
  {
    "url": "assets/js/19.7835ae59.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.1ea4844d.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.02a12370.js",
    "revision": "785fbafb9147ed0cd547f95a78ce59dd"
  },
  {
    "url": "assets/js/21.44df60b1.js",
    "revision": "63ea6493fc8f879dbe6837692abde348"
  },
  {
    "url": "assets/js/22.fed602bb.js",
    "revision": "be0693706a1616c24e68a491dcd2af07"
  },
  {
    "url": "assets/js/23.9c9cf32f.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
  },
  {
    "url": "assets/js/24.c97e48f3.js",
    "revision": "131125163a33ca8ea30e22928932ed88"
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
    "url": "assets/js/5.3c71fcca.js",
    "revision": "b571707f54429051ffeeff5b8e1517e4"
  },
  {
    "url": "assets/js/6.73f22f79.js",
    "revision": "65c87ea66ae3b2e4b676cfecaec56395"
  },
  {
    "url": "assets/js/7.3f7143c7.js",
    "revision": "ba5677f2c1b45600efbf2676bd653ea6"
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
    "url": "assets/js/app.df7d5059.js",
    "revision": "d701e06067f8ce02b626020f9a16e8f9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d5cb9eacd74464021d28079b11002acd"
  },
  {
    "url": "design/index.html",
    "revision": "c86285b9ce134f490083b1c99525a4ce"
  },
  {
    "url": "index.html",
    "revision": "2ce6dd344990bd387eca621429909554"
  },
  {
    "url": "intro/index.html",
    "revision": "8fd72520ed834920b2589fbbafa1038c"
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
    "revision": "f85275007a60c29e2b4bdea9c405955b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "fc7020a9f8948d95ac90098655f10c7a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7f7dd6d66fe507a7d193414e538b6fb6"
  },
  {
    "url": "software/index.html",
    "revision": "affd05a3f68f8ee5abfd88e6df230f8b"
  },
  {
    "url": "test/index.html",
    "revision": "4aa87bcd316f2a7d10019feba98ff9e5"
  },
  {
    "url": "use cases/index.html",
    "revision": "14ee354ef5a55b6eeecdec8227d90b42"
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
