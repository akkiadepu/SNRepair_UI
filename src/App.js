import logo from './logo.svg';
import './App.css';
import HomePage from './Homepage/Homecall/HomePage';
import AboutPage from './AboutUs/AboutCall/AboutPage';
import ActivitsPage from './ActivitsPage/ActivitsCall/ActivitsPage';
import ServicesPage from './Services/ServicesCall/ServicesPage';
import ContactPage from './ContactUsPage/ContactCall/ContactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Homepage/Home/Header/Header';
import PrintingServices from './Services/ServicesPages/PrintingServices/PrintingServices';
import RepaireServices from './Services/ServicesPages/RepaireServices/RepaireServices';
import WashingServices from './Services/ServicesPages/WashingServices/WashingServices';
import ScrollToTop from './Homepage/Home/Header/ScrollToTop';
import AdminDashboard from './Admin/AdminPages/AdminDashboard';
import AddActivities from './Admin/AdminPages/AddActivities';
import CustomerRequst from './Admin/AdminPages/CustomerRequst';
import PrivateRoute from './Admin/AdminPages/PrivateRoute';
import Admin from './Admin/AdminPages/Admin';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <ScrollToTop/>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/activities" element={<ActivitsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/Services/ServicesPages/PrintingServices" element={<PrintingServices />} />
          <Route path="/Services/ServicesPages/RepaireServices" element={<RepaireServices />} />
          <Route path="/Services/ServicesPages/WashingServices" element={<WashingServices />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/login" element={<Admin/>}/>
         <Route path="/admin/AdminDashboard"  element={<PrivateRoute><AdminDashboard/></PrivateRoute>} />
          <Route path="/admin/AddActivities" element={<PrivateRoute><AddActivities/></PrivateRoute>} />
          <Route path="/admin/CustomerRequst" element={<PrivateRoute><CustomerRequst/></PrivateRoute>} />  
         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
