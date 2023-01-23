import Favourite from "../pages/favourite";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import RestaurantDetail from "../pages/restaurant-detail";

const routes = {
  "/": Home,
  "/restaurant/:parameter": RestaurantDetail,
  "/favourite": Favourite,
  404: NotFound,
};

export default routes;
