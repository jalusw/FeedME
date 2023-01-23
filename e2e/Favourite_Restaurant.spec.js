const assert = require("assert");

Feature("Favourite Restaurant");

Scenario(
  "Attempting To Favourite A Restaurant From Home Page",
  async ({ I }) => {
    I.amOnPage("/#/");

    I.waitForElement("restaurant-card");
    const targetRestaurant = locate("restaurant-card").first();
    const targetRestaurantName = await I.grabTextFrom(
      targetRestaurant.find(".card__title")
    );

    I.click(targetRestaurant.find("button"));
    I.amOnPage("/#/favourite");
    I.waitForElement("restaurant-card");

    const firstFavouritedRestaurant = locate("restaurant-card").first();
    const firstFavouritedRestaurantName = await I.grabTextFrom(
      firstFavouritedRestaurant.find(".card__title")
    );

    assert.strictEqual(targetRestaurantName, firstFavouritedRestaurantName);
  }
);

Scenario(
  "Attempting To Favourite A Restaurant From Restaurant Detail Page",
  async ({ I }) => {
    I.amOnPage("/#/");

    I.waitForElement("restaurant-card");
    const targetRestaurant = locate("restaurant-card").first();
    const targetRestaurantName = await I.grabTextFrom(
      targetRestaurant.find(".card__title")
    );

    I.click(targetRestaurant.find("a"));
    I.waitForElement(".restaurant-detail-name");

    const restaurantNameOnDetailPage = await I.grabTextFrom(
      ".restaurant-detail-name"
    );

    assert.strictEqual(targetRestaurantName, restaurantNameOnDetailPage);
    I.click("#btn-favourite");

    I.amOnPage("/#/favourite");
    I.waitForElement("restaurant-card");

    const firstFavouritedRestaurant = locate("restaurant-card").first();
    const firstFavouritedRestaurantName = await I.grabTextFrom(
      firstFavouritedRestaurant.find(".card__title")
    );

    assert.strictEqual(
      restaurantNameOnDetailPage,
      firstFavouritedRestaurantName
    );
  }
);

Scenario(
  "Attempting To Remove Favourited Restaurant From Home Page",
  async ({ I }) => {
    I.amOnPage("/#/");
    I.waitForElement("restaurant-card");

    const targetRestaurant = locate("restaurant-card").first();

    I.click(targetRestaurant.find("button"));
    I.amOnPage("/#/favourite");
    I.waitForElement("restaurant-card");
    I.seeElement("restaurant-card");

    I.amOnPage("/#/");
    I.waitForElement("restaurant-card");
    I.click(targetRestaurant.find("button"));

    I.amOnPage("/#/favourite");
    I.see(
      "Your favourite list is currently empty",
      '//*[@id="restaurants-wrapper"]/div/p'
    );
    I.dontSee("restaurant-card");
  }
);

Scenario(
  "Attempting To Remove Favourited Restaurant From Detail Page",
  async ({ I }) => {
    I.amOnPage("/#/");
    I.waitForElement("restaurant-card");

    const targetRestaurant = locate("restaurant-card").first();

    I.click(targetRestaurant.find("a"));
    I.waitForElement(".restaurant-detail-name");
    I.click("#btn-favourite");

    I.amOnPage("/#/favourite");
    I.waitForClickable("restaurant-card");
    I.seeElement("restaurant-card");

    I.amOnPage("/#/");
    I.click(targetRestaurant.find("a"));
    I.waitForElement(".restaurant-detail-name");
    I.click("#btn-favourite");

    I.amOnPage("/#/favourite");
    I.see(
      "Your favourite list is currently empty",
      '//*[@id="restaurants-wrapper"]/div/p'
    );
    I.dontSee("restaurant-card");
  }
);

Scenario(
  "Attempting To Remove Favourited Restaurant From Favourite Page",
  async ({ I }) => {
    I.amOnPage("/#/");
    I.waitForElement("restaurant-card");

    const targetRestaurant = locate("restaurant-card").first();

    I.click(targetRestaurant.find("button"));
    I.amOnPage("/#/favourite");
    I.waitForElement("restaurant-card");
    I.seeElement("restaurant-card");

    I.amOnPage("/#/favourite");
    I.waitForElement("restaurant-card");

    const firstFavouritedRestaurant = locate("restaurant-card").first();
    I.click(firstFavouritedRestaurant.find("button"));

    I.amOnPage("/#/favourite");
    I.see(
      "Your favourite list is currently empty",
      '//*[@id="restaurants-wrapper"]/div/p'
    );
    I.dontSee("restaurant-card");
  }
);
