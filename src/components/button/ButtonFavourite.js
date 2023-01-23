import feather from "feather-icons";

class ButtonFavourite extends HTMLButtonElement {
  #restaurant = null;

  #restaurantModel = null;

  #isRestaurantExist = null;

  constructor(restaurant, restaurantModel) {
    super();
    this.#restaurant = restaurant;
    this.#restaurantModel = restaurantModel;
    this.init();
  }

  set restaurant(restaurant) {
    this.#restaurant = restaurant;
  }

  get restaurant() {
    return this.#restaurant;
  }
  get restaurantModel() {
    return this.#restaurantModel;
  }

  async clickHandler() {
    if (this.#isRestaurantExist)
      await this.#restaurantModel.remove(this.#restaurant.id);
    else await this.#restaurantModel.insert(this.#restaurant);
    await this.init();
  }

  async init() {
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

    this.title = "Add To Favourite";
    this.innerHTML = heartStrokeIcon;

    this.classList.add("btn", "btn--outline");
    this.onclick = this.clickHandler;

    this.#isRestaurantExist = await this.#restaurantModel.get(
      this.#restaurant.id
    );
    if (this.#isRestaurantExist) {
      this.title = "Remove From Favourite";
      this.innerHTML = heartFillIcon;
    }
  }
}

customElements.define("button-favourite", ButtonFavourite, {
  extends: "button",
});

export default ButtonFavourite;
