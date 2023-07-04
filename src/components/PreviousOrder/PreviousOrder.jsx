export default function PreviousOrder({ order }) {
  const orderPlacedDate = new Date(order.updatedAt).toLocaleDateString();
  console.log(order)
  console.log(order.updatedAt)

  return (
    // TODO: Remove temporary border inline styling
    <div style={{border: '1px solid black'}}>
      <h3>Order {order.orderId}</h3>
      <h4>Order Placed: {orderPlacedDate}</h4>
      <h5>Order Price: ${order.totalOrderPrice.toFixed(2)}</h5>
      <p>Qty of items in order: {order.totalOrderQty}</p>
    </div>
  );
}