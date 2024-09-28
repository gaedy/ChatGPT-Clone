import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Settings from './components/Pages/Settings/Settings.jsx'
import App from './App.jsx'
import ErrorHandle from './components/Pages/Home/ErrorHandle.jsx'
import Pricing from './components/Pages/Pricing/Pricing.jsx'
import Personal from './components/Pages/Pricing/Personal/Personal.jsx'
import Business from './components/Pages/Pricing/Business/Business.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorHandle/>,
    children: [
      {
        path: "settings",
        element: <Settings/>,
        children: [
          {
            path: "/settings/:id",
            
          },
        ],
        
      },
    ]
  },

  {
    path: "/pricing",
    element: <Pricing/>,
    children: [
      {
        index: true,
        element: <Personal/>,
      },
      {
        path: "personal",
        element: <Personal/>,
        
      },
      {
        path: "business",
        element: <Business/>,
      }
      
    ]
  }
  
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
