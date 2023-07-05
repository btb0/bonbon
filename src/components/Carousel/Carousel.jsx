import { useState } from 'react';
import CarouselPicture from '../CarouselPicture/CarouselPicture';
import './Carousel.css';

export default function Carousel() {
  const [activePicture, setActivePicture] = useState(0);

  const pictures = [
    // require('../../../public/assets/cow.jpg'),
    // require('../../../public/assets/hichew.jpg'),
    // require('../../../public/assets/milkis.jpg'),
    'https://i.ibb.co/VxRz6Lr/cow.jpg',
    'https://i.ibb.co/vvK1NhG/hichew.jpg',
    'https://i.ibb.co/yV34D4J/milkis.jpg'
  ];

  const picture = pictures.map((picture, idx) => (
    <CarouselPicture picture={picture} key={idx} />
  ));

  const updatePicture = (newPicture) => {
    if (newPicture < 0) {
      newPicture = 0;
    } else if (newPicture >= pictures.length) {
      newPicture = pictures.length -1;
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
                key={picture}
              >
                <span 
                  className={`material-symbols-outlined ${idx === activePicture ? "indicator-symbol-active" : "indicator-symbol"}`}
                  key={picture}
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