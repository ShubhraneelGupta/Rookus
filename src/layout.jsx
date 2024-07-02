import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Chatbot from './components/Chatbot/Chatbot'
import logo from './assets/rookus-logo.png';
import Contact from "./components/Contact/Contact";

const Layout = () => {
    const navItems = ['Home', 'Team', 'Contact', 'Features'];
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            minHeight:"100vh"
        }}>
            <Header logoSRC={logo} navItems={navItems} />
            <main style={{
                flex: "1",
                display:"flex", 
                flexDirection:"column", 
                justifyContent:"center", 
                alignItems:"center"}}>                
                <Outlet />
            </main>
            <Footer />
            <Contact />
            <Chatbot/>
        </div>
    )
}

export default Layout