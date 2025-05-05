import React from 'react';
import "./Chef.scss";
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      {/* Image Section */}
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="Chef" />
      </div>

      {/* Text Content Section */}
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>

        {/* Quote & Description */}
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="Quote Icon" />
            <p className="p__opensans">
              "A great dish doesn’t just feed the body—it tells a story, stirs the soul, and lingers long after the last bite." 
              <br /><br />— Chef Laurent B.
            </p>
          </div>

          <p className="p__opensans">
            At Byte & Dine, we believe in crafting dishes that not only satisfy hunger but elevate the dining experience. Every meal is a labor of love, rooted in tradition and inspired by innovation.
          </p>
        </div>

        {/* Chef Signature */}
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="Signature" />
        </div>
      </div>
    </div>
  );
};

export default Chef;