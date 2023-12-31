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

// Updates the item's quantity in the shopping cart
export function setItemQty(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

// 'Pays' for order - Update cart's isPaid property to true
export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

// Retrieves all orders for the logged in user to display on the order history page
export function getAllOrders() {
  return sendRequest(BASE_URL);
}