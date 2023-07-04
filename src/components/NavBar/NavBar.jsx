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
    <nav className="NavBar flex" style={{width: '100%'}}>
      <div className="nav-links-one">
        <Link to="/items">Shop</Link>
        <Link to="/orders">Orders</Link>
        {/* <Link to="">Mystery Boxes</Link> */}
      </div>
      <div className="logo-text">
        <Link to='/'>
          <h1>bonbon+</h1>
        </Link>
      </div>
      <div className="nav-links-two flex">
        <span>Welcome, {user.name}</span>
        <Link to="/cart">
          <div className="cart-icon-div">
            <ion-icon name="cart-outline"></ion-icon>
            <span className="cart-badge">
              { cart ? cart?.totalOrderQty : 0 }
            </span>
          </div>
        </Link>
        &nbsp;&nbsp;
        <Link to="" onClick={handleLogOut}>
          <div className="logout-icon-div">
            <ion-icon name="log-out-outline"></ion-icon>
          </div>
        </Link>
      </div>
    </nav>
    // <nav className="NavBar flex" style={{width: '100%'}}>
    //   <div></div>
    //   <div className="logo-text">bonbon+</div>
    //   <div className="nav-links">
    //     <Link to="/items">Shop</Link>
    //     &nbsp; | &nbsp;
    //     <Link to="">Mystery Boxes</Link>
    //     &nbsp; | &nbsp;
    //     <Link to="/cart">
    //       <div className="cart-icon">
    //         <ion-icon name="cart-outline"></ion-icon>
    //         <span className="cart-badge">
    //           { cart ? cart?.totalOrderQty : 0 }
    //         </span>
    //       </div>
    //     </Link>
    //     &nbsp; | &nbsp;
    //     <Link to="/orders">Orders</Link>
    //     &nbsp; | &nbsp;
    //     <span>Welcome, {user.name}</span>
    //     &nbsp;&nbsp;
    //     <Link to="" onClick={handleLogOut}>Log Out</Link>
    //   </div>
    // </nav>
  );
}