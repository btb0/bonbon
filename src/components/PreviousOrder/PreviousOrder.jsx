import './PreviousOrder.css';

export default function PreviousOrder({ order }) {
  const orderPlacedDate = new Date(order.updatedAt).toLocaleDateString();
  console.log(order)

  return (
    <div className='PreviousOrder flex'>
      {/* Image of first item in that order */}
      <div className='order-info flex'>
        <h3>Order: {order.orderId}</h3>
        <h4>{orderPlacedDate}</h4>
      </div>
      <div className='order-info-inner flex'>
        <div className='prev-order-img-container flex-ctr-ctr'>
          <img src={order.orderItems[0].item.picture} alt={order.orderItems[0].item.name} />
        </div>
        <div className='order-info-two flex'>
          <div className='history-total'>
            <h5>Total</h5>
            <p>${order.totalOrderPrice.toFixed(2)}</p>
          </div>
          <div className="history-qty">
            <h5>Quantity</h5>
            <p>{order.totalOrderQty} Items</p>
          </div>
        </div>
      </div>
      <button className='history-btn button is-responsive is-rounded'>View Details</button>
    </div>
  );
}