import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import './IndexItem.css';

export default function IndexItem({ item, cart, setCart }) {

  /* ====Event Handlers==== */
  async function handleAddToCart(itemId) {
    // the resolved promise returned is the updated cart
    const updatedCart = await ordersAPI.addToCart(itemId);
    setCart(updatedCart)
  }

  return (
    <div className="IndexItem flex">
      <div className="img-idx-container flex-ctr-ctr">
        <Link to={`/items/${item._id}`}>
          <img className='product-idx-img' src={item.picture} alt={item.name} />
        </Link>
      </div>
      <div className="bottom-idx">
        <Link to={`/items/${item._id}`}>
          <h4>{item.name}</h4>
        </Link>
        <div className='add-cart-con center flex'>
            <p>${item?.price.toFixed(2)}</p>
          {/* <button onClick={() => handleAddToCart(item._id)}>
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button> */}
          <button id="add-cart-index-page" className="button is-rounded" onClick={() => handleAddToCart(item._id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}