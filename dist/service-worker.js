importScripts("/precache-manifest.69f4191103dd9c1c82eeb790d28152f9.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.skipWaiting();
workbox.clientsClaim();

