import { useState } from 'react';
import CarouselPicture from '../CarouselPicture/CarouselPicture';
import './Carousel.css';

export default function Carousel() {
  const [activePicture, setActivePicture] = useState(0);

  // TODO: Change product links to not be hardcoded - will have to update every time i reseed database
  const pictures = [
    {picture: 'https://i.ibb.co/VxRz6Lr/cow.jpg', product: 'http://localhost:3000/items/64a481d4b61da45b16277b52', product_live: 'https://bonbon-410-473d50b9f174.herokuapp.com/items/64a481d4b61da45b16277b52'},
    {picture: 'https://i.ibb.co/vvK1NhG/hichew.jpg', product: 'http://localhost:3000/items/64a481d4b61da45b16277b43', product_live: 'https://bonbon-410-473d50b9f174.herokuapp.com/items/64a481d4b61da45b16277b43'},
    {picture: 'https://i.ibb.co/yV34D4J/milkis.jpg', product: 'http://localhost:3000/items/64a481d4b61da45b16277b58', product_live: 'https://bonbon-410-473d50b9f174.herokuapp.com/items/64a481d4b61da45b16277b58'}
  ];

  const picture = pictures.map((picture, idx) => (
    <CarouselPicture 
      picture={picture.picture} 
      product={picture.product} 
      product_live={picture.product_live}
      key={idx} 
    />
  ));

  const updatePicture = (newPicture) => {
    if (newPicture < 0) {
      newPicture = 0;
    } else if (newPicture >= pictures.length) {
      newPicture = pictures.length - 1;
    }
    setActivePicture(newPicture)
  }

  return (
    <div className="carousel">
      <div className="inner" style={{ transform: `translate(-${activePicture * 100}%)` }}>
        {picture}
      </div>
      <div className="carousel-buttons flex">
        <button className='arrow-btn' onClick={() => updatePicture(activePicture - 1)}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators flex">
          { pictures.map((picture, idx) => {
            return (
              <button 
                className="indicator-btn" 
                onClick={() => updatePicture(idx)}
                key={picture.picture}
              >
                <span 
                  className={`material-symbols-outlined ${idx === activePicture ? "indicator-symbol-active" : "indicator-symbol"}`}
                  key={picture.picture}
                >radio_button_checked</span>
              </button>
            )
          }) }
        </div>
        <button className='arrow-btn' onClick={() => updatePicture(activePicture + 1)}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
}