import "./Offers.css";
import exclusive_image from "/Assets/exclusive_image.png";
function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h2>Offers For You</h2>
        <p>Only On Best Sellers Products </p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;