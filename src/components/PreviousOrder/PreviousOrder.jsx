import { useState, useEffect } from 'react';
import OrderHistoryModal from '../OrderHistoryModal/OrderHistoryModal';
import './PreviousOrder.css';

export default function PreviousOrder({ order }) {
  const [modalOpen, setModalOpen] = useState(false);
  const orderPlacedDate = new Date(order.updatedAt).toLocaleDateString();

  useEffect(() => {
    if (modalOpen) {
      document.getElementById('OrderHistoryPage').style.overflowY = 'hidden'
    }
  }, [modalOpen])

  function openModal() {
    setModalOpen(true)
    const page = document.getElementById('OrderHistoryPage')
    page.style.overflowY = 'hidden'
    page.style.height = '90vh'
  }

  return (
    <div>
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
        <button 
          className='history-btn button is-responsive is-rounded'
          onClick={openModal}
        >View Details</button>
      </div>
      <OrderHistoryModal order={order} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}