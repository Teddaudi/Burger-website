import React, { useState } from 'react'
import './Heros.css'
import Logo from './img/logo.svg';
import MenuClose from "./img/icon-close-menu.svg"
import MenuIcon from "./img/icon-menu.svg"
// import Databiz from "./img/client-databiz.svg"
// import ClientAudio from "./img/client-audiophile.svg"
// import ClientMeet from "./img/client-meet.svg"
// import ClientMaker from "./img/client-maker.svg"


const Heros = () => {
    const [navOpen, setNavOpen] = useState(false);

  
    const toggleNav = () => {
      setNavOpen(!navOpen);
      console.log("clicked toggle")
    };

    return (
        <div>
            <nav>
                <img src={Logo} alt="logo img" class="logo" />
                <ul className={`nav-links ${navOpen ? 'nav-open': ''}`} >
                    <img src={MenuClose} alt="close icon" className="toggle-nav-btn close-nav" onClick={toggleNav} />
                    <li className="nav-link features" >Menu </li>



                    <li className="nav-link company">Cart </li>



                    <li className="nav-link">Contact Us</li>

                    <li className="nav-link push-right">Login</li>
                    <li className="nav-link btn">Register</li>
                </ul>
                <img src={MenuIcon} alt="burger icon" className="toggle-nav-btn" onClick={toggleNav} />
            </nav>

            <main>
                <div className="intro">
                    <div className="details">
                        <h1 className="section-title"><span>Make </span>your order</h1>
                        <p className="section-description">Get your team in sync, no matter your location. Streamline processes,
                            create team
                            rituals and watch productivity soar.</p>
                        <button className="btn">Order now</button>
                    </div>
                </div>
                <picture className="img-container">
                    <source
                        srcset="https://img.freepik.com/premium-photo/divided-hamburger_147620-1303.jpg?size=626&ext=jpg&uid=R107934376&ga=GA1.2.831985192.1688442252&semt=sph"
                        media="(width < 70em)" />
                    <img src="https://img.freepik.com/premium-photo/divided-hamburger_147620-1303.jpg?size=626&ext=jpg&uid=R107934376&ga=GA1.2.831985192.1688442252&semt=sph"
                        alt="" className="hero-img" />
                </picture>
            </main>
        </div>
    )
}

export default Heros;
                // <div class="clients">
                //     <img src={Databiz} alt="" class="client-logo" />
                //     <img src={ClientAudio} alt="" class="client-logo" />
                //     <img src={ClientMeet} alt="" class="client-logo" />
                //     <img src={ClientMaker} alt="" class="client-logo" />
                // </div>