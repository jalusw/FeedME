import "regenerator-runtime";
import "./sass/index.scss";

import "./components/button/ButtonFavourite";
import "./components/restaurant/RestaurantCard";
import "./components/restaurant/RestaurantCardSkeleton";
import "./components/skeleton/Skeleton";
import "./components/skeleton/SkeletonRounded";

import handleRoute from "./router/router";

import elementHelper from "./utils/element-helper";
import serviceworkerRegister from "./utils/service-worker-register";

window.addEventListener("hashchange", handleRoute);

window.addEventListener("load", serviceworkerRegister);

document.addEventListener("DOMContentLoaded", () => {
  import("feather-icons").then((feather) => feather.replace());
  const navMenu = document.getElementById("nav-menu");
  const btnSkipToMain = document.getElementById("btn-skip-to-main");
  const btnOpenNavMenu = document.getElementById("btn-open-nav-menu");
  const btnCloseNavMenu = document.getElementById("btn-close-nav-menu");
  const appWrapper = document.getElementById("app-wrapper");

  const toggleNavigation = () => {
    elementHelper.toggleElementClass(navMenu, "nav__links--open");
  };

  const hideNavigation = () => {
    elementHelper.removeElementClass(navMenu, "nav__links--open");
  };

  btnSkipToMain.addEventListener("click", () =>
    document.getElementById("main").focus()
  );

  btnOpenNavMenu.addEventListener("click", toggleNavigation);
  btnCloseNavMenu.addEventListener("click", toggleNavigation);
  appWrapper.addEventListener("click", hideNavigation);

  handleRoute();
});
