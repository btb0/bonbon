import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import IndexPage from '../IndexPage/IndexPage.jsx';
import HomePage from '../../pages/HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<HomePage />} />
            <Route path='/items' element={<IndexPage />} />
            {/* <Route path='/items/candy' element={<CandyPage />} /> */}
            {/* <Route path='/candy' element={<ChocolatePage />} /> */}
            {/* <Route path='/candy' element={<ChipPage />} /> */}
            {/* <Route path='/candy' element={<DrinkPage />} /> */}
            {/* <Route path='/candy' element={<CratePage />} /> */}
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
