import feather from "feather-icons";
import ButtonFavourite from "../components/button/ButtonFavourite";
import apiHelper from "../utils/api-helper";
import elementHelper from "../utils/element-helper";
import messageHelper from "../utils/message-helper";
import favouriteRestaurantStore from "../utils/favourite-restaurant-store";

const render = async () => `
  <header class="restaurant-detail-header">
    <div class="restaurant-detail-header__image-wrapper" id="restaurant-image-wrapper">
      <skeleton-rounded data-height="200px" data-width="100%"></skeleton-rounded>
    </div>
    <div class="restaurant-detail-header__content-wrapper">
      <div class="restaurant-detail-header__name-wrapper" id="restaurant-name-wrapper">
        <skeleton-rounded data-height="1.265em" data-width="60%"></skeleton-rounded>
      </div>
      <div class="restaurant-detail-header__rating-wrapper" id="restaurant-rating-wrapper">
        <skeleton-rounded data-height="1em" data-width="1em"></skeleton-rounded>
        <skeleton-rounded data-height="1em" data-width="1.15em"></skeleton-rounded>
      </div>
      <div class="restaurant-detail-header__categories-wrapper" id="restaurant-categories-wrapper">
        <skeleton-rounded data-height="1em" data-width="1em"></skeleton-rounded>
        <skeleton-rounded data-height="1em" data-width="15%"></skeleton-rounded>
        <skeleton-rounded data-height="1em" data-width="20%"></skeleton-rounded>
      </div>
      <div class="restaurant-detail-header__address-wrapper" id="restaurant-address-wrapper">
        <skeleton-rounded data-height="1em" data-width="1em"></skeleton-rounded>
        <skeleton-rounded data-height="1em" data-width="45%"></skeleton-rounded>
      </div>
      <div class="restaurant-detail-header__favourite-wrapper" id="restaurant-favourite-wrapper">
        <skeleton-rounded data-height="2em" data-width="4rem"></skeleton-rounded>
      </div>
    </div>
  </header>
  <main class="restaurant-detail-main" id="main" tabindex="0">
    <section id="restaurant-description-wrapper">
      <skeleton-rounded data-height="1em" data-width="100%"></skeleton-rounded>
      <skeleton-rounded data-height="1em" data-width="100%"></skeleton-rounded>
      <skeleton-rounded data-height="1em" data-width="100%"></skeleton-rounded>
      <skeleton-rounded data-height="1em" data-width="100%"></skeleton-rounded>
      <skeleton-rounded data-height="1em" data-width="100%"></skeleton-rounded>
    </section>
    <div class="restaurant-detail-main__menus-wrapper">
      <section class="restaurant-detail-main__foods-wrapper" id="restaurant-foods-wrapper">
        <skeleton-rounded data-height="1em" data-width="30%"></skeleton-rounded>
        <ul class="restaurant-detail-foods">
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
        </ul>
      </section>
      <section class="restaurant-detail-main__drinks-wrapper" id="restaurant-drinks-wrapper">
        <skeleton-rounded data-height="1em" data-width="30%"></skeleton-rounded>
        <ul class="restaurant-detail-foods">
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
        </ul>
      </section>
    </div>
    <section class="restaurant-detail-main__form-review-wrapper">
      <h2 class="restaurant-detail-sub-heading">Reviews</h2>
      <form class="restaurant-detail-form-review" id="form-review">
        <div class="restaurant-detail-form-review__input-wrapper">
          <input class="input" type="text" name="name" placeholder="Your Name">
        </div>
        <div class="restaurant-detail-form-review__input-wrapper">
          <textarea class="input input--textarea" name="review" placeholder="Write Your Message Here ..." rows="4"></textarea>
        </div>
        <button id="btn-review-submit" class="btn btn--outline" type="submit" >
          ${feather.icons.send.toSvg({
            width: "1em",
            height: "1em",
          })}
          <span class="ml-2">
            Send
          </span>
        </button>
      </form>
      <div class="restaurant-detail-main__reviews-wrapper" id="restaurant-customer-reviews-wrapper">
        <article class="mt-8">
          <skeleton-rounded data-height="1em" data-width="15%"></skeleton-rounded>
          <skeleton-rounded class="mt-2" data-height="1em" data-width="100%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="95%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
        </article>
        <article class="mt-8">
          <skeleton-rounded data-height="1em" data-width="15%"></skeleton-rounded>
          <skeleton-rounded class="mt-2" data-height="1em" data-width="100%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="95%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
        </article>
        <article class="mt-8">
          <skeleton-rounded data-height="1em" data-width="15%"></skeleton-rounded>
          <skeleton-rounded class="mt-2" data-height="1em" data-width="100%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="95%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="85%"></skeleton-rounded>
        </article>
      </div>
    </section>
  </main>
`;

