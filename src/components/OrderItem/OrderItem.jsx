import * as ordersAPI from '../../utilities/orders-api';

export default function OrderItem({ orderItem, setCart }) {

  /* ===== Event Handlers ===== */
  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQty(itemId, newQty);
    setCart(updatedCart);
  }

  return (
    // TODO: Remove temporary border styling below
    <div style={{border: '1px solid black'}}>
      <h3>{orderItem.item.name}</h3>
      <h4>${orderItem.item.price?.toFixed(2)}</h4>
      <p>Qty: {orderItem.qty}</p>
      <button onClick={() => handleChangeQty(orderItem.item._id, orderItem.qty - 1)}> - </button>
      <button onClick={() => handleChangeQty(orderItem.item._id, orderItem.qty + 1)}> + </button>
      <p>Total Price: ${orderItem.extPrice?.toFixed(2)}</p>
    </div>
  );
}