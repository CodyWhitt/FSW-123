import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from "./Layout";
import HomePage from './HomePage';
import Transactions from './Transactions'
import Profile from './Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<App/>}/>
        <Route path="HomePage" element={<HomePage/>}/>
        <Route path="Transactions" element ={<Transactions/>}/>
        <Route path="Profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
