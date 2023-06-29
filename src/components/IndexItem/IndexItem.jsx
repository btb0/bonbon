import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';

export default function IndexItem({ item, cart, setCart }) {

  /* ====Event Handlers==== */
  async function handleAddToCart(itemId) {
    // the resolved promise returned is the updated cart
    const updatedCart = await ordersAPI.addToCart(itemId);
    setCart(updatedCart)
  }

  return (
    <Link to={`/items/${item._id}`}>
      <div>
        <h4>{item.name}</h4>
        <button onClick={() => handleAddToCart(item._id)}>Add to Cart</button>
      </div>
    </Link>
  );
}