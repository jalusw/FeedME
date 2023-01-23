const API_URL = "https://restaurant-api.dicoding.dev";

const getRestaurants = async () => {
  const response = await fetch(`${API_URL}/list`);
  const json = await response.json();
  return json.restaurants;
};

const getRestaurant = async (id) => {
  const response = await fetch(`${API_URL}/detail/${id}`);
  const json = await response.json();
  return json.restaurant;
};

const generateSmallImageUrl = (picture) => `${API_URL}/images/small/${picture}`;
const generateMediumImageUrl = (picture) =>
  `${API_URL}/images/medium/${picture}`;
const generateLargeImageUrl = (picture) => `${API_URL}/images/large/${picture}`;

const postReview = async (data) => {
  const response = await fetch(`${API_URL}/review`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
};

export default {
  getRestaurants,
  getRestaurant,
  generateSmallImageUrl,
  generateMediumImageUrl,
  generateLargeImageUrl,
  postReview,
};
