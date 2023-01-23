import RestaurantCard from "../components/restaurant/RestaurantCard";
import apiHelper from "../utils/api-helper";
import elementHelper from "../utils/element-helper";
import messageHelper from "../utils/message-helper";

const render = async () =>
  `
  <header class="home-header">
    <div class="home-header__content-wrapper">
      <h1 lang="id" class="home-header__heading">
        Laper dan Bingung Mau Makan Dimana? FeedME solusinya
      </h1>
      <p lang="id" class="home-header__text">
        Kami menyediakan rekomendasi restoran - restoran yang tersedia di
        berbagai daerah di indonesia.
      </p>
    </div>
  </header>
  <main class="home-main" id="main" tabindex="0">
    <div class="cards" id="restaurants-wrapper">
      <restaurant-card-skeleton ></restaurant-card-skeleton/>
      <restaurant-card-skeleton ></restaurant-card-skeleton/>
      <restaurant-card-skeleton ></restaurant-card-skeleton/>
      <restaurant-card-skeleton ></restaurant-card-skeleton/>
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
    const restaurants = await apiHelper.getRestaurants();
    if (restaurants.length === 0) {
      messageHelper.showEmptyRestaurantMessage(restaurantsWrapper);
      return;
    }

    elementHelper.clearElementContent(restaurantsWrapper);
    renderRestaurants(restaurantsWrapper, restaurants);
  } catch (error) {
    messageHelper.showRenderErrorMessage(restaurantsWrapper);
  }
};

export default { render, postRender };
