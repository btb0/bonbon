import { useEffect, useState } from 'react';
import HistoryItem from '../HistoryItem/HistoryItem';
import Modal from 'react-modal';
import './OrderHistoryModal.css';

export default function OrderHistoryModal({ order, modalOpen, setModalOpen }) {
  const orderPlacedDate = new Date(order.updatedAt).toLocaleDateString();

  const orderItems = order.orderItems.map(item => 
    <HistoryItem
      orderItem={item}
      key={item._id}
    />
  );

  function closeModal() {
    setModalOpen(false)
    const page = document.getElementById('OrderHistoryPage')
    page.style.overflowY = 'scroll'
    page.style.height = 'auto'
  }

  Modal.setAppElement('#OrderHistoryPage');

  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className='history-modal'
        overlayClassName='modal-overlay'
      >
        <div className="modal-header flex">
          <div className='modal-header-container'>
            <div className="modal-order-date">{orderPlacedDate}</div>
            <div className="modal-title">Order: {order.orderId}</div>
          </div>
          <button onClick={closeModal} className="close-btn delete is-large">&times;</button>
        </div>
        <div className="modal-mid flex">
          <h3>Total Price ({order.totalOrderQty} Items): ${order?.totalOrderPrice.toFixed(2)}</h3>
        </div>
        <section className="modal-body">
          <section className='CartList history-table'>
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
          </section>
        </section>
      </Modal>
      <div className="overlay"></div>
      {/* <div className="history-modal" id="history-modal">
        <div className="modal-header flex">
          <div className="modal-title">Order: {order.orderId}</div>
          <button data-close-button className="close-btn delete">&times;</button>
        </div>
        <div className="modal-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis ipsam ex eum praesentium, expedita at suscipit qui facere dolores omnis quidem delectus debitis. Quia, vel exercitationem odit alias reprehenderit enim amet nesciunt at iste consequatur. Omnis labore nam voluptatum.
        </div>
      </div>
      <div id='overlay'></div> */}
    </>
  );
}