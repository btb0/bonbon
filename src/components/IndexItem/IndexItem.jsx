import { Link } from 'react-router-dom';

export default function IndexItem({ item }) {
  return (
    <Link to={`/items/${item._id}`}>
      <div>
        <h4>{item.name}</h4>
      </div>
    </Link>
  );
}