const renderImage = (imageWrapper, pictureId) => {
  const smallImageUrl = apiHelper.generateSmallImageUrl(pictureId);
  const mediumImageUrl = apiHelper.generateMediumImageUrl(pictureId);
  const largeImageUrl = apiHelper.generateLargeImageUrl(pictureId);

  /*  eslint-disable-next-line no-param-reassign */
  imageWrapper.innerHTML = `
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
        class="skeleton restaurant-detail-image"
        src="${smallImageUrl}"
        height="200"
        width="100%"
        alt=""
      />
    </picture>
  `;
};

const renderName = (nameWrapper, name) => {
  /*  eslint-disable-next-line no-param-reassign */
  nameWrapper.innerHTML = `
    <h1 class="restaurant-detail-name">${name}</h1>
  `;
};

const renderRating = (ratingWrapper, rating) => {
  const starIcon = feather.icons.star.toSvg({
    width: "1em",
    height: "1em",
    fill: "#fc0",
    stroke: "#fc0",
  });
  /*  eslint-disable-next-line no-param-reassign */
  ratingWrapper.innerHTML = `
    <span>
      ${starIcon}
    </span>
    <span>
      ${rating}
    </span>
  `;
};

const renderCategories = (categoriesWrapper, categories) => {
  const hashIcon = feather.icons.hash.toSvg({
    width: "1em",
    height: "1em",
    fill: "#333",
  });
  const categoriesList = categories.map((category) => category.name).join(", ");
  /*  eslint-disable-next-line no-param-reassign */
  categoriesWrapper.innerHTML = `
    ${hashIcon}
    ${categoriesList}
  `;
};

const renderAddress = (addressWrapper, address, city) => {
  const mapPinIcon = feather.icons["map-pin"].toSvg({
    width: "1em",
    height: "1em",
    stroke: "#d00",
  });
  /*  eslint-disable-next-line no-param-reassign */
  addressWrapper.innerHTML = `
    <address>
      ${mapPinIcon}
      <span>${address}, ${city}</span>
    </address>
  `;
};

const renderDescription = (descriptionWrapper, description) => {
  /*  eslint-disable-next-line no-param-reassign */
  descriptionWrapper.innerHTML = `
    <p class="restaurant-detail-description">${description}</p>
  `;
};

const renderFoods = (foodsWrapper, foods) => {
  const foodsList = foods.map((food) => `<li>${food.name}</li>`).join("");
  /*  eslint-disable-next-line no-param-reassign */
  foodsWrapper.innerHTML = `
    <h2 class="restaurant-detail-sub-heading">Foods</h2>
    <ul class="restaurant-detail-foods">
      ${foodsList}
    </ul>
  `;
};

const renderDrinks = (drinksWrapper, drinks) => {
  const drinksList = drinks.map((drink) => `<li>${drink.name}</li>`).join("");
  /*  eslint-disable-next-line no-param-reassign */
  drinksWrapper.innerHTML = `
    <h2 class="restaurant-detail-sub-heading">Drinks</h2>
    <ul class="restaurant-detail-drinks">
      ${drinksList}
    </ul>
  `;
};

const renderCustomerReviews = (customerReviewsWrapper, customerReviews) => {
  const customerReviewsList = customerReviews
    .map(
      (customerReview) => `
      <article class="restaurant-detail-review">
        <header class="restaurant-detail-review__header">
          <p class="restaurant-detail-review__name">${customerReview.name}</p>
          <time class="restaurant-detail-review__date">${customerReview.date}</time>
        </header>
        <section class="restaurant-detail-review__body">
          <p class="restaurant-detail-review__review">${customerReview.review}</p>
        </section>
      </article>
    `
    )
    .join("");
  /*  eslint-disable-next-line no-param-reassign */
  customerReviewsWrapper.innerHTML = `
    ${customerReviewsList}
  `;
};

const renderFavouriteButton = (favouriteButtonWrapper, restaurant) => {
  elementHelper.clearElementContent(favouriteButtonWrapper);
  const buttonFavourite = new ButtonFavourite(
    restaurant,
    favouriteRestaurantStore
  );
  buttonFavourite.setAttribute("id", "btn-favourite");
  favouriteButtonWrapper.appendChild(buttonFavourite);
};

