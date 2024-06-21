import React, { useState, useEffect, useRef } from 'react';

import './Header.scss';

const Header = ({logoSRC, navItems}) => {
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
        <img src={logoSRC} alt="Logo" />
      </div>

      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        {navItems.map((navItem) => {
          return <a href={`#${navItem}`}>{navItem}</a>
        })}
      </div>

      <div className="hamburger" ref={hamburgerRef} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
        {navItems.map((navItem) => {
          return <a href={`#${navItem}`} onClick={toggleMenu}>{navItem}</a>
        })}
      </div>
    </nav>
  );
};

export default Header;
