import { precacheAndRoute } from "workbox-precaching";
import {
  googleFontsCache,
  imageCache,
  staticResourceCache,
} from "workbox-recipes";
import { registerRoute, setDefaultHandler } from "workbox-routing";
import { NetworkFirst, StaleWhileRevalidate } from "workbox-strategies";

/* eslint-disable-next-line no-restricted-globals */
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  "https://restaurant-api.dicoding.dev/*",
  new NetworkFirst({
    cacheName: "api-cache",
  })
);

googleFontsCache();
staticResourceCache();
imageCache();
setDefaultHandler(new StaleWhileRevalidate());
