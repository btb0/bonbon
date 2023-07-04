import * as ordersAPI from '../../utilities/orders-api';
import './OrderItem.css';

export default function OrderItem({ orderItem, setCart }) {

  /* ===== Event Handlers ===== */
  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQty(itemId, newQty);
    setCart(updatedCart);
  }

  return (
    //TODO: REMOVE TEMP STYLING
    <tr className='center item-row'>
      <td>
        <div className='flex item-name'>
            <a className='no-spacing' href={`items/${orderItem.item._id}`}>
              <div className='item-img-container'>
                <img className="item-img" src={orderItem.item.picture} alt={orderItem.item.name}/>
              </div>
            </a>
            <a className='no-spacing' href={`items/${orderItem.item._id}`}>
              <p className='centered-text'>{orderItem.item.name}</p>
            </a>
        </div>
      </td>
      <td className='middle'>${orderItem.item.price?.toFixed(2)}</td>
      <td className='middle'>
        <button className='button is-rounded is-small btn is-responsive' onClick={() => handleChangeQty(orderItem.item._id, orderItem.qty - 1)}> - </button>
        {orderItem.qty}
        <button className='button is-rounded is-small btn is-responsive' onClick={() => handleChangeQty(orderItem.item._id, orderItem.qty + 1)}> + </button>
      </td>
      <td className='middle'>${orderItem.extPrice?.toFixed(2)}</td>
    </tr>
  );
}