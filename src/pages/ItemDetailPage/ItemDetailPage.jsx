import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';

export default function ItemDetailPage() {
  const [selectedItem, setSelectedItem] = useState({});
  const { itemId } = useParams();
  
  useEffect(function() {
    async function getItemDetails() {
      const item = await itemsAPI.getDetails(itemId);
      setSelectedItem(item);
    }
    getItemDetails();
  }, []);

  return (
    <main>
      <h1>{selectedItem.name}</h1>
      <p>{selectedItem.description}</p>
      <p>{selectedItem.price}</p>
      <p>{selectedItem.location}</p>
      <img src={selectedItem.picture} alt={selectedItem.name} />
    </main>
  );
}