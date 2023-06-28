import { useParams } from 'react-router-dom';

export default function ItemDetailPage() {
  const { itemId } = useParams();
  return (
    <main>
      <h1>Item Details</h1>
    </main>
  );
}