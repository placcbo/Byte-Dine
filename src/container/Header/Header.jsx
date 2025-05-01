import React from 'react';

import './Header.scss';
import {images} from '../../constants/index'
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id = "home">
     <div className="app__wrapper_info">
      <SubHeading title= "Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: "2rem 0"}}>The key to fine dining lies not just in the quality of ingredients or the skill of the chef, but in the seamless fusion of flavors, textures, and presentation. Every dish tells a story of craftsmanship and attention to detail, inviting diners on a culinary journey that delights the senses and leaves a lasting impression.</p>
      <button className="custom__button" type='button'>Explore menu</button>

     </div>
     <div className="app__wrapper_img">
      <img src= {images.welcome} alt="header img" />

     </div>

   
  </div>
 
);

export default Header;
