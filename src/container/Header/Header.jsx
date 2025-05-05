import React, { useState } from 'react';
import './Header.scss';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Header = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      {/* Left: Text Content */}
      <div className="app__wrapper_info">
        <SubHeading title="Discover the art of flavor" />
        <h1 className="app__header-h1">Where Taste Becomes an Experience</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          At Byte & Dine, we believe food is more than sustenance — it’s emotion, memory, and storytelling.
          Our chefs craft dishes that awaken senses, blending global influences with local ingredients in a dance of texture and aroma.
          This is not just a meal. It's a moment you’ll remember long after the last bite.
        </p>
        <button 
          className="custom__button" 
          type="button"
          onClick={() => setShowMenuModal(true)}
        >
          Explore Menu
        </button>
      </div>

      {/* Right: Image */}
      <div className="app__wrapper_img">
        <img src={images.food} alt="Welcome to our restaurant" />
      </div>

      {/* Modal / Popup */}
      {showMenuModal && (
        <div className="modal_overlay" onClick={() => setShowMenuModal(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={() => setShowMenuModal(false)}>✕</button>
            <h2>This Week’s Culinary Journey</h2>
            <p>
              Indulge in flavors inspired by seasons and stories:
            </p>
            <ul className="modal_list">
              <li><strong>Epicurean Delight:</strong> Duck Confit with Orange Glaze</li>
              <li><strong>Sea Whisper:</strong> Pan-Seared Scallops with Citrus Foam</li>
              <li><strong>Earth Harvest:</strong> Wild Mushroom Risotto with Truffle Oil</li>
              <li><strong>Sweet Reverie:</strong> Matcha Tiramisu with Raspberry Coulis</li>
            </ul>
            <p>
              Each dish is plated with precision and served with soul — a harmony of taste, texture, and elegance.
            </p>
            <button className="custom__button modal_button">View Full Menu</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;