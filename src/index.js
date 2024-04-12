import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VideoApp from './container/videoApp';
import Login from './container/login';
import Excource from './container/cource/Excource';
import Java from './container/fetches/java';
import Yplaylist from './container/fetches/yplaylist';
import Htmlnote from './container/Htmlnote'
import Cssnote from './container/notes/Cssnote';
import Jsnote from './container/notes/jsnote';
import Python from './container/fetches/python';
import SignIn from './container/signIn';
const route=new createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      
    },
    {
      path:"/videoApp",
      element:<VideoApp/>,
      children:[
        {
          path:"java",
          element:<Java/>
        },
        {
          path:"dsa",
          element:<Yplaylist/>
        },
        {
          path:"python",
          element:<Python/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/explore",
      element:<Excource/>
    },
   {
    path:"/htmls",
    element:<Htmlnote/>
   }, 
   {
    path:"/css",
    element:<Cssnote/>
   },
   {
    path:"/js",
    element:<Jsnote/>
   },
   {
    path:"/signin",
    element:<SignIn/>
   }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
