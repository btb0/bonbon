import { useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import CartList from '../../components/CartList/CartList';

export default function ShoppingCartPage({ cart, setCart }) {

  // TODO: Fix Shopping cart bug

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
      <CartList order={cart} setCart={setCart} />
    </main>
  );
}