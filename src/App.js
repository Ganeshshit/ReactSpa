import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./pages/home/home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './index.css'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
};

export default App;
