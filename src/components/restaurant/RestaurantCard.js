import feather from "feather-icons";
import apiHelper from "../../utils/api-helper";
import ButtonFavourite from "../button/ButtonFavourite";
import favouriteRestaurantStore from "../../utils/favourite-restaurant-store";

class RestaurantCard extends HTMLElement {
  constructor(restaurant) {
    super();
    this._restaurant = restaurant;
    if (
      typeof this._restaurant === "object" &&
      "id" in this._restaurant &&
      "name" in this._restaurant
    )
      this.init();
  }

  render() {
    const smallImageUrl = apiHelper.generateSmallImageUrl(
      this._restaurant.pictureId
    );
    const mediumImageUrl = apiHelper.generateMediumImageUrl(
      this._restaurant.pictureId
    );
    const largeImageUrl = apiHelper.generateLargeImageUrl(
      this._restaurant.pictureId
    );

    const starIcon = feather.icons.star.toSvg({
      height: "1em",
      width: "1em",
      stroke: "#fc0",
    });

    const mapPinIcon = feather.icons["map-pin"].toSvg({
      height: "1em",
      width: "1em",
      stroke: "#d00",
    });

    this.innerHTML = `
    <article>
      <header class="card__header">
        <picture>
          <source 
            srcset="${smallImageUrl}"
            media="(max-width: 480px)"
          />
          <source 
            srcset="${mediumImageUrl}"
            media="(max-width: 768px)"
          />
          <source 
            srcset="${largeImageUrl}"
          />
          <img 
            class="skeleton card__image" 
            src="${smallImageUrl}"
            height="180"
            width="100%"
            alt=""
            loading="lazy"
          />
        </picture>
        <div class="card__title-wrapper">
          <strong class="card__title">
            ${this._restaurant.name}
          </strong>
          <span class="card__rating-wrapper">
            ${starIcon}
            ${this._restaurant.rating || ""}
          </span>
        </div>
        <address>
          ${mapPinIcon}
          ${this._restaurant.city || ""}
        </address>
      </header>
      <section class="card__content">
        <p class="card__text">
          ${this._restaurant.description || "No Description Provided"}
        </p>
      </section>
      <footer class="card__footer">
        <a class="btn btn--outline" href="/#/restaurant/${this._restaurant.id}">
          Detail
        </a>
      </footer>
    </article>
    `;
    this.querySelector("footer.card__footer").appendChild(
      new ButtonFavourite(this._restaurant, favouriteRestaurantStore)
    );
  }

  init() {
    this.render();
  }
}

customElements.define("restaurant-card", RestaurantCard);

export default RestaurantCard;
