import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
      console.log('hi')
    }
    getCart();
  }, []);

  // console.log(cart)

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/');
  }

  return (
    <main className='ShoppingCartPage flex'>
      <h1>Shopping Cart</h1>
      { cart?.orderItems.length >= 1 ?
        <>
          <CartList order={cart} setCart={setCart} />
          <div className='checkout-container flex'>
            <h3 className='subtotal'>Subtotal ({cart?.totalOrderQty} items): ${cart?.totalOrderPrice.toFixed(2)}</h3>
            <button className="button is-rounded is-responsive checkout" onClick={handleCheckout}>Checkout</button>
          </div>
        </>
        :
        <>
          <p className='empty-cart'>Your cart is currently empty.</p>
          <Link to='/items'>
            <p className='continue-shopping'>Continue Shopping</p>
          </Link>
        </>
      }
    </main>
  );
}

// RETURN POINT IF NEED BE