import "./Hero.css";
import hand_icon from "/Assets/hand_icon.png";
import arrow_icon from "/Assets/arrow.png";
import hero_image from "/Assets/hero_image.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Swift Market</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collection</p>
          <p>For every day life.</p>
        </div>
        <div className="hero-lates-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
