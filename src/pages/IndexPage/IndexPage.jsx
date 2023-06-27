import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import IndexItem from '../../components/IndexItem/IndexItem';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import FilterLocation from '../../components/FilterLocation/FilterLocation';

export default function IndexPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCat, setActiveCat] = useState(''); // Active Category
  const [activeLoc, setActiveLoc] = useState(''); // Active Location
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
      setActiveCat(categoriesRef.current[2]); // Default Category is 'candy'
      setActiveLoc(locationsRef.current[1]); // Default Location is 'Canada'
    }
    getItems();
  }, []);

  useEffect(function() {
    const filteredProducts = items.filter(item => item.category === activeCat && item.location === activeLoc);
    setFilteredItems(filteredProducts);
  }, [activeCat, activeLoc, items]);


  const products = filteredItems.map(item => (
    <IndexItem name={item.name} key={item._id} />
  ));

  return (
    <main>
      <div>
        <CategoriesList 
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat} 
        />
        <FilterLocation 
          locations={locationsRef.current}
          activeLoc={activeLoc}
          setActiveLoc={setActiveLoc} 
        />
      </div>
      <h1>Index</h1>
      {products}
    </main>
  );
}