import { Link } from "react-router-dom";
import './HistoryItem.css';

export default function HistoryItem({ orderItem }) {
  return (
    <tr className='center item-row-history'>
      <td>
        <div className='flex item-name'>
            <Link className='no-spacing' to={`/items/${orderItem.item._id}`}>
              <div className='item-img-container'>
                <img className="item-img" src={orderItem.item.picture} alt={orderItem.item.name}/>
              </div>
            </Link>
            <Link className='no-spacing' to={`/items/${orderItem.item._id}`}>
              <p className='centered-text'>{orderItem.item.name}</p>
            </Link>
        </div>
      </td>
      <td className='middle'>${orderItem.item.price?.toFixed(2)}</td>
      <td className='middle'>
        {orderItem.qty}
      </td>
      <td className='middle'>${orderItem.extPrice?.toFixed(2)}</td>
    </tr>
  );
}