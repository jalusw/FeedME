const assert = require("assert");

Feature("Customer Review");

Scenario("Attempting To Review A Restaurant", async ({ I }) => {
  I.amOnPage("/#/");
  I.waitForElement("restaurant-card");
  I.click(locate("restaurant-card").first().find("a"));
  I.waitForElement(".restaurant-detail-review");

  const reviewerName = "Alice";
  const reviewerMessage = "Mantap";

  I.fillField("name", reviewerName);
  I.fillField("review", reviewerMessage);
  I.click("#btn-review-submit");
  I.wait(3);

  const latestReview = locate(".restaurant-detail-review").last();
  const latestReviewerName = await I.grabTextFrom(
    latestReview.find("//header/p")
  );
  const latestReviewerMessage = await I.grabTextFrom(
    latestReview.find("//section/p")
  );

  assert.strictEqual(latestReviewerName, reviewerName);
  assert.strictEqual(latestReviewerMessage, reviewerMessage);
});
