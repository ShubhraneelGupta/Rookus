import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import logo from './assets/rookus-logo.jpg'

const App = () => {
  const navItems = ["Home", "Team", "Contact", "Features"]

  return<>
    <Header logoSRC={logo} navItems={navItems}/>
    <Hero title={"ROOKUS"} desc={"where AI meets fashion"}/>
  </>
}


export default App