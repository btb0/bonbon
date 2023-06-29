import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import IndexPage from '../IndexPage/IndexPage.jsx';
import HomePage from '../../pages/HomePage/HomePage';
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';
import ShoppingCartPage from '../ShoppingCartPage/ShoppingCartPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<HomePage />} />
            <Route path='/items' element={<IndexPage cart={cart} setCart={setCart} />} />
            <Route path='/items/:itemId' element={<ItemDetailPage cart={cart} setCart={setCart} />} />
            <Route path='/cart' element={<ShoppingCartPage cart={cart} setCart={setCart} />} />
            {/* Redirect to Home Page if the path does not match a Route above */}
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
