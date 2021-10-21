import { categories } from "../../mockdata/categories";
import { restaurant_clients } from "../../mockdata/restaurants";

// Find a product in a restaurant based upon resturants urlpath(name of restaurant) and product id
export const findProductByID = (
  restaurant_urlpath: string,
  product_id: string
) => {
  // Get restaurant product is from
  const restaurant = restaurant_clients.find(
    (restaurant) => restaurant.urlpath === restaurant_urlpath
  );

  // Find product based upon productID in string format
  var foundProd;
  restaurant?.categories.forEach((category) =>
    category.products.forEach((product) => {
      if (product.product_id.toLocaleString() === product_id) {
        foundProd = product;
      }
    })
  );
  return foundProd;
};
