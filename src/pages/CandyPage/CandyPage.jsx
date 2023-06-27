import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import CandyItem from '../../components/CandyItem/CandyItem';

export default function CandyPage() {
  const [candy, setCandy] = useState([]);

  useEffect(function() {
    async function getCandy() {
      const items = await itemsAPI.getAll();
      const candy = items.filter(item => item.category === 'candy');
      setCandy(candy);
    }
    getCandy();
  }, []);

  // Temp - delete later
  const items = candy.map(item => (
    <CandyItem name={item.name} key={item._id} />
  ))

  return (
    <main>
      <h1>Candy</h1>
      {items}
    </main>
  );
}