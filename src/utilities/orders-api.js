import sendRequest from "./send-request";
const BASE_URL = '/api/orders';

// Retrieve the cart (unpaid order) from the currently logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}