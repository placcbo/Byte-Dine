import React, { useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images } from '../../constants';
import './SpecialMenu.scss';

const data = {
  wines: [
    { title: 'Four Cousins Sweet Red', price: 'KES 1,200', tags: 'South Africa | 750ml' },
    { title: 'Carlo Rossi', price: 'KES 1,500', tags: 'USA | Red | 750ml' },
    { title: 'Simonsig Chenin Blanc', price: 'KES 2,000', tags: 'South Africa | White | 750ml' },
    { title: 'Tusker Lager', price: 'KES 250', tags: 'Kenya | Beer | 500ml' },
    { title: 'White Cap Lager', price: 'KES 250', tags: 'Kenya | Beer | 500ml' },
  ],
  cocktails: [
    { title: 'Dawa', price: 'KES 600', tags: 'Vodka | Lime | Honey | Crushed Ice' },
    { title: 'Kenya Mule', price: 'KES 700', tags: 'Vodka | Ginger beer | Lime' },
    { title: 'Safari Sunset', price: 'KES 750', tags: 'Rum | Pineapple | Grenadine' },
    { title: 'Passion Mojito', price: 'KES 700', tags: 'White Rum | Passion Fruit | Mint' },
    { title: 'Classic Margarita', price: 'KES 800', tags: 'Tequila | Lime | Triple Sec' },
  ],
  desserts: [
    { title: 'Chocolate Lava Cake', price: 'KES 450', tags: 'Warm chocolate cake with molten center' },
    { title: 'Mango Sorbet', price: 'KES 350', tags: 'Fresh mango puree, chilled delight' },
    { title: 'Cheesecake', price: 'KES 500', tags: 'New York style with berry compote' },
  ],
};

const SpecialMenu = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      {/* Title Section */}
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      {/* Menu Layout */}
      <div className="app__specialMenu-menu">
        {/* Wine & Beer */}
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        {/* Image Separator */}
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="Menu separator" />
        </div>

        {/* Cocktails */}
        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>

      {/* Expandable Desserts Section */}
      {showMore && (
        <div className="app__specialMenu-more animate__fadeIn">
          <h2 className="headtext__cormorant" style={{ fontSize: '2rem', marginTop: '3rem' }}>Desserts</h2>
          <div className="app__specialMenu-menu_desserts">
            {data.desserts.map((dessert, index) => (
              <MenuItem key={dessert.title + index} title={dessert.title} price={dessert.price} tags={dessert.tags} />
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <div className="app__specialMenu-button">
        <button type="button" className="custom__button" onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;