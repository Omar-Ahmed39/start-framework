import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';


const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      {
        path: '*', element:
          <div>
            <h1 className='fw-bolder  d-flex justify-content-center align-content-center'>404 Not Found</h1>
          </div>
      },
    ]
  },
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
