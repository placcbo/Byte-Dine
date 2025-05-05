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
        <SubHeading title="The Heart Behind the Heat" />
        <h1 className="headtext__cormorant">A Culinary Philosophy</h1>

        {/* Quote & Description */}
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="Quote Icon" />
            <p className="p__opensans">
              “Cooking is not just about ingredients or technique — it's about memory, emotion, and the hands that shape every plate.” 
              <br /><br />— Chef Kevin Ndirangu
            </p>
          </div>

          <p className="p__opensans">
            At Byte & Dine, we believe food should be more than nourishment — it should be an experience.
            Every dish is a canvas. Every flavor, a brushstroke. We cook not just for the palate, but for the heart.
            Our kitchen breathes tradition, dances with innovation, and thrives on passion.
          </p>
        </div>

        {/* Chef Signature */}
        <div className="app__chef-sign">
          <p>Kevin Ndirangu</p>
          <p className="p__opensans">Executive Chef & Founder</p>
          
        </div>
      </div>
    </div>
  );
};

export default Chef;