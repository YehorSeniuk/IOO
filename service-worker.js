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
    "revision": "ab6f61f49abb0c73b06e6594627d98b7"
  },
  {
    "url": "assets/css/0.styles.bb58e99c.css",
    "revision": "bf21bf60fbfc9ff09a5ea40d58702b1e"
  },
  {
    "url": "assets/img/1.d33edc70.jpg",
    "revision": "d33edc70909e2b0188d7d604ccd36b60"
  },
  {
    "url": "assets/img/2.1.cf66b887.jpg",
    "revision": "cf66b887ee721a2492b7e53743c6c8bc"
  },
  {
    "url": "assets/img/2.2.90721cf8.jpg",
    "revision": "90721cf82047fe4764ab509425292885"
  },
  {
    "url": "assets/img/2.3.6c19075c.jpg",
    "revision": "6c19075c63b7a6402bf1df5e040a0a9e"
  },
  {
    "url": "assets/img/3.1.604866f9.jpg",
    "revision": "604866f986e238a40e275ad1071957f5"
  },
  {
    "url": "assets/img/3.2.44087dab.jpg",
    "revision": "44087dab62626feb8c4e20b536383ed5"
  },
  {
    "url": "assets/img/4.1.5d03a0ba.jpg",
    "revision": "5d03a0ba8ed345c98a31faf114460557"
  },
  {
    "url": "assets/img/4.2.bfdd0095.jpg",
    "revision": "bfdd009581b976e3aa188df8d010404c"
  },
  {
    "url": "assets/img/4.3.ded37c8b.jpg",
    "revision": "ded37c8bf4677eea23f3f167d99642a6"
  },
  {
    "url": "assets/img/5.1.17c77213.jpg",
    "revision": "17c77213f02bd75af1b8b805d6f3aaf3"
  },
  {
    "url": "assets/img/5.3.86e26cf4.jpg",
    "revision": "86e26cf41ba349998f1930b0e3f9c673"
  },
  {
    "url": "assets/img/database_scheme.edb06c50.png",
    "revision": "edb06c50b3cebc88281ea6794860bfd3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eb16c742.js",
    "revision": "0462b08e2d13728ec9c2fb460bfc2ff7"
  },
  {
    "url": "assets/js/11.9f95bcea.js",
    "revision": "c75aad72b17e49d4b15996b43d37148f"
  },
  {
    "url": "assets/js/12.21fae77a.js",
    "revision": "141802a57741398351f7dafa27475b53"
  },
  {
    "url": "assets/js/13.d1b4dffa.js",
    "revision": "7e837c2b15033afef9cc7129169fff33"
  },
  {
    "url": "assets/js/14.e8321ced.js",
    "revision": "6cc042f965ae3432eee14978696f5eef"
  },
  {
    "url": "assets/js/15.b9293569.js",
    "revision": "92e7f62cc4977a7e275c65c1e01977d4"
  },
  {
    "url": "assets/js/16.11731dcf.js",
    "revision": "36705ee12ceead906d11d22defb55f84"
  },
  {
    "url": "assets/js/17.7e15e97d.js",
    "revision": "3c0cebb34bb35fce00179796f8ecc776"
  },
  {
    "url": "assets/js/18.7690e920.js",
    "revision": "b0c0fa98d3044d8a9a28d575d71329fe"
  },
  {
    "url": "assets/js/19.b642b3ee.js",
    "revision": "7c9b98f02a31ef52e8aba42ce5a1ddfa"
  },
  {
    "url": "assets/js/2.10c6bb35.js",
    "revision": "8e49488ef7df1be2feb7a8c331546fdf"
  },
  {
    "url": "assets/js/20.d8eaa887.js",
    "revision": "13fd923d26566076282c331fa8bae30a"
  },
  {
    "url": "assets/js/21.74900f73.js",
    "revision": "1629a5df6fecc831a4ae4503be6a8b1e"
  },
  {
    "url": "assets/js/22.16336da4.js",
    "revision": "d3b9069f93b6bae0b52a4d3e7b4239fb"
  },
  {
    "url": "assets/js/23.efe0abea.js",
    "revision": "d80531b3b267dba9d1a47171c0844b84"
  },
  {
    "url": "assets/js/24.ad2811bd.js",
    "revision": "af994feb46b8e5997bc0ea7c291203ea"
  },
  {
    "url": "assets/js/26.d055c4e2.js",
    "revision": "72ceaebfab60dab1c69530cf4a1c6117"
  },
  {
    "url": "assets/js/3.2bac3e4e.js",
    "revision": "a87603c9cd77cc8cc435538df84de313"
  },
  {
    "url": "assets/js/4.fbcfd4c5.js",
    "revision": "4a4934339484ee41bbc4bd6fe1250da8"
  },
  {
    "url": "assets/js/5.60a9c0d1.js",
    "revision": "6d9d9a4b890ed68a0f76cb9e976a8c7c"
  },
  {
    "url": "assets/js/6.ffcded52.js",
    "revision": "f4225e5626886d5e4b6e6834e01a547f"
  },
  {
    "url": "assets/js/7.4cfc1779.js",
    "revision": "02292a06756ecc4c9e77bdea8e8319c1"
  },
  {
    "url": "assets/js/8.abd85a2d.js",
    "revision": "def6003057b7f233c23851edb6fc46d1"
  },
  {
    "url": "assets/js/9.e9127873.js",
    "revision": "9ad7011ebe9506501e3220ba46ef958d"
  },
  {
    "url": "assets/js/app.0ac78f6b.js",
    "revision": "d2dad3986e538a2333950d75a7aea299"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4234964b35fdd13f60bbea2e0427f355"
  },
  {
    "url": "design/index.html",
    "revision": "1ab773b50de126b33746696990e22e68"
  },
  {
    "url": "index.html",
    "revision": "515f475277e7c848967a0be36df3108b"
  },
  {
    "url": "intro/index.html",
    "revision": "92e5019e067d6d0e41e7811b29719e6e"
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
    "revision": "0094e2503bf56196efd023616dfb0407"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c0863fc1a03974afd055926df584cb8b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4d5aeb935dcc5b4843683527f4d801aa"
  },
  {
    "url": "software/index.html",
    "revision": "ce1c18a778cd5fdff224dee93c410997"
  },
  {
    "url": "test/index.html",
    "revision": "5f28bd9e752fec404e4f8973b7112c02"
  },
  {
    "url": "use cases/index.html",
    "revision": "9a07d1fa2f8b871e077f810a62143add"
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
