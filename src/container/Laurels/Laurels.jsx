import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './Laurels.scss';

const Laurels = () => {
  const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="award" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      {/* Text & Awards Section */}
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognitions" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="app__wrapper_img">
        <img src={images.dining} alt="Laurels" />
      </div>
    </div>
  );
};

export default Laurels;