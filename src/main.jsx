import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Settings from './components/Pages/Settings/Settings.jsx'
import General from './components/Pages/Settings/General/General.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "settings/*",
        element: <Settings/>,
        children: [
          {
            path: ":id",
          },
        ],
        
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
