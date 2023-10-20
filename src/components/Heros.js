import React, { useEffect, useState } from 'react';
import './Heros.css';
import Logo from '../img/logo.svg';
import MenuClose from "../img/icon-close-menu.svg";
import MenuIcon from "../img/icon-menu.svg";
import { Link } from 'react-router-dom';
import login from './util/localStorage';

const Heros = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  
  return (
    <div>
      <nav className='d-flex justify-content-between align-items-center'>
        <Link to='/hero'>
          <img src={Logo} alt="logo img" className="logo" />
        </Link>
        <ul className={`nav-links ${navOpen ? 'nav-open' : ''}`}>
          <img src={MenuClose} alt="close icon" className="toggle-nav-btn close-nav" onClick={toggleNav} />
          <li className="nav-link">
            <Link to='/menu' style={{ color: 'black' }}>Menu</Link>
          </li>
          <li className="nav-link">
            <Link to='/cart' style={{ color: 'black' }}>Cart</Link>
          </li>
          <li className="nav-link">
            <Link to='/contact' style={{ color: 'black' }}>Contact Us</Link>
          </li>
        </ul>
        <img src={MenuIcon} alt="burger icon" className="toggle-nav-btn" onClick={toggleNav} />
      </nav>

      <main>
        <div className="intro">
          <div className="details">
            <h1 className="section-title"><span>Make </span>your order</h1>
            <p className="section-description">Get your team in sync, no matter your location. Streamline processes,
              create team rituals and watch productivity soar.</p>
            <Link to='/menu' className='btn'>Order now</Link>
          </div>
        </div>
        <picture className="img-container">
          <img src="https://img.freepik.com/premium-photo/divided-hamburger_147620-1303.jpg?size=626&ext=jpg&uid=R107934376&ga=GA1.2.831985192.1688442252&semt=sph"
            alt="" className="hero-img" />
        </picture>
      </main>
    </div>
  );
}

export default Heros;
