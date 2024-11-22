import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <h1>NEW ARRIVALS ONLY</h1>
          <div className="hand-hand-icon">
            <p>New</p>
            <img src="./Frontend_Assets/hand_icon.png" alt="" />
          </div>
          <p className="light">Collections</p>
          <p>For everyone</p>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src="./Frontend_Assets/arrow.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src="./Frontend_Assets/hero_image.png" alt="" />
      </div>
    </div>
  );
};
