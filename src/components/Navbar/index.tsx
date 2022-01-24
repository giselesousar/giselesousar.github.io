import { useState } from 'react';
import './styles.css';
const Navbar = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">Gisele</a>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a 
                href="#home" 
                className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}
                onClick={() => {setActiveSection('home'); setShowMenu(false)}}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#about" 
                className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`}
                onClick={() => {setActiveSection('about'); setShowMenu(false)}}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#skills" 
                className={`nav__link ${activeSection === 'skills' ? 'active-link' : ''}`}
                onClick={() => {setActiveSection('skills'); setShowMenu(false)}}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#qualification" 
                className={`nav__link ${activeSection === 'qualification' ? 'active-link' : ''}`}
                onClick={() => {setActiveSection('qualification'); setShowMenu(false)}}
              >
                <i className="uil uil-scenery nav__icon"></i> Qualification
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#portfolio" 
                className={`nav__link ${activeSection === 'portfolio' ? 'active-link' : ''}`}
                onClick={() => {setActiveSection('portfolio'); setShowMenu(false)}}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#contact" 
                className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`}
                onClick={() => {setActiveSection('contact'); setShowMenu(false)}}
              >
                <i className="uil uil-message nav__icon"></i> Contact me
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close" onClick={() => setShowMenu(false)}></i>
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps" onClick={() => setShowMenu(true)}></i>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;