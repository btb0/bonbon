import OrdersList from '../../components/OrdersList/OrdersList';
import './OrderHistoryPage.css';

export default function OrderHistoryPage() {
  return (
    <main id="OrderHistoryPage" className='OrderHistoryPage flex'>
      <OrdersList />
    </main>
  );
}