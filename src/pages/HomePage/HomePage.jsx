import { Helmet } from 'react-helmet';
import Carousel from '../../components/Carousel/Carousel';
import './HomePage.css';

export default function HomePage() {
  return (
    <main className='HomePage'>
      <section className='carousel-container flex-ctr-ctr'>
        <Carousel />
      </section>
      <section>
        {/* Featured Section */}
      </section>
    </main>
  );
}