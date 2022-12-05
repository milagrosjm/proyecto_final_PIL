//react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route   } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';

//components imports
import App from './App';
import Registry from './components/registry/registry_form'
import Home from './components/home/home_form'
import Login from './components/login/login_form'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/registro" element={<Registry />} />
            <Route path="/inicio/:username" element={<Home />} />
            <Route path="/ingreso" element={<Login/>} />
          </Routes>
        </div>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
