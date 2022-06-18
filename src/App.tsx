import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import AboutUs from './Pages/AboutUs/AboutUs';
import Analitics from './Pages/Analitics/Analitics';
import Disclosure from './Pages/Disclosure/Disclosure';
import Home from './Pages/Home/Home';
import Listing from './Pages/Listing/Listing';
import Market from './Pages/Market/Market';
import News from './Pages/News/News';
import NewsPage from './Pages/NewsPage/NewsPage';


const App:React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/listing' element={<Listing/>}/>
        <Route path='/disclosure' element={<Disclosure/>}/>
        <Route path='/analitics' element={<Analitics/>}/>
        <Route path='/market' element={<Market/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/newsPage' element={<NewsPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
