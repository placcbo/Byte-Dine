import React from 'react';
import './Navbar.scss';
import {images} from '../../constants/index'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'



const Navbar = () =>{

    const [toggleMenu, setToggleMenu] = React.useState(false)


return (
<nav className="app__navbar">
<div className="app__navbar-logo">
<h1 style={{color:'white'}}>Byte & Dine</h1>
</div>
<ul className='app__navbar-links'>
{["home","about","menu","awards","contact"].map(item => 
    <li className='p__opensans'><a href= {`#${item}`}>{item}</a></li>
)}
</ul>
<div className="app__navbar-login">
    <a href="#login" className='p__opensans'>Log in / Register</a>
   <div />
    <a href="/" className='p__opensans'>Book a table</a>
</div>

<div className="app__navbar-smallscreen">
    <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>


    {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen-links'>
{["home","about","menu","awards","contact"].map(item => 
    <li className='p__opensans'><a href= {`#${item}`}>{item}</a></li>
)}
</ul>
        </div>
       ) }



</div>

</nav>
)};

export default Navbar;
