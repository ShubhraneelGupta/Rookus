// App.jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Layout from './layout'
import React from 'react';
import Hero from './components/Hero/Hero';  
import title from './assets/Rookus-title-4.png';
import Contact from './components/Contact/Contact'


const Home = () => {
  return <Hero title={title} />
}

const ContactUs = () => {
  return <Contact/>
}


function App() {
  const router = createBrowserRouter([
    {

      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
} 

export default App;
