import OrderItem from '../OrderItem/OrderItem';
import './CartList.css';

export default function CartList({ order, setCart }) {
  console.log(order)
  if (!order) return null;

  const orderItems = order.orderItems.map(item => 
    <OrderItem
      orderItem={item}
      setCart={setCart}
      key={item._id}
    />
  );

  return (
    <section className='CartList'>
      { order.orderItems.length >= 1 ? 
        <table className='cart-table'>
          <thead className='cart-list-titles'>
            <tr className='center'>
              <th className='product-th' style={{textAlign: 'left'}}>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orderItems}
          </tbody>
        </table>
        :
        <p>Your cart is currently empty.</p>
      }
    </section>
  );
}