import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import {Video} from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:
    [
      {
        path: "/video",
        element: <Video/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);