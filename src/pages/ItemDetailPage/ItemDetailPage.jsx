import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function ItemDetailPage({ cart, setCart }) {
  const [selectedItem, setSelectedItem] = useState({});
  const { itemId } = useParams();
  
  useEffect(function() {
    async function getItemDetails() {
      const item = await itemsAPI.getDetails(itemId);
      setSelectedItem(item);
    }
    getItemDetails();
  }, [itemId]);

  /* ====Event Handlers==== */
  async function handleAddToCart() {
    // the resolved promise returned is the updated cart
    const updatedCart = await ordersAPI.addToCart(itemId);
    setCart(updatedCart)
  }
  
  return (
    <main>
      <h1>{selectedItem.name}</h1>
      <p>SKU: {selectedItem.itemSKU}</p>
      <p>{selectedItem.description}</p>
      <p>{selectedItem.price?.toFixed(2)}</p>
      <p>{selectedItem.location}</p>
      <img src={selectedItem.picture} alt={selectedItem.name} />
      <button onClick={() => handleAddToCart(itemId)}>Add to Cart</button>
    </main>
  );
}