const validateNameInput = (nameInput) => {
  if (nameInput.value.length === 0 && nameInput.nextElementSibling === null) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("text", "text--primary", "mb-4");
    errorMessage.textContent = "Please provide your name !";
    nameInput.classList.add("input--error");
    nameInput.parentElement.appendChild(errorMessage);
  } else if (nameInput.nextElementSibling) {
    nameInput.classList.remove("input--error");
    nameInput.parentElement.removeChild(nameInput.nextElementSibling);
  }
  return nameInput.value.length !== 0;
};

const validateReviewInput = (reviewInput) => {
  if (
    reviewInput.value.length === 0 &&
    reviewInput.nextElementSibling === null
  ) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("text", "text--primary", "mb-4");
    errorMessage.textContent = "Please provide your review !";
    reviewInput.classList.add("input--error");
    reviewInput.parentElement.appendChild(errorMessage);
  } else if (reviewInput.nextElementSibling) {
    reviewInput.classList.remove("input--error");
    reviewInput.parentElement.removeChild(reviewInput.nextElementSibling);
  }
  return reviewInput.value.length !== 0;
};

const formReviewSubmitHandler = (id) => async (event) => {
  event.preventDefault();
  const nameInput = event.target.querySelector('input[name="name"]');
  const reviewInput = event.target.querySelector('textarea[name="review"]');

  if (!validateNameInput(nameInput) && !validateReviewInput(reviewInput))
    return;

  const name = nameInput.value;
  const review = reviewInput.value;
  const customerReviewsWrapper = document.getElementById(
    "restaurant-customer-reviews-wrapper"
  );

  try {
    const postResponseJSON = await apiHelper.postReview({
      id,
      name,
      review,
    });

    renderCustomerReviews(
      customerReviewsWrapper,
      postResponseJSON.customerReviews
    );
  } catch (error) {
    /*  eslint-disable-next-line  no-alert */
    alert("We're sorry, we currently unable to submit your review");
  }
  nameInput.value = "";
  reviewInput.value = "";
};

const renderNotFoundRestaurant = (mainWrapper) => {
  /*  eslint-disable-next-line no-param-reassign */
  mainWrapper.innerHTML = `
    <div class="mt-10 text-center">
      <p class="text text--center text--primary text--display-error">
        We apologize for the inconvenience, but  it seems that the restaurant you're looking for aren't not found.
      </p>
    </div>
  `;
};

const postRender = async (id) => {
  const appWrapper = document.getElementById("app-wrapper");

  const mainWrapper = appWrapper.querySelector("main#main");

  const imageWrapper = document.getElementById("restaurant-image-wrapper");
  const nameWrapper = document.getElementById("restaurant-name-wrapper");
  const ratingWrapper = document.getElementById("restaurant-rating-wrapper");
  const categoriesWrapper = document.getElementById(
    "restaurant-categories-wrapper"
  );
  const addressWrapper = document.getElementById("restaurant-address-wrapper");
  const descriptionWrapper = document.getElementById(
    "restaurant-description-wrapper"
  );
  const foodsWrapper = document.getElementById("restaurant-foods-wrapper");
  const drinksWrapper = document.getElementById("restaurant-drinks-wrapper");
  const customerReviewsWrapper = document.getElementById(
    "restaurant-customer-reviews-wrapper"
  );
  const favouriteButtonWrapper = document.getElementById(
    "restaurant-favourite-wrapper"
  );

  const formReview = document.getElementById("form-review");
  try {
    const restaurant = await apiHelper.getRestaurant(id);
    if (typeof restaurant === "undefined") {
      appWrapper.innerHTML = `
      <main class="restaurant-detail-main" id="main" tabindex="0"></main>
      `;
      renderNotFoundRestaurant(mainWrapper);
      return;
    }
    renderImage(imageWrapper, restaurant.pictureId);
    renderName(nameWrapper, restaurant.name);
    renderRating(ratingWrapper, restaurant.rating);
    renderCategories(categoriesWrapper, restaurant.categories);
    renderAddress(addressWrapper, restaurant.address, restaurant.city);
    renderDescription(descriptionWrapper, restaurant.description);
    renderFoods(foodsWrapper, restaurant.menus.foods);
    renderDrinks(drinksWrapper, restaurant.menus.drinks);
    renderCustomerReviews(customerReviewsWrapper, restaurant.customerReviews);
    renderFavouriteButton(favouriteButtonWrapper, restaurant);

    formReview.addEventListener("submit", formReviewSubmitHandler(id));
  } catch (error) {
    appWrapper.innerHTML = `
    <main class="restaurant-detail-main" id="main" tabindex="0"></main>
    `;
    messageHelper.showRenderErrorMessage(appWrapper.querySelector("main#main"));
  }
};

export default { render, postRender };
