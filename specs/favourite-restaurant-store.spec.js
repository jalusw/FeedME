import itActAsRestaurantModel from "./contract/restaurant-model-contract";
import favouriteRestaurantStore from "../src/utils/favourite-restaurant-store";

describe("Favourite Restaurant Store Specifications", () => {
  beforeEach(async () => {
    const restaurants = await favouriteRestaurantStore.getAll();
    restaurants.forEach(
      async (restaurant) => await favouriteRestaurantStore.remove(restaurant.id)
    );
  });
  itActAsRestaurantModel(favouriteRestaurantStore);
});
