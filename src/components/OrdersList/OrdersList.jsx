import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import PreviousOrder from '../PreviousOrder/PreviousOrder';

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
    <section>
      <h2>List of Orders here</h2>
      {userOrders}
    </section>
  );
}