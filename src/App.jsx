import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import logo from './assets/rookus-logo.png'
import title from './assets/Rookus-title.png'
import Footer from './components/Footer/Footer'

const App = () => {
  const navItems = ["Home", "Team", "Contact", "Features"]
  return<>
    <Header logoSRC={logo} navItems={navItems}/>
    <Hero title={title}/>
    <Footer/>
  </>
}


export default App