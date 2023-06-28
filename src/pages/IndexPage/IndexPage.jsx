import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import IndexItem from '../../components/IndexItem/IndexItem';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import FilterLocation from '../../components/FilterLocation/FilterLocation';

export default function IndexPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCat, setActiveCat] = useState('all'); // Active Category
  const [activeLoc, setActiveLoc] = useState('all'); // Active Location
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

  // Filtering - Defaults to 'All' - Filter by Category and/or Location
  useEffect(function() {
    let filteredProducts = items;
    if (activeCat !== 'all' && activeLoc !== 'all') {
      filteredProducts = items.filter(item => item.location === activeLoc && item.category === activeCat);
    }
    if (activeCat === 'all' && activeLoc !== 'all') {
      filteredProducts = items.filter(item => item.location === activeLoc);
    }
    if (activeCat !== 'all' && activeLoc === 'all') {
      filteredProducts = items.filter(item => item.category === activeCat);
    }
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