import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Settings from './Pages/Settings/Settings'
import App from './App'
import ErrorHandle from './Pages/ErrorHandle'
import Pricing from './Pages/Pricing/Pricing'
import Personal from './Pages/Pricing/Personal/Personal'
import Business from './Pages/Pricing/Business/Business'

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
