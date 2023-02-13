import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Login from './Screens/Login';
import Home from './Screens/Home';
import Register from './Screens/Register';
import { removeToken } from './utils/storage';
import jwt_decode from "jwt-decode";
import Layout from './Layout';
import Rooms from './Screens/Rooms';
import ErrorScreen from './Screens/ErrorScreen';
import AuthContext from './utils/context';
import Networks from './Screens/Networks';
import Buildings from './Screens/Building';
import Stages from './Screens/Stages';
import Computer from './Screens/Devices/Computer';
import Phone from './Screens/Devices/Phone';
import Switch from './Screens/Devices/Switch';
import Dashboard from './Screens/Dashboard';
import Physical from './Screens/Physical';
if (localStorage.cartoToken) {
  const decode = jwt_decode(localStorage.cartoToken);
  const currentTime = Date.now() / 1000;
  if (decode.exp < currentTime) {
    removeToken();
    console.log("TOKEN REMOVED FROM INDEX JS")
  }
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorScreen />,
  },

  {
    path: "register",
    element: <Register />,

  },
]);
const Authrouter = createBrowserRouter([

  {

    element: <Layout outlet={<Outlet />} />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "/networks",
        element: <Networks />,
      },

      {
        path: "/buildings",
        element: <Buildings />,
      },
      {
        path: "/stages",
        element: <Stages />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/computers",
        element: <Computer />,
      },
      {
        path: "/phones",
        element: <Phone />,
      },
      {
        path: "/switches",
        element: <Switch />,
      },

      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/physical",
        element: <Physical />,
      }
    ]
  }]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext.Provider value={localStorage.cartoToken ? jwt_decode(localStorage.cartoToken) : null}>
      <RouterProvider router={localStorage.cartoToken ? Authrouter : router} />
    </AuthContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
