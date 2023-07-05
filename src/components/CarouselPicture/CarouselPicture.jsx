import { Link } from 'react-router-dom';
import './CarouselPicture.css';

export default function CarouselPicture({ picture, product }) {
  return (
    <div className="carousel-picture">
      <Link to={product}>
        <img src={picture} alt="featured" />
      </Link>
    </div>
  );
}