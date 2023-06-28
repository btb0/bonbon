import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';

export default function ShoppingCartPage() {
  const [cart, setCart] = useState(null);

  useEffect(function() {
    // cart being the unpaid order for the logged in user
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart)
    }
    getCart();
  }, []);

  return (
    <main>
      <h1>cart</h1>
    </main>
  );
}