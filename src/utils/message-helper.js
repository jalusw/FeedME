import feather from "feather-icons";

const showRenderErrorMessage = (wrapper) => {
  const wifiOffIcon = feather.icons["wifi-off"].toSvg({
    height: "3.25rem",
    width: "3.25rem",
    stroke: "#d00",
  });
  /* eslint-disable-next-line no-param-reassign */
  wrapper.innerHTML = `
    <div class="text-center">
      ${wifiOffIcon}
      <p class="text text--center text--primary text--display-error">
        We apologize for the inconvenience, but we are unable to display the content at this time. Please check your internet connection and try again later.
      </p>
    </div>
  `;
};

const showEmptyFavouriteMessage = (wrapper) => {
  /* eslint-disable-next-line no-param-reassign */
  wrapper.innerHTML = `
    <div class="text-center">
      <p class="text text--center text--primary text--display-error">
        Your favourite list is currently empty.
      </p>
    </div>
  `;
};

const showEmptyRestaurantMessage = (wrapper) => {
  /* eslint-disable-next-line no-param-reassign */
  wrapper.innerHTML = `
    <div class="text-center">
      <p class="text text--center text--primary text--display-error">
        There are no restaurants available at the moment.
      </p>
    </div>
  `;
};

export default {
  showRenderErrorMessage,
  showEmptyFavouriteMessage,
  showEmptyRestaurantMessage,
};
