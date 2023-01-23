import RestaurantCard from "../components/restaurant/RestaurantCard";
import elementHelper from "../utils/element-helper";
import messageHelper from "../utils/message-helper";
import favouriteRestaurantStore from "../utils/favourite-restaurant-store";

const render = async () => `
  <main class="favourite-main" id="main" tabindex="0">
    <div class="cards" id="restaurants-wrapper">
    </div>
  </main>
`;

const renderRestaurants = (restaurantsWrapper, restaurants) => {
  restaurants.forEach((restaurant) =>
    restaurantsWrapper.appendChild(new RestaurantCard(restaurant))
  );
};

const postRender = async () => {
  const restaurantsWrapper = document.getElementById("restaurants-wrapper");
  try {
    const favouriteRestaurants = await favouriteRestaurantStore.getAll();
    elementHelper.clearElementContent(restaurantsWrapper);
    if (favouriteRestaurants.length === 0)
      messageHelper.showEmptyFavouriteMessage(restaurantsWrapper);
    renderRestaurants(restaurantsWrapper, favouriteRestaurants);
  } catch (error) {
    messageHelper.showRenderErrorMessage(restaurantsWrapper);
  }
};

export default { render, postRender };
