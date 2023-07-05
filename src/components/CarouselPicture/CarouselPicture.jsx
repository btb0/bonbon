import './CarouselPicture.css';

export default function CarouselPicture({ picture }) {
  return (
    <div className="carousel-picture">
      <img src={picture} alt="featured" />
    </div>
  );
}