import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import PreviousOrder from '../PreviousOrder/PreviousOrder';
import './OrdersList.css';

export default function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(function() {
    async function getAllOrders() {
      const orders = await ordersAPI.getAllOrders();
      setOrders(orders)
    };
    getAllOrders();
  }, []);

  const userOrders = orders.map(order => (
    <PreviousOrder order={order} key={order._id}/>
  ));

  return (
    <>
      <h1>Order History</h1>
      <section className='OrdersList'>
        {userOrders}
      </section>
    </>
  );
}