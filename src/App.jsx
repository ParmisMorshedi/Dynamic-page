import Header from "./Components/Header";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Aboutme from "./Components/Aboutme";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/Resume' element={<Resume />} />
            <Route path ='/Contact' element={<Contact/>} />
            <Route path ='/Portfolio' element={<Portfolio/>} /> 
            <Route path="/about" element={<Aboutme />} />

        </Routes>
      
      </BrowserRouter>   
      <Footer />  
       
     
    </>
  );
}

export default App
