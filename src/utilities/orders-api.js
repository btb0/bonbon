import sendRequest from "./send-request";
const BASE_URL = '/api/orders';

// Retrieve the cart (unpaid order) from the currently logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the shopping cart
export function addToCart(itemId) {
  // The itemId is being sent as a route paramater rather than sending in the body (either works)
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}