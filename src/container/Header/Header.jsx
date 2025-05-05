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
        <SubHeading title="Chase the new flavor" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          The key to fine dining lies not just in the quality of ingredients or the skill of the chef,
          but in the seamless fusion of flavors, textures, and presentation. Every dish tells a story
          of craftsmanship and attention to detail, inviting diners on a culinary journey that delights
          the senses and leaves a lasting impression.
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
        <img src={images.welcome} alt="Welcome to our restaurant" />
      </div>

      {/* Modal / Popup */}
      {showMenuModal && (
        <div className="modal_overlay" onClick={() => setShowMenuModal(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={() => setShowMenuModal(false)}>✕</button>
            <h2>Today's Specials</h2>
            <p>
              Dive into our carefully curated menu featuring:
            </p>
            <ul className="modal_list">
              <li><strong>Signature Dish:</strong> Truffle-infused Filet Mignon</li>
              <li><strong>Seafood:</strong> Grilled Lobster Tail with Lemon Butter</li>
              <li><strong>Dessert:</strong> Chocolate Lava Cake with Vanilla Bean Ice Cream</li>
              <li><strong>Beverage:</strong> House-made Lavender Lemonade</li>
            </ul>
            <p>
              Each item is handcrafted using fresh, locally-sourced ingredients and prepared with passion by our award-winning chefs.
            </p>
            <button className="custom__button modal_button">View Full Menu</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;