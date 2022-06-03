import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import AboutUs from './Pages/AboutUs/AboutUs';
import Disclosure from './Pages/Disclosure/Disclosure';
import Home from './Pages/Home/Home';
import Listing from './Pages/Listing/Listing';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/listing' element={<Listing/>}/>
        <Route path='/disclosure' element={<Disclosure/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
