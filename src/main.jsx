import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider } from 'react-router-dom';
import { router } from './components/Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <RouterProvider router={router} />
    {/* <App /> */}
    <Toaster />
  </>,
)
