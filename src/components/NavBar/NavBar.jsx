import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser, cart }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  
  return (
    <nav className="NavBar flex">
      <Link to="/items">Shop</Link>
      &nbsp; | &nbsp;
      <Link to="">Mystery Boxes</Link>
      &nbsp; | &nbsp;
      <Link to="/cart">
        <div className="cart-icon">
          <ion-icon name="cart-outline"></ion-icon>
          <span className="cart-badge">
            { cart ? cart?.totalOrderQty : 0 }
          </span>
        </div>
      </Link>
      &nbsp; | &nbsp;
      <Link to="/orders">Orders</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}