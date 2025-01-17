import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Error from './components/Error/index.jsx'
import Services from './components/Service-/index.jsx'
import Aboutpage from './components/About-us/index.jsx'
import Portfolio from './components/Porfolio/index.jsx'
import Contact from './components/Contactus-page/index.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Buildings from './components/Porfolio/buildings.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: "/aboutus",
    element: <Aboutpage/>,
  },
  {
    path: "/portfolio",
    element: <Portfolio/>,
  },  {
    path: "/services",
    element: <Services/>,
  },
  {
    path:'/contactus',
    element:<Contact/>
  },
  {
    path: "/buildings",
    element: <Buildings />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
