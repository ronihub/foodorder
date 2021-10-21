import { restaurant_clients } from "../../mockdata/restaurants";

// Find restaurant by title
export const findRestaurantByTitle = (restaurant_urlpath: string) => {
  return restaurant_clients.find(
    (restaurant) => restaurant.urlpath === restaurant_urlpath
  );
};

// Find restaurant by id
export const findRestaurantByID = (restaurant_id: string) => {
  return restaurant_clients.find(
    (restaurant) => restaurant.id.toLocaleString() === restaurant_id
  );
};
