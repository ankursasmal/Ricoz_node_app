import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from './components/Register';
import Home from './components/Home';
import Edit from './components/Edit';
import EditPage from './components/EditPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
    element: <Home/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/edit/:params",
        element: <EditPage/>,
      },
    ]
  },
   
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);

 reportWebVitals();
