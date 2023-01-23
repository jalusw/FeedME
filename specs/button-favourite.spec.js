import ButtonFavourite from "../src/components/button/ButtonFavourite";
import favouriteRestaurantStore from "../src/utils/favourite-restaurant-store";
import feather from "feather-icons";

describe("Button Favourite", () => {
  let buttonFavourite;
  let restaurantModel;
  const heartStrokeIcon = feather.icons.heart.toSvg({
    width: "1.6rem",
    height: "1.6rem",
    stroke: "#d00",
  });
  const heartFillIcon = feather.icons.heart.toSvg({
    width: "1.6rem",
    height: "1.6rem",
    fill: "#d00",
  });
  beforeEach(async () => {
    buttonFavourite = new ButtonFavourite(
      {
        id: "1",
        name: "One",
      },
      favouriteRestaurantStore
    );

    restaurantModel = buttonFavourite.restaurantModel;

    const restaurantsInModel = await restaurantModel.getAll();
    restaurantsInModel.forEach(
      async (restaurant) => await restaurantModel.remove(restaurant.id)
    );

    await buttonFavourite.init();
  });

  it("Should reject on attempt to initialize invalid restaurant", async () => {
    buttonFavourite.restaurant = 1;
    await expectAsync(buttonFavourite.init()).toBeRejectedWithError();
  });

  it("Should render heart stroke icon on init", () => {
    expect(buttonFavourite.innerHTML).toContain(heartStrokeIcon);
  });

  it("Should render heart fill icon if restaurant is favourited", async () => {
    await restaurantModel.insert(buttonFavourite.restaurant);
    await buttonFavourite.init();
    expect(buttonFavourite.innerHTML).toContain(heartFillIcon);
  });

  it("Should have title property with Add To Favourite on init", () => {
    expect(buttonFavourite.title).toBe("Add To Favourite");
  });

  it("Should hvae title property with Remove From Favourite if restaurant is favourited", async () => {
    await restaurantModel.insert(buttonFavourite.restaurant);
    await buttonFavourite.init();
    expect(buttonFavourite.title).toBe("Remove From Favourite");
  });

  it("Should add restaurant to  model when its clicked and restaurant is not favourited", async () => {
    buttonFavourite.dispatchEvent(new Event("click"));
    await expectAsync(
      restaurantModel.get(buttonFavourite.restaurant.id)
    ).toBeResolvedTo(buttonFavourite.restaurant);
  });

  it("Should remove restaurant from model when its clicked and restaurant is favourited", async () => {
    await restaurantModel.insert(buttonFavourite.restaurant);
    await buttonFavourite.init();
    buttonFavourite.dispatchEvent(new Event("click"));
    await expectAsync(
      restaurantModel.get(buttonFavourite.restaurant.id)
    ).toBeResolvedTo(undefined);
  });

  it("Should call clickHandler when its clicked", async () => {
    spyOn(buttonFavourite, "clickHandler");
    await buttonFavourite.init();
    buttonFavourite.dispatchEvent(new Event("click"));
    expect(buttonFavourite.clickHandler).toHaveBeenCalled();
  });

  it("Should reject on attempt to add invalid restaurant", async () => {
    buttonFavourite.restaurant = { id: "1" };
    await buttonFavourite.init();
    await expectAsync(buttonFavourite.clickHandler()).toBeRejectedWithError();
  });

  it("Should reject on attempt to  remove invalid restaurant ", async () => {
    buttonFavourite.restaurant = { id: "2" };
    await buttonFavourite.init();
    await expectAsync(buttonFavourite.clickHandler()).toBeRejectedWithError();
  });
});
