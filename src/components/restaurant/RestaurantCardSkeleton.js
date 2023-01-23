class RestaurantCardSkeleton extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="card">
        <header class="card__header">
          <skeleton-rounded data-height="180px" data-width="100%"></skeleton-rounded>
          <div class="card__title-wrapper">
            <skeleton-rounded  data-height="1em" data-width="50%"></skeleton-rounded>
            <span class="card__rating-wrapper">
              <skeleton-rounded data-height="1em" data-width="1em"></skeleton-rounded>
              <skeleton-rounded data-height="1em" data-width="1em"></skeleton-rounded>
            </span>
          </div>
          <div style="margin-top: 0.25rem">
            <address class="card__address">
              <skeleton-rounded data-height="1em" data-width="1em"></skeleton-rounded>
              <skeleton-rounded data-height="1em" data-width="20%"></skeleton-rounded>
            </address>
          </div>
        </header>
        <section class="card__content">
          <skeleton-rounded data-height="1em" data-width="100%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="100%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="100%"></skeleton-rounded>
          <skeleton-rounded data-height="1em" data-width="100%"></skeleton-rounded>
        </section>
        <footer class="card__footer">
          <div>
            <skeleton-rounded class="block" data-height="4rem" data-width="10rem"></skelton-rounded>
          </div>
          <div>
            <skeleton-rounded class="block" data-height="4rem" data-width="4rem"></skelton-rounded>
          </div>
        </footer>
      </article>
      `;
  }
}

customElements.define("restaurant-card-skeleton", RestaurantCardSkeleton);

export default RestaurantCardSkeleton;
