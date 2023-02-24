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
    "revision": "5ad99aa43471899c792686f743b004f0"
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
    "url": "assets/js/15.73f2a264.js",
    "revision": "f362e9b27fc657abb8fa1b0e52513982"
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
    "url": "assets/js/18.c52227d3.js",
    "revision": "cefa4015148186c82f24900eae2203c4"
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
    "url": "assets/js/20.cc00d6a7.js",
    "revision": "6057a59c83bbd86804bdaad145d96004"
  },
  {
    "url": "assets/js/21.c6c2b1e1.js",
    "revision": "68903ecb411096406a2fff4075b6b000"
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
    "url": "assets/js/24.9364b685.js",
    "revision": "af5db62e23211f378001e561508a9cc3"
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
    "url": "assets/js/app.b27ef48a.js",
    "revision": "c81f6660cdb07ac2e5c4e7da4c582129"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c6e426892a0f91cd77aeb610c84c984b"
  },
  {
    "url": "design/index.html",
    "revision": "1d9da0bb753757c95acc25b599edb774"
  },
  {
    "url": "index.html",
    "revision": "503c8fe10860717ceeef52f713d3ae98"
  },
  {
    "url": "intro/index.html",
    "revision": "bf7dd0e1e164148dad2dfea704d624ac"
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
    "revision": "2a7cb823d0fc1e45bdef7de08e368100"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ce8e067230593738985da684f761f6ef"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d9a6c96c2724150265c4e6cc58e4ccf7"
  },
  {
    "url": "software/index.html",
    "revision": "8714ba9831f20054d6a185959d40fa97"
  },
  {
    "url": "test/index.html",
    "revision": "fdacdcf913aeed436642ba34ce8a16fa"
  },
  {
    "url": "use cases/index.html",
    "revision": "1b0443c87e683672294cae5fc42133d8"
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
