import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import CartList from '../../components/CartList/CartList';
import './ShoppingCartPage.css';

export default function ShoppingCartPage({ cart, setCart }) {
  const navigate = useNavigate();

  useEffect(function() {
    // cart being the unpaid order for the logged in user
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart)
    }
    getCart();
  }, []);

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/');
  }

  return (
    <main>
      <h1>cart</h1>
      <CartList order={cart} setCart={setCart} />
      <button onClick={handleCheckout}>Checkout</button>
    </main>
  );
}