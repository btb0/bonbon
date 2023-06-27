import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import IndexItem from '../../components/IndexItem/IndexItem';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import FilterLocation from '../../components/FilterLocation/FilterLocation';

export default function IndexPage() {
  const [items, setItems] = useState([]);
  const categoriesRef = useRef([]);
  const locationsRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      // Gets ALL products, regardless of category
      const products = await itemsAPI.getAll();
      // Adding categories / locations to an array (without duplicates)
      categoriesRef.current = [...new Set(products.map(product => product.category))];
      locationsRef.current = [...new Set(products.map(product => product.location))];
      setItems(products);
    }
    getItems();
  }, []);

  const chocolates = items.filter(item => item.category === 'chocolate')
  const products = items.map(item => (
    <IndexItem name={item.name} key={item._id} />
  ));

  return (
    <main>
      <div>
        <CategoriesList categories={categoriesRef.current}/>
        <FilterLocation locations={locationsRef.current} />
      </div>
      <h1>Index</h1>
      {products}
    </main>
  );
}