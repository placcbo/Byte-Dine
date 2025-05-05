import React, { useState } from 'react';
import { images } from '../../constants';
import './AboutUs.scss';

const AboutUs = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  return (
    <section className="aboutus section__padding" id="about">
      {/* Modal for About Us */}
      {showAboutModal && (
        <div className="modal_overlay" onClick={() => setShowAboutModal(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={() => setShowAboutModal(false)}>✕</button>
            <h2>About Byte & Dine</h2>
            <p>
              At Byte & Dine, we believe in crafting dishes that not only satisfy hunger but elevate the dining experience.
              Every meal is a labor of love, rooted in tradition and inspired by innovation.
            </p>
            <p>
              Our kitchen is fueled by passion, precision, and an unwavering commitment to quality — making every bite unforgettable.
            </p>
          </div>
        </div>
      )}

      {/* Modal for History */}
      {showHistoryModal && (
        <div className="modal_overlay" onClick={() => setShowHistoryModal(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={() => setShowHistoryModal(false)}>✕</button>
            <h2>Our Journey</h2>
            <p>
              Born in the heart of Nairobi, we started as a small bistro and grew into a culinary destination loved by locals and travelers alike.
            </p>
            <p>
              From our first dish to today’s menu, we’ve stayed true to our roots while embracing evolution — always serving with soul and authenticity.
            </p>
          </div>
        </div>
      )}

      <div className="aboutus_container grid">
        {/* Left Column - About */}
        <div className="aboutus_left">
          <h2 className="aboutus_title">About Us</h2>
          <img src={images.spoon} alt="Spoon" className="aboutus_spoon" />
          <p className="aboutus_description">
            Where every bite whispers elegance, and every moment tastes unforgettable.
          </p>
          <button className="btn_primary" onClick={() => setShowAboutModal(true)}>Know More</button>
        </div>

        {/* Center Column - Chef Quote */}
        <div className="aboutus_center">
          <div className="aboutus_quote-card">
            <blockquote className="aboutus_quote">
              “Cooking is not just about feeding people — it's about making them feel at home.”
            </blockquote>
            <p className="aboutus_author">— Chef Kevin Ndirangu</p>
          </div>
        </div>

        {/* Right Column - History */}
        <div className="aboutus_right">
          <h2 className="aboutus_title">Our History</h2>
          <img src={images.spoon} alt="Spoon" className="aboutus_spoon" />
          <p className="aboutus_description">
            Born in the heart of Nairobi, we started as a small bistro and grew into a culinary destination loved by locals and travelers alike.
          </p>
          <button className="btn_primary" onClick={() => setShowHistoryModal(true)}>Know More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;