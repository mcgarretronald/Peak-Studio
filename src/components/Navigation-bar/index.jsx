import React, { useState } from "react";
import "./index.css";
import { Link } from 'react-router-dom';

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigationBar">
      <section className="nav-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxptxj-YA49vBMbhK_t6WLwKcKlnC6Ukw8ZoEA5Zepj-auHINy" alt="Logo" />
        <div className="logoname">PeakStudio</div>
        <i className="fa-solid fa-bars" id="bars" onClick={handleMenuToggle}></i>
      </section>
      <div className={`navlinks ${menuOpen ? 'open' : 'close'}`}>
        <i className="fa-solid fa-xmark" id="x-mark" onClick={handleMenuToggle}></i>
        <section>
          <ul>
            <li>
              <Link to="/"><a href="#">Home</a></Link>
            </li>
            <li>
              <Link to="/aboutus"><a href="#">About us</a></Link>
            </li>
            <li>
              <Link to="/services"><a href="#">Services</a></Link>
            </li>
            <li>
              <Link to="/portfolio"><a href="#">Portfolio</a></Link>
            </li>
          </ul>
        </section>
        <section className="topo">
          <Link to="/portfolio">
            <button type="button">
              Explore projects <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default NavigationBar;
