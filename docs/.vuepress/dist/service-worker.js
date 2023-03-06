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
    "revision": "4af0df2c063ce4c6fb7d58e8ee0dcd3d"
  },
  {
    "url": "assets/css/0.styles.feefadf2.css",
    "revision": "c5e515357f6caa58b01b5973dd136fa9"
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
    "url": "assets/js/20.28c4c462.js",
    "revision": "d30f88ac319cff3a9ff6ce0e6f847d84"
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
    "url": "assets/js/24.596baefd.js",
    "revision": "555bc983e6967b32c690dd51863f7cc6"
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
    "url": "assets/js/app.10278336.js",
    "revision": "0ba28a0691bd15718768710e8456dcd3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "081a19028e48969ec67624f689a78a07"
  },
  {
    "url": "design/index.html",
    "revision": "c25ed63a6e7955fbd4a6157243ce5e56"
  },
  {
    "url": "index.html",
    "revision": "11a522f7b7c75217c6d24544e5913565"
  },
  {
    "url": "intro/index.html",
    "revision": "32b38b9bd6e12f08f3f3e89b2e11961d"
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
    "revision": "2a1549c9d1df1282cbf62a0dd41b0da3"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "85230c349b433fda50db47d326e5fb00"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3a6c17a7cdd52c6bf4e04a030548e790"
  },
  {
    "url": "software/index.html",
    "revision": "23b83a93f202d7e5e129077b76273e14"
  },
  {
    "url": "test/index.html",
    "revision": "871e70c0e3fa2eb522809dd2f9ca32d3"
  },
  {
    "url": "use cases/index.html",
    "revision": "02c0e392c7a52bfac004738289f4cc7f"
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
