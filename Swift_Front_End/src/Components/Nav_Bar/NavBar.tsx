import "./NavBar.css";
import logo from "/Assets/logo.png";
import shoping_cart from "/Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li
            onClick={() => setMenu("Kids")}
            className={menu === "Kids" ? "active" : ""}
          >
            <Link style={{ textDecoration: "none" }} to="/Kids">
              Kids
            </Link>
          </li>
          <li
            onClick={() => setMenu("Women")}
            className={menu === "Women" ? "active" : ""}
          >
            <Link style={{ textDecoration: "none" }} to="/Women">
              Women
            </Link>
          </li>
          <li
            onClick={() => setMenu("Men")}
            className={menu === "Men" ? "active" : ""}
          >
            <Link style={{ textDecoration: "none" }} to="/Men">
              Men
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-cart">
        <Link style={{ textDecoration: "none" }} to="/Cart">
          <div className="cart-icon">
            <img src={shoping_cart} alt="" />
            {true && <div className="cart-item-number">0</div>}
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/Login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
