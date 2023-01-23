import db from "./idb-helper";

const storeName = "favourite-restaurants";

const validateRestaurantObject = (restaurant) => {
  if (typeof restaurant !== "object")
    throw new TypeError("Restaurant must be an object");

  if (!Object.prototype.hasOwnProperty.call(restaurant, "id"))
    throw new Error("Restaurant doesn't contain id property");
  if (!Object.prototype.hasOwnProperty.call(restaurant, "name"))
    throw new Error("Restaurant doesn't contain name property");
};

const validateId = (id) => {
  if (typeof id !== "string") throw new TypeError("id must be a string");
  if (id.trim().length === 0) throw new Error("id must not be empty");
};

const validateName = (name) => {
  if (typeof name !== "string") throw new TypeError("name must be a string");
  if (name.trim().length === 0) throw new Error("name must not be empty");
};

const insert = async (restaurant) => {
  validateRestaurantObject(restaurant);
  validateId(restaurant.id);
  validateName(restaurant.name);
  return (await db).add(storeName, restaurant);
};

const remove = async (id) => {
  validateId(id);
  return (await db).delete(storeName, id);
};
const get = async (id) => {
  validateId(id);
  return (await db).get(storeName, id);
};

const getAll = async () => {
  return (await db).getAll(storeName);
};

export default { insert, remove, get, getAll };
