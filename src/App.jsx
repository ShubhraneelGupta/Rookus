// App.jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Layout from './Layout'
import React from 'react';
import Hero from './components/Hero/Hero';  
import title from './assets/Rookus-title-4.png';
import Contact from './components/Contact/Contact'
import Team from './components/Team/Team'
import kafka from './assets/kafka.jpg'

const teamMembers = [
  {
    image: `${kafka}`,
    name: 'Member 1',
    description: 'Description for member 1',
  },
  {
    image: `${kafka}`,
    name: 'Member 2',
    description: 'Description for member 2',
  },
];




const Home = () => {
  return <Hero title={title} />
}

const ContactUs = () => {
  return <Contact/>
}

const Features = () => {
  return <h1 style={{color:"white"}}>WORKING ON THIS</h1>
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
        {
          path: "/team",
          element: <Team members={teamMembers} />
        },
        {
          path: "/features",
          element: <Features/>
        }
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
} 

export default App;
