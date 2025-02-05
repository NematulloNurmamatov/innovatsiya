import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Portal from './pages/Portal';
import Hujjatlar from './pages/Hujjatlar';
import Applications from './pages/Applications';
import NewsDetails from './pages/NewsDetails';
import Organizations from './pages/Organizations';
import Organization from './pages/Organization';
import OrganizationDetails from './pages/OrganizationDetails';
import OrganizationsDetails from './pages/OrganizationsDetails';
import Organizations2 from './pages/Organizations2';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<Portal />} />
          <Route path="/papers" element={<Hujjatlar />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/organizations2" element={<Organizations2 />} />


          <Route path="/news-details/:id" element={<NewsDetails />} />
          <Route path="/organization-details/:id" element={<OrganizationDetails />} />
          <Route path="/organizations-details/:id" element={<OrganizationsDetails />} />


          <Route path='*' element={<h1>Error page 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
