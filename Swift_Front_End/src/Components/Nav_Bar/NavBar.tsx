import "./NavBar.css";
import logo from "/Assets/logo.png";
import shoping_cart from "/Assets/cart_icon.png";
import { useState } from "react";
function NavBar() {
  const [menu, setMenu] = useState("Home");
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <div className="logotxt">
          Swift
          <span className="logotextspan">Market</span>
        </div>
      </div>
      <div className="nav_menu">
        <ul>
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("Kids")}
            className={menu === "Kids" ? "active" : ""}
          >
            Kids
          </li>
          <li
            onClick={() => setMenu("Women")}
            className={menu === "Women" ? "active" : ""}
          >
            Women
          </li>
          <li
            onClick={() => setMenu("Men")}
            className={menu === "Men" ? "active" : ""}
          >
            Men
          </li>
        </ul>
      </div>
      <div className="nav-cart">
        <div className="cart-icon">
          <img src={shoping_cart} alt="" />
          {true && <div className="cart-item-number">0</div>}
        </div>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default NavBar;
