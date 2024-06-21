import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/rookus-logo.jpg'
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <nav className="navbar glass-shadow">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#features">Features</a>
      </div>
      <div className="hamburger" ref={hamburgerRef} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About Us</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
        <a href="#features" onClick={toggleMenu}>Features</a>
      </div>
    </nav>
  );
};

export default Header;
