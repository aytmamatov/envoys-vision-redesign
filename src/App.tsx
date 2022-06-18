import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutUs from './pages/AboutUs/AboutUs';
import Analitics from './pages/Analitics/Analitics';
import Disclosure from './pages/Disclosure/Disclosure';
import Home from './pages/Home/Home';
import Listing from './pages/Listing/Listing';
import Market from './pages/Market/Market';

const App:React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/disclosure" element={<Disclosure />} />
      <Route path="/analitics" element={<Analitics />} />
      <Route path="/market" element={<Market />} />
    </Routes>
  </Layout>
);

export default App;
