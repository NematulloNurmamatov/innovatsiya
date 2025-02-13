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
import OrganizationDetails2 from './pages/OrganizationDetails2';
import Regions from './pages/Regions';
import Technos from './pages/Technos';
import Accelators from './pages/Accelators';
import TechnosDetails from './pages/TechnosDetails';
import AccelatorsDetails from './pages/AccelatorsDetails';
import Projects from './pages/Projects';
import Disserts from './pages/Disserts';
import Blutten from './pages/Blutten';
import Datas from './pages/Datas';
import Outinst from './pages/Outinst';
import Memoriandums from './pages/Memoriandums';
import Doktorantura from './pages/Doktorantura';
import Rules from './pages/Rules';
import Quotes from './pages/Quotes';
import Directions from './pages/Directions';
import Codes from './pages/Codes';
import Register from './pages/Register';


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
          <Route path="/regions" element={<Regions />} />
          <Route path="/technos" element={<Technos />} />
          <Route path="/accelators" element={<Accelators />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/disserts" element={<Disserts />} />
          <Route path="/blutten" element={<Blutten />} />
          <Route path="/datas" element={<Datas />} />
          <Route path="/outinst" element={<Outinst />} />
          <Route path="/memoriandums" element={<Memoriandums />} />
          <Route path="/doktorantura" element={<Doktorantura />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/codes" element={<Codes />} />
          <Route path="/register" element={<Register />} />




          <Route path="/news-details/:id" element={<NewsDetails />} />
          <Route path="/organization-details/:id" element={<OrganizationDetails />} />
          <Route path="/organizations-details/:id" element={<OrganizationsDetails />} />
          <Route path="/technos-details/:id" element={<TechnosDetails />} />
          <Route path="/accelators-details/:id" element={<AccelatorsDetails />} />
          

          <Route path='*' element={<h1>Error page 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
