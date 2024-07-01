import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Chatbot from './components/Chatbot/Chatbot'
import logo from './assets/rookus-logo.png';

const Layout = () => {
    const navItems = ['Home', 'Team', 'Contact', 'Features'];
    return (
        <>
            <Header logoSRC={logo} navItems={navItems} />
            <main>                
                <Outlet />
            </main>
            <Footer />
            <Chatbot/>
        </>
    )
}

export default Layout