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
    "revision": "6b7e66f005d9dd9d57b836514d1acee8"
  },
  {
    "url": "Alipay.png",
    "revision": "0cc11a8c269169a353f68e10569b7287"
  },
  {
    "url": "assets/css/0.styles.dbeeb224.css",
    "revision": "33a5ab4e3c105835c05d677bb5f8a523"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/js/1.ad2d486e.js",
    "revision": "c3bf12f57df054c9e02a4a4772d367cd"
  },
  {
    "url": "assets/js/10.e9e2ea06.js",
    "revision": "db179a020c7698acf05d2cd9dc25d095"
  },
  {
    "url": "assets/js/100.67a81fbe.js",
    "revision": "c4f2a2b6608f64a22958afdc2f3da29c"
  },
  {
    "url": "assets/js/101.1d81524e.js",
    "revision": "9b43236ac37b28212d7b32e7463c424f"
  },
  {
    "url": "assets/js/102.0403ed18.js",
    "revision": "f0ae78fa2938c2c91c2a87c1ea931ba0"
  },
  {
    "url": "assets/js/103.175cc41e.js",
    "revision": "f750ee3ed8adf340764a9d2ddc8d8d5b"
  },
  {
    "url": "assets/js/104.62209fb7.js",
    "revision": "9df12dcb8db3fefe07ad67e4242dd0b8"
  },
  {
    "url": "assets/js/105.35b18101.js",
    "revision": "f1d6f4a43694345a44166b25ff0fe9be"
  },
  {
    "url": "assets/js/106.71471b59.js",
    "revision": "7853d887628b643c80aae29ad0c0f0f1"
  },
  {
    "url": "assets/js/107.e46d1818.js",
    "revision": "fa996f82f323468caf653ba09a55f077"
  },
  {
    "url": "assets/js/108.1dfc0a9d.js",
    "revision": "91ce12438bdaa1a2f1f653461303f54d"
  },
  {
    "url": "assets/js/109.ed71dcc2.js",
    "revision": "37aaef833966a30f07fbc0c1bf85c030"
  },
  {
    "url": "assets/js/11.1b2613e6.js",
    "revision": "909876c659f41ada8bf7e6c2273d3f2e"
  },
  {
    "url": "assets/js/110.296d15a2.js",
    "revision": "ce6e0c1d852a4dc790f227be011b39ef"
  },
  {
    "url": "assets/js/111.804c410e.js",
    "revision": "0cdaf47f50cb8935a8f42d2b43ed8c16"
  },
  {
    "url": "assets/js/112.e2f9d878.js",
    "revision": "14326e4afd9d91393f9a0cc7fcd9eec6"
  },
  {
    "url": "assets/js/113.70d6bcba.js",
    "revision": "f95047aa74c9a3201b59a52a8ff94070"
  },
  {
    "url": "assets/js/114.1e585714.js",
    "revision": "2a3ff6609f246c18ee8b51e79e28d530"
  },
  {
    "url": "assets/js/115.d223cda0.js",
    "revision": "cb31f6df4ff56bc2dd40a546f7828b22"
  },
  {
    "url": "assets/js/116.71bcc706.js",
    "revision": "81d06c2fdf98812a44b2d882b8ad9924"
  },
  {
    "url": "assets/js/117.fba6fb92.js",
    "revision": "1a96e6f19b7c8a9c56ead75d0cf137df"
  },
  {
    "url": "assets/js/118.d77ac1ca.js",
    "revision": "295cac792a95afc65deb101a735ea027"
  },
  {
    "url": "assets/js/119.d24d7d69.js",
    "revision": "f405244c1af933159cad83b0d5a12ca1"
  },
  {
    "url": "assets/js/12.995f55ae.js",
    "revision": "2fa9c491e1ff0c62269ce017a10e32e3"
  },
  {
    "url": "assets/js/120.dfd66cc3.js",
    "revision": "c27e14e6c60dbce129824ba1964a2027"
  },
  {
    "url": "assets/js/121.ffc440bf.js",
    "revision": "85971fe08b901d8cd27df36ee0f8d46b"
  },
  {
    "url": "assets/js/122.605acb45.js",
    "revision": "3f0a299f192e2db9cefe9b2e00777ec6"
  },
  {
    "url": "assets/js/123.eeecdd12.js",
    "revision": "28fbf58dc1b5c745e497aa8a8a5faa74"
  },
  {
    "url": "assets/js/124.d8ef359d.js",
    "revision": "09f4af9446f9b409b6e905a8dfe705cc"
  },
  {
    "url": "assets/js/125.3581279c.js",
    "revision": "368524e7a2e4410a12ca5c058dcaa025"
  },
  {
    "url": "assets/js/126.4667a2ab.js",
    "revision": "f6f978e087e1d9e81a43e8e640898cdb"
  },
  {
    "url": "assets/js/127.4bdf7cbc.js",
    "revision": "46dc3fc238ada79d6dee5c3779acf6fd"
  },
  {
    "url": "assets/js/128.4f4aa446.js",
    "revision": "ddfe4cad5571dca8db5e5d3c896016bc"
  },
  {
    "url": "assets/js/13.487b0ce7.js",
    "revision": "34d13fdbb654681332597bc460b04f50"
  },
  {
    "url": "assets/js/14.e1974a72.js",
    "revision": "39fa8f2bda801c89e6d42f844f55d9c2"
  },
  {
    "url": "assets/js/15.b80813d2.js",
    "revision": "6beedaba08fbbc29d3b9afcfc14941b2"
  },
  {
    "url": "assets/js/16.ef81a2b7.js",
    "revision": "5e1b3aa1f57bde7b54a5a1fa0717864c"
  },
  {
    "url": "assets/js/17.5e458adc.js",
    "revision": "c68b4bad4dab4dce54daa1b6d60bc503"
  },
  {
    "url": "assets/js/18.a9eafc73.js",
    "revision": "891132955e1254d605bf073b97bb8585"
  },
  {
    "url": "assets/js/19.0c7c5e27.js",
    "revision": "ffaacdb686f6323e1a382914f57636e1"
  },
  {
    "url": "assets/js/20.484f9c14.js",
    "revision": "dde0d1cdfc7c819b403798a448a6bea5"
  },
  {
    "url": "assets/js/21.a0f50a29.js",
    "revision": "57270ab405989ca4338138234a4a4bf4"
  },
  {
    "url": "assets/js/22.dbb454ea.js",
    "revision": "ec4adeae1f2d3525a9a3ab75b79f7431"
  },
  {
    "url": "assets/js/23.027e249e.js",
    "revision": "e9510346ee16e7218bd25436eded7446"
  },
  {
    "url": "assets/js/24.38c189d0.js",
    "revision": "e3292571a197d5f68537454762bafdab"
  },
  {
    "url": "assets/js/25.fcdf66b5.js",
    "revision": "d6fe3951ec6dfa54beae390d9ff94051"
  },
  {
    "url": "assets/js/26.4b4df44c.js",
    "revision": "59cbb6835f7e3ce3e63b5af7c60638aa"
  },
  {
    "url": "assets/js/27.987fdd11.js",
    "revision": "e1a515e80c5ea8cd38d6cffb4ff2cce9"
  },
  {
    "url": "assets/js/28.1f4773e5.js",
    "revision": "bf08e886c73755f519b1be08a7bf3b8a"
  },
  {
    "url": "assets/js/29.9aac4691.js",
    "revision": "5c0c16eb1f3aa87dbc9bdc204debc279"
  },
  {
    "url": "assets/js/3.eddcb4b7.js",
    "revision": "d80a5fe286a12853a3d7ead2a9283e04"
  },
  {
    "url": "assets/js/30.a54c053b.js",
    "revision": "d7e21ea069976a8cb81c04b88b20b54d"
  },
  {
    "url": "assets/js/31.34b2260c.js",
    "revision": "0bae2c06cda73734bcc94b30a3d431b3"
  },
  {
    "url": "assets/js/32.afac7626.js",
    "revision": "94e7eac97b826fb24e795d7eaa00341c"
  },
  {
    "url": "assets/js/33.5ced73a3.js",
    "revision": "78540402e619aeeaf8f68ff91333504a"
  },
  {
    "url": "assets/js/34.7679bb15.js",
    "revision": "269a0f8718a7dc4682a5b50322e95c9c"
  },
  {
    "url": "assets/js/35.6990b769.js",
    "revision": "fb2c12d85bb4745e5a684d21d8df27d0"
  },
  {
    "url": "assets/js/36.0979061d.js",
    "revision": "573e6403000b0f636efe5ed994e63e4f"
  },
  {
    "url": "assets/js/37.74d8752e.js",
    "revision": "e78cb702eda75ea2e3c35e701f45ef59"
  },
  {
    "url": "assets/js/38.16c58097.js",
    "revision": "5a597cea7a9814862d8be1925dc913dd"
  },
  {
    "url": "assets/js/39.c310b3a9.js",
    "revision": "26d378fb4e1025e725e263cedbbf561e"
  },
  {
    "url": "assets/js/4.bc9847ed.js",
    "revision": "f7998a0082c27e374e1f76c4c5500ab4"
  },
  {
    "url": "assets/js/40.5bca537b.js",
    "revision": "efc2cba78ac5e2bce4c2395f73a07f35"
  },
  {
    "url": "assets/js/41.8423040d.js",
    "revision": "8d15829586c8f104f6aa7da1fab1b666"
  },
  {
    "url": "assets/js/42.428c7a86.js",
    "revision": "5d1a36f1c9a428ddbdc10f62ed69c9e0"
  },
  {
    "url": "assets/js/43.3bf32f2d.js",
    "revision": "4b12dd996d7bc70045f0f54d36bed088"
  },
  {
    "url": "assets/js/44.3eeff98d.js",
    "revision": "9e98b9e5a221110cd5e1e475e0e8fe45"
  },
  {
    "url": "assets/js/45.6cb5d5c6.js",
    "revision": "7b7d10ed23c5f6fca532e3637a0b8e32"
  },
  {
    "url": "assets/js/46.9c3c5fac.js",
    "revision": "f0a4fcbd558f08f1394bdb38534a42e9"
  },
  {
    "url": "assets/js/47.a55c9465.js",
    "revision": "c7faa847f0686ec87339d8cb62a3d0a6"
  },
  {
    "url": "assets/js/48.6987dd49.js",
    "revision": "762c792ce58ce90340359628c2838a47"
  },
  {
    "url": "assets/js/49.b63e9019.js",
    "revision": "3e052ba4fd7ad26a8443c7f9cddace84"
  },
  {
    "url": "assets/js/5.c894df76.js",
    "revision": "e4ca5f1e5db1c71c523e671ad67d932a"
  },
  {
    "url": "assets/js/50.2f82754c.js",
    "revision": "c4e8476801d4e37c183b3fdbca7e2ce6"
  },
  {
    "url": "assets/js/51.50e4f97d.js",
    "revision": "5662636c493ab1692a93bdd1df991256"
  },
  {
    "url": "assets/js/52.6ff3e11b.js",
    "revision": "b1b5995cccfac82f4b8099470323ee53"
  },
  {
    "url": "assets/js/53.76d6321e.js",
    "revision": "8759f7033dddcfd29936d2754f3f1172"
  },
  {
    "url": "assets/js/54.0270105a.js",
    "revision": "47c71c564a9b3c7c285e131514208d1c"
  },
  {
    "url": "assets/js/55.bfcb89da.js",
    "revision": "878dc561b603634f4eaa5c43f634e7be"
  },
  {
    "url": "assets/js/56.7a96b639.js",
    "revision": "94be346db8379f0c41ba41aa2edfebdc"
  },
  {
    "url": "assets/js/57.a2882b48.js",
    "revision": "28b33d4053f1fe472d25712025b48e1c"
  },
  {
    "url": "assets/js/58.974beeba.js",
    "revision": "10066e93d685819fed30d3342a82089e"
  },
  {
    "url": "assets/js/59.74b2e41f.js",
    "revision": "0a8ee2a3eb6d1974563da26fc528fdf8"
  },
  {
    "url": "assets/js/6.117b99e6.js",
    "revision": "c5daf956df2e84b378459255e085350a"
  },
  {
    "url": "assets/js/60.1e5883cf.js",
    "revision": "0eb9cba1f1f9ebd8812e355fa864d513"
  },
  {
    "url": "assets/js/61.e3424c4b.js",
    "revision": "270c66d5357ef793c5837cb13c9c2a2f"
  },
  {
    "url": "assets/js/62.7da73f6d.js",
    "revision": "29268dcfca73e5946e6ba181d5d952f2"
  },
  {
    "url": "assets/js/63.d37e7621.js",
    "revision": "2b8b7c38f4ae0d531b035f10eb0304ae"
  },
  {
    "url": "assets/js/64.f11a62fa.js",
    "revision": "5404ab87fd4adcc5a6eea9049e970c23"
  },
  {
    "url": "assets/js/65.54fbdd67.js",
    "revision": "2215a1754c5802e32689671823edf826"
  },
  {
    "url": "assets/js/66.dbfc4090.js",
    "revision": "109af4f05262bfcf7137d417a56219db"
  },
  {
    "url": "assets/js/67.fe622733.js",
    "revision": "1ce0b17c1efab8599899b1b47417a698"
  },
  {
    "url": "assets/js/68.0517a829.js",
    "revision": "83ddc8a939c35d98f0d5b1505797b8b4"
  },
  {
    "url": "assets/js/69.0518522f.js",
    "revision": "58bb03eff4a97ed8b2bf3a4d2acfb997"
  },
  {
    "url": "assets/js/7.4989c505.js",
    "revision": "c6744dafdd765713475c641fcdcdc734"
  },
  {
    "url": "assets/js/70.75aab97f.js",
    "revision": "7f4d792bc95c97373147ee54006f6246"
  },
  {
    "url": "assets/js/71.f340cf01.js",
    "revision": "bbf6e2515c88a144492c50cc89386a23"
  },
  {
    "url": "assets/js/72.c4ec29af.js",
    "revision": "ad77774593cd76712089d17b9c9c239b"
  },
  {
    "url": "assets/js/73.3a128dbb.js",
    "revision": "a35ba45af8d4afb0571855f9caf036fa"
  },
  {
    "url": "assets/js/74.0ed8382b.js",
    "revision": "9ccdaf02c68a6a4b79fea3fe2b95185a"
  },
  {
    "url": "assets/js/75.9e226af4.js",
    "revision": "67f4ede7b274aa2db653f326b04d6934"
  },
  {
    "url": "assets/js/76.2d8eb250.js",
    "revision": "4eaa13fa8250231198c275ba2e6f292f"
  },
  {
    "url": "assets/js/77.25e8d1d0.js",
    "revision": "c128af9361a3d1aea3eafbc603c7845e"
  },
  {
    "url": "assets/js/78.3c71edbc.js",
    "revision": "640a16ed69e80451c784a69b8b909619"
  },
  {
    "url": "assets/js/79.17d8d3a7.js",
    "revision": "cad04cd55cc07745e2711611a059e14d"
  },
  {
    "url": "assets/js/8.96950ef2.js",
    "revision": "7b17bed87ac72ffa53bc8fb547348954"
  },
  {
    "url": "assets/js/80.d94ba3ec.js",
    "revision": "c04f9c2161d909f3bf5ec84f9514cea0"
  },
  {
    "url": "assets/js/81.f2609a58.js",
    "revision": "ec4833ece55209271313d192bfb4bbd4"
  },
  {
    "url": "assets/js/82.4dc0a528.js",
    "revision": "8e1e165ebf68a0a94ddecea82740ce83"
  },
  {
    "url": "assets/js/83.5e126e4d.js",
    "revision": "eeaaa944dfb827e20c409d98e9c52445"
  },
  {
    "url": "assets/js/84.d7ec9245.js",
    "revision": "9040677d3a083856611ce61cb8de9dfa"
  },
  {
    "url": "assets/js/85.f9a3818c.js",
    "revision": "165d2a1ac41771822804714c919f6696"
  },
  {
    "url": "assets/js/86.4945335c.js",
    "revision": "c90a350ede71bd6c74ad5fa10573fc75"
  },
  {
    "url": "assets/js/87.e267e510.js",
    "revision": "f3098f36a97131824310e7e5fad51610"
  },
  {
    "url": "assets/js/88.ac1dfd94.js",
    "revision": "2417c94c7a5141666ec823401d882e4d"
  },
  {
    "url": "assets/js/89.a8731142.js",
    "revision": "ba83796186f6d9a525d95561f7f4862f"
  },
  {
    "url": "assets/js/9.48f2669c.js",
    "revision": "2732c19844f00a43301515bd5bd89181"
  },
  {
    "url": "assets/js/90.42e1a23c.js",
    "revision": "d65ee7c2e7a7aed87439f2c4c0778cc1"
  },
  {
    "url": "assets/js/91.b7747c47.js",
    "revision": "a5676250d1145f84175411dd7d836115"
  },
  {
    "url": "assets/js/92.00801115.js",
    "revision": "f96d2ded27522b8f286e5dd147ba5529"
  },
  {
    "url": "assets/js/93.d85b9f5f.js",
    "revision": "2d3dde40c0414d28d85f9015d2de945a"
  },
  {
    "url": "assets/js/94.399a27d3.js",
    "revision": "64389e3622ba85387562a5f44b56f163"
  },
  {
    "url": "assets/js/95.95c7d53c.js",
    "revision": "d19945df515325399cb4427fdb20b8b7"
  },
  {
    "url": "assets/js/96.777074ca.js",
    "revision": "5393e7749449e10390667e6f53fd3783"
  },
  {
    "url": "assets/js/97.e293fc93.js",
    "revision": "4ef1166c5bb6e2651b59db7b4de83cf2"
  },
  {
    "url": "assets/js/98.586cd4ce.js",
    "revision": "7ddddae47b301f7f87d393e038c4e6d9"
  },
  {
    "url": "assets/js/99.a9b434c4.js",
    "revision": "ad4742d689d97eeed428c2d766f9551b"
  },
  {
    "url": "assets/js/app.a930f113.js",
    "revision": "29c084489f59db15f8a62db70d0bffc0"
  },
  {
    "url": "avatar.jpeg",
    "revision": "5e8817c6e3431f1c8807602bdd03a095"
  },
  {
    "url": "banner.jpg",
    "revision": "f2bd4594cd7f6a1bb17673b51699206a"
  },
  {
    "url": "categories/app/index.html",
    "revision": "9488f1a68d5863f2a13eeee4db9d58ac"
  },
  {
    "url": "categories/design/index.html",
    "revision": "79e724e87c32c01058d2cc9e08f85b5f"
  },
  {
    "url": "categories/electron/index.html",
    "revision": "19dcf0d2f645a4f1a755e69b9f214a6b"
  },
  {
    "url": "categories/index.html",
    "revision": "a9a8d32f284838534f376b911a601366"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2530650413dbbe43140e4b2811d1d311"
  },
  {
    "url": "categories/liunx/index.html",
    "revision": "a2c682c82850c9831f8546cebe0c254a"
  },
  {
    "url": "categories/liunx/page/2/index.html",
    "revision": "b20e13c727eb64b2bbf3bad577d0970a"
  },
  {
    "url": "categories/liunx/page/3/index.html",
    "revision": "3c9176b432aa8b2461a305295ee9515e"
  },
  {
    "url": "categories/manual/index.html",
    "revision": "593ecdcc02e34328bf21a9522f32dbc7"
  },
  {
    "url": "categories/manual/page/2/index.html",
    "revision": "a0b44b4992e28e53fc92cf87df1070d3"
  },
  {
    "url": "categories/networking/index.html",
    "revision": "f2db01db7ddef8591b56dc9ba14698fe"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "958a22819a516b9ef3c793648a85083f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "9afe30200c9e1b5f9eee9676842ec92f"
  },
  {
    "url": "categories/pentest/index.html",
    "revision": "dc62baca8d8b299921d4e4681537ef0d"
  },
  {
    "url": "categories/vuejs/index.html",
    "revision": "df4bb02818690bb4ad34c43f2df4676a"
  },
  {
    "url": "categories/vuejs/page/2/index.html",
    "revision": "4cff0cecb1a6fb88d59b271540a9b754"
  },
  {
    "url": "categories/web/index.html",
    "revision": "14d75914d6c3c12607b20f880a4cd59d"
  },
  {
    "url": "categories/web/page/2/index.html",
    "revision": "23d480dadcee178018870c911afd5144"
  },
  {
    "url": "categories/web/page/3/index.html",
    "revision": "3cfcba088a96ba1afdcd8d07d293098a"
  },
  {
    "url": "categories/windows/index.html",
    "revision": "ba3a87ee61b60d13e21de5150dc19643"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "ee9693b6d1323c35ab47222d8f2cb237"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "110f83b3656390243816823b863d19f9"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "083fd5693709f1bb756d7146f92cfff0"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "0ad9644b653ab367462d48e9cb31653f"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "6537810f5c1f67bd9f285ab8f817dc33"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "7afb2b4fd95bd147a9f9c9dcd8be96a7"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "322c094e811fa22948fa838553168be6"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "6537810f5c1f67bd9f285ab8f817dc33"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "86902dea6b16aaf02b26ef1299313344"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "9c4b5b6a6755765277a8d344cef51a90"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "e217effa9bf49048ebe5f0c3c0b9bf83"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "73680937b571e80d379a0d099979548f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "cf0c951947bdfe5abdfc0fe63e7ff297"
  },
  {
    "url": "index.html",
    "revision": "cf788e0255e9b9f512ce66874dde1d8e"
  },
  {
    "url": "kesshouban/model.2048/texture_00.png",
    "revision": "2e6411636e81d3e58e8315bfa586ba8d"
  },
  {
    "url": "project/index.html",
    "revision": "5d2aae6a03782fcc42f9b98b69299ffc"
  },
  {
    "url": "tag/Angular.js/index.html",
    "revision": "3d4d94edfc163c6f5faca8da55d038eb"
  },
  {
    "url": "tag/Angularjs/index.html",
    "revision": "a38023be880c515577ae4d721dd9ff15"
  },
  {
    "url": "tag/App/index.html",
    "revision": "9370e3b81a12b865638a22cea86b405b"
  },
  {
    "url": "tag/Code/index.html",
    "revision": "abc83fd42f6720631eeb40b58e4368a6"
  },
  {
    "url": "tag/Code/page/2/index.html",
    "revision": "ac4e36ff9d47be1e18ca15b13e5d500b"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "b839e660ffdf49f19020192626fe5c69"
  },
  {
    "url": "tag/Component/index.html",
    "revision": "984d1ff2c3e8dc5dc104055c902804f3"
  },
  {
    "url": "tag/Criterion/index.html",
    "revision": "fdc898fb5ff2b4b459a5f52d20dca8c0"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "1a47a1902fedd6806940ec101874a36f"
  },
  {
    "url": "tag/CSS/page/2/index.html",
    "revision": "e215432b66e39621b7d787e78e6c8c39"
  },
  {
    "url": "tag/Debug/index.html",
    "revision": "93684c44c5a0009bfbb140035bee5bf0"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "125ec0918fdd32891db1a1978ee7552e"
  },
  {
    "url": "tag/Electron/index.html",
    "revision": "91890df1595fc0b0d91cf2ef6db0fe84"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "ef7bdd96bbe4f064e6f6f9a979d0d646"
  },
  {
    "url": "tag/Hexo/index.html",
    "revision": "c55434ffaaaf543c6374b83511b1b4cd"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "68c9dd9c38b3785207fd953ed51c4171"
  },
  {
    "url": "tag/HTML5/index.html",
    "revision": "5bf7be2378e80ec9914f6a12259d6b39"
  },
  {
    "url": "tag/HTML5/page/2/index.html",
    "revision": "6b21ca7a26903e9a082d40dd2daf7f80"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "bb6aabc33f5b853afc6855f3dffd3939"
  },
  {
    "url": "tag/index.html",
    "revision": "b846e5cfd08189514829ae37793e95c9"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "4c40ccd06eb9397a2cdf826a6e2cc3ee"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "25e11db991d678f86fc753067733f53d"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "b5588136bfb4ddbc49832783b9d4b357"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "56cf778205dc110898dcc7dce7c394da"
  },
  {
    "url": "tag/Layout/index.html",
    "revision": "9c9308d9ff2d99c1450a2554053ffdfc"
  },
  {
    "url": "tag/Liunx/index.html",
    "revision": "bda8c7eb3f30850738b3e23e9619ff72"
  },
  {
    "url": "tag/Liunx/page/2/index.html",
    "revision": "5dca74fce6ad7440fb1d3154e2dad15c"
  },
  {
    "url": "tag/Liunx/page/3/index.html",
    "revision": "74e840228acf261069199db1cf1745ec"
  },
  {
    "url": "tag/Liunx/page/4/index.html",
    "revision": "17c6450fe7e757c28410870426ad6a9a"
  },
  {
    "url": "tag/Liunx/page/5/index.html",
    "revision": "bcc0acfff4b0292dde8feefe788fd089"
  },
  {
    "url": "tag/Maven/index.html",
    "revision": "a8727b0602ff253b52e4e3b5f6c45b6b"
  },
  {
    "url": "tag/Moblie/index.html",
    "revision": "bd83a9c0a2f21aaa30d20467e152b1ce"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "7272a74cc5d0276bb86dd9856370dc62"
  },
  {
    "url": "tag/Mybatis/index.html",
    "revision": "590cd0500b511021578397c5f2e48e0c"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "b9d9d3f7e6c282d4e4de4ab22dd7db7b"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "ade99ab8898b9f1b67249578591ab8e4"
  },
  {
    "url": "tag/Network/index.html",
    "revision": "a9563e502c4a244a08f3f378c6137709"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "1cd963a8bc90e438d44909534477bc30"
  },
  {
    "url": "tag/Node.js/page/2/index.html",
    "revision": "35aaf54649eaf75c019285a23ba9c338"
  },
  {
    "url": "tag/Node.js/page/3/index.html",
    "revision": "78ce24eb24efb16c16a3ecbb08008a2b"
  },
  {
    "url": "tag/Node.js/page/4/index.html",
    "revision": "f96887d714a3d3c1143ca0c913c84d3c"
  },
  {
    "url": "tag/Pentest/index.html",
    "revision": "d94994dfd824ea8d18cc5022b7dcb57d"
  },
  {
    "url": "tag/Pentest/page/2/index.html",
    "revision": "f8cf90df8d7fe5c476b9b48f8953a51b"
  },
  {
    "url": "tag/PHP/index.html",
    "revision": "756cd39ecec4c854bc02425663a98660"
  },
  {
    "url": "tag/Protocol/index.html",
    "revision": "1069aacc37bda69ccdf8143a7fe0b7a0"
  },
  {
    "url": "tag/Protocol/page/2/index.html",
    "revision": "80a038137291687ba897365b86b52191"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "405b33e4771ca5d61476da7291b8860e"
  },
  {
    "url": "tag/React.js/index.html",
    "revision": "6fafec5a195c0366c82b1612bb129969"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "34a45a05f431eefee738fa974ed5f5d8"
  },
  {
    "url": "tag/Security/index.html",
    "revision": "7fe4f22253b52fc2c6020125ce773ff0"
  },
  {
    "url": "tag/Security/page/2/index.html",
    "revision": "4ff11d5a1cea1ee1361b6a910a4afb17"
  },
  {
    "url": "tag/Security/page/3/index.html",
    "revision": "7eea2f6e1351d06ae63fae4dc6aef6b0"
  },
  {
    "url": "tag/Service/index.html",
    "revision": "b5c2f739cb062668ad8e31b7d980972d"
  },
  {
    "url": "tag/SpringBoot/index.html",
    "revision": "b3df48c2d1b5fc0cf324b7b2e862ed82"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "9df460a13bf69dca17b083cfe21cde37"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "db6c7926a91c943419a0fd8944598cf5"
  },
  {
    "url": "tag/Vue.js/page/2/index.html",
    "revision": "ab23c8e75708c7bb80ceb18131436424"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "b02e50bf4206db39a778cbfabeb8fc38"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "7871f6aae0804ee82b67dd77de94db7a"
  },
  {
    "url": "tag/VueRouter/index.html",
    "revision": "0569f38b19ae6d5a04257972a01d9389"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "8806f7bb7a92af09bcc42ff50863c5ef"
  },
  {
    "url": "tag/WEB/index.html",
    "revision": "cc7e0766ebb09dd3fbe8358bc682d302"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "99559359affe9d12a13a25820df069f7"
  },
  {
    "url": "tag/Weex/index.html",
    "revision": "a73df34249d50791eb4300a97ce67bf4"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "5005905d9808228aa45662a967c16088"
  },
  {
    "url": "timeline/index.html",
    "revision": "1aa58d5eeeab0b527c394e7b4bc35b99"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "fdfea3557e38ce4c7aea7378a0cd589e"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "66685a92611120168c7e186947a25728"
  },
  {
    "url": "views/design/install-mongodb-on-windwos.html",
    "revision": "a56cc2763dc19dbe7ac13b4f13905410"
  },
  {
    "url": "views/design/js-generated-random-number.html",
    "revision": "490603cec0ded84f1a96a977e2811652"
  },
  {
    "url": "views/design/js-get-url-request.html",
    "revision": "5afa7c060c41bf7778effc4624738a3d"
  },
  {
    "url": "views/design/layout-project-for-moblie.html",
    "revision": "f736df197f4eb5b4ab8eba05cb75ac49"
  },
  {
    "url": "views/design/need-a-super-software.html",
    "revision": "9b88bdeac9a42d2c1a5272a7299b56f0"
  },
  {
    "url": "views/design/web-design-specification.html",
    "revision": "8622f2806c66487c722131262593229a"
  },
  {
    "url": "views/electron/learn-electron-vue.html",
    "revision": "e4e5d735cf397fafabd5de6f86c81db4"
  },
  {
    "url": "views/java/install-jdk-on-windows.html",
    "revision": "9583d2679e58d98842615ff377abb22f"
  },
  {
    "url": "views/java/spring-boot-by-idea-hot-deploy.html",
    "revision": "921b752858a3dc19112ec484331725e9"
  },
  {
    "url": "views/java/spring-boot-integration-mybatis.html",
    "revision": "5eb38f2098ba4d353ba629d4cc334297"
  },
  {
    "url": "views/liunx/account-security.html",
    "revision": "9b299e46c07d1c2f186a3a42ba8123b2"
  },
  {
    "url": "views/liunx/file-compression-and-decompression.html",
    "revision": "e2dfa7660ded44c670add153224822e8"
  },
  {
    "url": "views/liunx/iptables-settings.html",
    "revision": "c42ece56c61531d2e9a6eded5dc2f2cc"
  },
  {
    "url": "views/liunx/liunx-basic-operation.html",
    "revision": "3e2bf60767a882dc8f35a7eaab19c586"
  },
  {
    "url": "views/liunx/liunx-command-testing.html",
    "revision": "2d3fd726896983029e55d370948fbff8"
  },
  {
    "url": "views/liunx/liunx-directory-structure.html",
    "revision": "615b7cf0fd0c187bb8301c15c9c21d1e"
  },
  {
    "url": "views/liunx/liunx-service-apache.html",
    "revision": "001a700b08ae0c621b4c67421a9d5868"
  },
  {
    "url": "views/liunx/liunx-service-dns.html",
    "revision": "ae728cf2d65d3d4068aeb1ff59a8e42c"
  },
  {
    "url": "views/liunx/liunx-service-ftp.html",
    "revision": "3713f8422a268adc3d33d3fa0c468786"
  },
  {
    "url": "views/liunx/liunx-service-samba.html",
    "revision": "f8b886b41f415bc0e32dc0cc960c753a"
  },
  {
    "url": "views/liunx/liunx-service-ssh.html",
    "revision": "a8b77cd8e427e4988f467acb2f3aa215"
  },
  {
    "url": "views/liunx/liunx-service.html",
    "revision": "658c124fc4f9590e8bb42200eced26ec"
  },
  {
    "url": "views/liunx/log-audit-function.html",
    "revision": "bd18be8b950a6afd1bd37cfd823ffeb1"
  },
  {
    "url": "views/liunx/mysql-database-user-policy.html",
    "revision": "425ed1aca2f0c940b29f8f550ae60894"
  },
  {
    "url": "views/liunx/service-and-process-management.html",
    "revision": "a0023ae48ef4e98e645a80c06980f69a"
  },
  {
    "url": "views/liunx/special-permissions-for-files.html",
    "revision": "7a6d6d77c81c188a1c941f96761835b3"
  },
  {
    "url": "views/liunx/talk-ssh-service.html",
    "revision": "d31002d7bd4a0efaad2d6a8b20373a32"
  },
  {
    "url": "views/liunx/ubuntu-enble-root.html",
    "revision": "8e9faa6b908ac095511528db653d3615"
  },
  {
    "url": "views/liunx/usage-of-vim.html",
    "revision": "b97fd207ca42c4a269ff3137df4562bc"
  },
  {
    "url": "views/liunx/user-and-file-permissions.html",
    "revision": "09857d7add6db3f8207df5fa25ac92e4"
  },
  {
    "url": "views/liunx/user-management.html",
    "revision": "fb601cfe6a55006064b35da085f491bb"
  },
  {
    "url": "views/manual/debug-for-chrome-browser.html",
    "revision": "bdec1b49e8e10154816e9f3757109341"
  },
  {
    "url": "views/manual/emmet-usage-examples.html",
    "revision": "8183370e2fb40969aabcf909c2134dc5"
  },
  {
    "url": "views/manual/flexbox-layout.html",
    "revision": "092d42091f7d5a9f51ac8e1cd57b4a0c"
  },
  {
    "url": "views/manual/git-commit-specification-guide.html",
    "revision": "f26841667b25ed3fee34e93d184a0760"
  },
  {
    "url": "views/manual/git-push-setting.html",
    "revision": "31b3c52651c2352efa2c63107283fcb2"
  },
  {
    "url": "views/manual/gulp-usage-guide.html",
    "revision": "792d4a428bedf52876e37b6c37677bbc"
  },
  {
    "url": "views/manual/restfui-api.html",
    "revision": "70ad769d88c52be706dcbaf6b7c313af"
  },
  {
    "url": "views/manual/sass-usage-guide.html",
    "revision": "6fb9adfff2e2ab920106d285d0b8ea8e"
  },
  {
    "url": "views/manual/software-version-cycle.html",
    "revision": "b7174a0c4e6631337aeb2296b2df427a"
  },
  {
    "url": "views/manual/usage-of-docker.html",
    "revision": "8def451debe95e4efe05abe3be7f5522"
  },
  {
    "url": "views/manual/webpack-guide.html",
    "revision": "149a213d62543a6250419ab7caddd2e5"
  },
  {
    "url": "views/networking/common-port.html",
    "revision": "ba24f3bc43bb1e85c842cae86af3150c"
  },
  {
    "url": "views/networking/ip-address-planning.html",
    "revision": "d2c21b0e0ec4e1b9d5d9f02bfc701d38"
  },
  {
    "url": "views/networking/socks-proxy-rebound.html",
    "revision": "4caf55ca7ad35184ff9c1721bfa811b5"
  },
  {
    "url": "views/networking/ubuntu-connect-wifi.html",
    "revision": "7d4995f1d81a11872beff143c2e84280"
  },
  {
    "url": "views/networking/ubuntu-over-the-wall.html",
    "revision": "42f33221a21b3d3cd01553a815077905"
  },
  {
    "url": "views/nodejs/hexo-next-advanced-settings.html",
    "revision": "8ae986d8ccdc65b153105a4ef63125e8"
  },
  {
    "url": "views/nodejs/insatll-ghost-on-your-vps.html",
    "revision": "d77224f7765f315159346f726d140a21"
  },
  {
    "url": "views/nodejs/install-hexo-next-on-github.html",
    "revision": "6ee8d76db0db0a610bf3262922083dd4"
  },
  {
    "url": "views/nodejs/talk-npm-on-node-js.html",
    "revision": "092c53119805fb0668739ee45d430de7"
  },
  {
    "url": "views/nodejs/talk-package-json-on-npm.html",
    "revision": "852680298c88e1c9e6a50c8a28c29a87"
  },
  {
    "url": "views/nodejs/usage-nvm-to-install-node-js.html",
    "revision": "9346f1533a3262862912c94e06eb9fab"
  },
  {
    "url": "views/nodejs/usage-pnpm.html",
    "revision": "9075bf9abe633a204dc5f6002c0bf931"
  },
  {
    "url": "views/nodejs/vuepress-blog-on-github.html",
    "revision": "e33a502ea0bb0527c3ea704a8e7c95e1"
  },
  {
    "url": "views/other/sql-grammar.html",
    "revision": "f6c7bbe0b98def81a56badb845e3fe0d"
  },
  {
    "url": "views/other/study-angularjs-notes.html",
    "revision": "48cba2937e27545a5636cf441f24f299"
  },
  {
    "url": "views/other/update-mysql-root-password.html",
    "revision": "aae51dec39907efd5f3df11a36ab9bac"
  },
  {
    "url": "views/pentest/liunx-security-command.html",
    "revision": "08eea3c3c138cf88098a3258ca5558d2"
  },
  {
    "url": "views/pentest/pentest-basic-knowledge.html",
    "revision": "91d8df9cac96268ecb64add2149edabc"
  },
  {
    "url": "views/pentest/pentest-tips-and-tricks.html",
    "revision": "ac5eaafbf8603b1bb110497098fda020"
  },
  {
    "url": "views/pentest/php-file-inclusion.html",
    "revision": "df326aad16294c8c4f1cca47ec609ea9"
  },
  {
    "url": "views/pentest/shell-listen-for-new-files.html",
    "revision": "ab59ae1aef44ec58c5336e9bdde1bc76"
  },
  {
    "url": "views/pentest/usage-of-burp.html",
    "revision": "89ca0c9c46001f38769d9fab48862787"
  },
  {
    "url": "views/pentest/usage-of-nmap.html",
    "revision": "c8acca504a841c4684fcc27630bc4090"
  },
  {
    "url": "views/pentest/usage-of-sqlmap.html",
    "revision": "1bd804f0c81349418b8b3eb57172bce0"
  },
  {
    "url": "views/vuejs/avue-framework-practice.html",
    "revision": "777e8b251dfbe8b97f35f111fbbb10d6"
  },
  {
    "url": "views/vuejs/custom-component-library-first.html",
    "revision": "1902e25460742af777f556dff01bfff0"
  },
  {
    "url": "views/vuejs/custom-component-library-second.html",
    "revision": "55738fb0ed5649f0a7f65958a45b662b"
  },
  {
    "url": "views/vuejs/custom-component-library-third.html",
    "revision": "6191c232b4c56504c04484eac7d080eb"
  },
  {
    "url": "views/vuejs/fill-the-pit-with-vuejs.html",
    "revision": "bd097705453763887f81b4e78cd4d6a8"
  },
  {
    "url": "views/vuejs/learning-vue3.html",
    "revision": "5f24dcd6026fc8e4585f2ec44db7aff0"
  },
  {
    "url": "views/vuejs/usage-typescript-in-vue-family-bucket.html",
    "revision": "b7c440407764795cc0d0e24e8b476f49"
  },
  {
    "url": "views/vuejs/usage-vue-quill-editor-in-vue-js.html",
    "revision": "d742e15749ee2d08584f9bd86ec60f75"
  },
  {
    "url": "views/vuejs/usage-vuefire-and-firebase-on-vue-js.html",
    "revision": "55a7cea2519ace1f4f3b081a41ab390d"
  },
  {
    "url": "views/vuejs/usage-vuex-on-vue-js-project.html",
    "revision": "70af643f7774e34c54ac74a9666513ae"
  },
  {
    "url": "views/vuejs/usage-wangEditor-in-vue-js.html",
    "revision": "267335201adbee4eb8ee031c67d86e79"
  },
  {
    "url": "views/vuejs/usage-watch-in-vue-js.html",
    "revision": "600e0fbaed86e7616fd2d027e242d26c"
  },
  {
    "url": "views/vuejs/utility-method-in-vue-js.html",
    "revision": "3e50ecff3b1e09c842733d33f8064dda"
  },
  {
    "url": "views/vuejs/vscode-config-vuejs.html",
    "revision": "7997ce818f076f90ab031ac04070da9f"
  },
  {
    "url": "views/vuejs/vue-emit-events-by-bus.html",
    "revision": "9573cacea98fa5515a73f74babc12c5c"
  },
  {
    "url": "views/vuejs/vue-performance-optimization.html",
    "revision": "821ad75c540504ee4e4e510c662ada24"
  },
  {
    "url": "views/vuejs/vuejs-axios.html",
    "revision": "b846cc3003ab209edb2f732ae0521a5a"
  },
  {
    "url": "views/vuejs/weex-beginner-notes.html",
    "revision": "10edc3cdb99dd98386b35993aed6bb9e"
  },
  {
    "url": "views/web/browser-object-model.html",
    "revision": "8bc936b04ffee09865cea6fe274ec3ac"
  },
  {
    "url": "views/web/collect-common-regular-expressions.html",
    "revision": "90c769440e393dc69233e52dc2ceb59e"
  },
  {
    "url": "views/web/css-code-writing.html",
    "revision": "df2f6b8408b5381fce80a5f3916a3ad1"
  },
  {
    "url": "views/web/css-cold-knowledge.html",
    "revision": "a7e22fb3e96a4863745321fe088ca5fa"
  },
  {
    "url": "views/web/css-length-unit.html",
    "revision": "bbf10a55108712c56e16117b1fde2162"
  },
  {
    "url": "views/web/css-new-features.html",
    "revision": "dd537aeb217363710e464d23a2cac20e"
  },
  {
    "url": "views/web/css-selector-introduction.html",
    "revision": "54ca375187b285a5fd89a4030ca697c9"
  },
  {
    "url": "views/web/dom-event-in-javascript.html",
    "revision": "637dbe920a76d8a280cebab7142a0ebb"
  },
  {
    "url": "views/web/es6-and-jquery.html",
    "revision": "74874783ce9e0562d651c18f0fe37bec"
  },
  {
    "url": "views/web/es6-practical-method.html",
    "revision": "c695d717c32049a6be6493c7b41ac99c"
  },
  {
    "url": "views/web/html-and-css-code-criterion.html",
    "revision": "d7bbbf75196006fbea7de69235405cc2"
  },
  {
    "url": "views/web/html5-cold-knowledge.html",
    "revision": "f1dac6f3259f801e267992f8488fa61b"
  },
  {
    "url": "views/web/html5-head-meta.html",
    "revision": "2ca1d806761eed8256e6b54f8f335118"
  },
  {
    "url": "views/web/javascript-2-jquery.html",
    "revision": "26c39ccfa166742de589dca2329cc2d1"
  },
  {
    "url": "views/web/learning-es6.html",
    "revision": "f1bbbf356cf914e73e32898f19a18c73"
  },
  {
    "url": "views/web/nofollow-proper-use-of-the-way.html",
    "revision": "0f0c94742490cb7608c80c90c3ab5277"
  },
  {
    "url": "views/web/some-suggest-for-writing-css.html",
    "revision": "b9cb85bc9d1a5111ca797c99e16655e8"
  },
  {
    "url": "views/web/some-tips-for-console.html",
    "revision": "e24d13d587da264560ef1b73f2e20efc"
  },
  {
    "url": "views/web/some-tips-for-jquery.html",
    "revision": "7f34be42f0fb25e1baa62bcc6368d336"
  },
  {
    "url": "views/web/talk-web-frame.html",
    "revision": "eba0a80a020cd6f4ba704ca00c5da245"
  },
  {
    "url": "views/web/web-interview-experience.html",
    "revision": "cbf26a179afe090c5700dd5bbc03638c"
  },
  {
    "url": "views/web/web-knowledge.html",
    "revision": "0cd8277e8ba16513d4ae0c72a18dabe2"
  },
  {
    "url": "views/web/web-unpopular-knowledge.html",
    "revision": "e52ffaf3a8cedaff344d8e3b9907ddd6"
  },
  {
    "url": "views/windows/cmd-commands.html",
    "revision": "f8aad8063ec059023167b30dffafd1c0"
  },
  {
    "url": "views/windows/file-header-and-tail.html",
    "revision": "2bf078106eef580a48ea773c693f5e33"
  },
  {
    "url": "views/windows/run-commands.html",
    "revision": "fde987d782982f72607b3b623840a6c8"
  },
  {
    "url": "WeChat.png",
    "revision": "63fb02266347d45012b5dd9e50fffe49"
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
