import OrderItem from '../OrderItem/OrderItem';

export default function CartList({ order, setCart }) {
  if (!order) return null;

  const orderItems = order.orderItems.map(item => 
    <OrderItem
      orderItem={item}
      setCart={setCart}
      key={item._id}
    />
  );

  return (
    <section>
      <h1>Cart List here</h1>
      <h2>Subtotal({order.totalOrderQty} items): ${order.totalOrderPrice?.toFixed(2)}</h2>
      {orderItems}
    </section>
  );
}