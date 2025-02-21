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
import OutinstDetails from './pages/OutinstDetails';
import ScienceCouncils from './pages/ScienceCouncils';
import Erasmus from './pages/Erasmus';
import Horizon from './pages/Horizon';
import IlmiyStajirovka from './pages/IlmiyStajirovka';
import Scientist from './pages/Scientist';
import StajirovkaQollanma from './pages/StajirovkaQollanma';
import StajirovkaDocs from './pages/StajirovkaDocs';
import StajirovkaSent from './pages/StajirovkaSent';
import Articles from './pages/Articles';
import Outbases from './pages/Outbases';
import Docs from './pages/Docs';
import Faq from './pages/Faq';
import News from './pages/News';
import Adverts from './pages/Adverts';
import Concs from './pages/Concs';
import Conference from './pages/Conference';
import Hayat from './pages/Hayat';
import Itk from './pages/Itk';
import Ideas from './pages/Ideas';
import Helps from './pages/Helps';
import Events from './pages/Events';
import Historys from './pages/Historys';
import Dayjeyts from './pages/Dayjeyts';
import GPhoto from './pages/GPhoto';
import GVideo from './pages/GVideo';
import Faq2 from './pages/Faq2';
import AdvetrsDetails from './pages/AdvetrsDetails';
import NewsDetail from './pages/NewsDetail';
import ConcsDetails from './pages/ConcsDetails';
import HayatDetails from './pages/HayatDetails';
import ItkDetails from './pages/ItkDetails';


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
          <Route path="/scienceCouncils" element={<ScienceCouncils />} />
          <Route path="/erasmus" element={<Erasmus />} />
          <Route path="/horizon" element={<Horizon />} />
          <Route path="/ilmiy-stajirovka" element={<IlmiyStajirovka />} />
          <Route path="/scientist" element={<Scientist />} />
          <Route path="/stajirovka-qollanma" element={<StajirovkaQollanma />} />
          <Route path="/stajirovka-docs" element={<StajirovkaDocs />} />
          <Route path="/stajirovka-sent" element={<StajirovkaSent />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/outbases" element={<Outbases />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/news" element={<News />} />
          <Route path="/adverts" element={<Adverts />} />
          <Route path="/concs" element={<Concs />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/hayat" element={<Hayat />} />
          <Route path="/itk" element={<Itk />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/helps" element={<Helps />} />
          <Route path="/events" element={<Events />} />
          <Route path="/historys" element={<Historys />} />
          <Route path="/dayjeyts" element={<Dayjeyts />} />
          <Route path="/gallery/photo" element={<GPhoto />} />
          <Route path="/gallery/video" element={<GVideo />} />
          <Route path="/faq2" element={<Faq2 />} />




          <Route path="/news-details/:id" element={<NewsDetails />} />
          <Route path="/organization-details/:id" element={<OrganizationDetails />} />
          <Route path="/organizations-details/:id" element={<OrganizationsDetails />} />
          <Route path="/technos-details/:id" element={<TechnosDetails />} />
          <Route path="/accelators-details/:id" element={<AccelatorsDetails />} />
          <Route path="/outinst-details/:id" element={<OutinstDetails />} />
          <Route path="/adverts-details/:id" element={<AdvetrsDetails />} />
          <Route path="/news-detail/:id" element={<NewsDetail />} />
          <Route path="/concs-detail/:id" element={<ConcsDetails />} />
          <Route path="/hayat-detail/:id" element={<HayatDetails />} />
          <Route path="/itk-details/:id" element={<ItkDetails />} />



          <Route path='*' element={<h1>Error page 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
