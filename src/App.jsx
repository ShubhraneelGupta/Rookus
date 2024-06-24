// App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import logo from './assets/rookus-logo.png';
import title from './assets/Rookus-title.png';

const App = () => {
  const navItems = ['Home', 'Team', 'Contact', 'Features'];

  return (
    <>
      <Header logoSRC={logo} navItems={navItems} />
      <Hero title={title} />
      <Footer />
      <Chatbot />
    </>
  );
};

export default App;
