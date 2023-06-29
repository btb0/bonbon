import OrderItem from '../OrderItem/OrderItem';

export default function CartList({ order }) {
  if (!order) return null;

  const orderItems = order.orderItems.map(item => 
    <OrderItem
      orderItem={item}
      key={item._id}
    />
  );

  return (
    <section>
      <h1>Cart List here</h1>
      {orderItems}
    </section>
  );
}