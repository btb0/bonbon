import { Link } from 'react-router-dom';
import './CarouselPicture.css';

export default function CarouselPicture({ picture, product, product_live }) {
  const url = window.location.href;

  return (
    <div className="carousel-picture">
      {/* Links to different links depending if its deployed or development version */}
      <Link to={url.includes('localhost') ? product : product_live}>
        <img src={picture} alt="featured" />
      </Link>
    </div>
  );
}