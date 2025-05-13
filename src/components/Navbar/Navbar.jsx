import React from 'react';
import './Navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showBookingModal, setShowBookingModal] = React.useState(false);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="app__navbar">
        {/* Logo */}
        <div className="app__navbar-logo">
         <a href="#home"> <h1>Byte & Dine</h1></a>
        </div>

        {/* Desktop Menu */}
        <ul className="app__navbar-links">
          {["home", "about", "menu", "awards", "contact"].map((item) => (
            <li key={item} className="p__opensans">
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Login / Actions */}
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans" onClick={(e) => {
            e.preventDefault();
            setShowLoginModal(true);
          }}>
            Log in / Register
          </a>
          <div className="divider" />
          <a href="#book-table" className="p__opensans" onClick={(e) => {
            e.preventDefault();
            setShowBookingModal(true);
          }}>
            Book a Table
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen-links">
                {["home", "about", "menu", "awards", "contact"].map((item) => (
                  <li key={item} className="p__opensans">
                    <a href={`#${item}`} onClick={() => {
                      setToggleMenu(false);
                      scrollToSection(item);
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
                <li className="p__opensans">
                  <button onClick={() => {
                    setToggleMenu(false);
                    setShowBookingModal(true);
                  }}>Book a Table</button>
                </li>
                <li className="p__opensans">
                  <button onClick={() => {
                    setToggleMenu(false);
                    setShowLoginModal(true);
                  }}>Log in / Register</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal_overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={() => setShowLoginModal(false)}>✕</button>
            <h2>Welcome Back!</h2>
            <form className="auth-form">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="custom__button">Login</button>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                Don't have an account? <strong onClick={() => alert("Redirect to register")}>Register</strong>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="modal_overlay" onClick={() => setShowBookingModal(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button className="modal_close" onClick={() => setShowBookingModal(false)}>✕</button>
            <h2>Reserve Your Table</h2>
            <form className="booking-form">
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="date" required />
              <input type="time" required />
              <input type="number" placeholder="Number of Guests" min="1" max="20" required />
              <button type="submit" className="custom__button">Confirm Reservation</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;