import { Workbox } from "workbox-window";

const serviceWorkerRegister = () => {
  const workbox = new Workbox("/service-worker.js");
  workbox.register();
};

export default serviceWorkerRegister;
